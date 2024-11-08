import { useEffect, useState } from "react";
import useResizeObserver from "use-resize-observer";

import fielsQueries from "@/API/files/queries";
import MyFileDocument from "@/features/Profile/file-details/MyFile/Document";
import MyFileSkeleton from "@/features/Profile/file-details/MyFile/Skeleton";
import MyFileError from "@/features/Profile/file-details/MyFile/Error";
import { FileStreamResponseHeaders } from "@/API/files/types";
import { getFileStreamHeaderData } from "@/utils/apiHelpers";
import { AxiosHeaders } from "axios";
import { getCurrentPageFromStorage } from "@/features/Profile/file-details/utils";
import { storage } from "@/utils/storage";

const MyFile = ({
	id,
	displayAttach,
}: {
	id: number;
	displayAttach: boolean;
}) => {
	const [width, setWidth] = useState(1);
	const [currPage, setCurrPage] = useState<null | string>(
		getCurrentPageFromStorage(id)
	);

	const [body, setbody] = useState({
		file: id ?? -1,
		withAttached: displayAttach,
		//pageNumber: currPage !== null ? +currPage : null,
	});
	const { data, isError, isLoading, isRefetching, isSuccess, error, refetch } =
		fielsQueries.useStreamFile(body);
	useEffect(() => {
		setbody({
			file: id ?? -1,
			withAttached: displayAttach,
			//pageNumber: currPage !== null ? +currPage : null,
		});
	}, [displayAttach]);

	useEffect(() => {
		refetch();
	}, [body]);

	const { ref } = useResizeObserver<HTMLDivElement>({
		onResize: ({ width: w }) => {
			if (w && w !== width) setWidth(w);
		},
	});

	const setPage = (page: string | null) => {
		setCurrPage(page);
		storage.setCurrentPages(id, page);
	};

	let headers: FileStreamResponseHeaders = {
		PageNo: "",
		NextPage: "",
		PrevPage: "",
		TotalPage: "",
		Page: "",
	};

	if (data && data?.headers instanceof AxiosHeaders) {
		headers = getFileStreamHeaderData(data?.headers);
	}
	return (
		<>
			<div className="file-preview" ref={ref}>
				{(isLoading || isRefetching) && <MyFileSkeleton />}
				{isError && (
					<MyFileError
						className="d-flex aling-items-center"
						error={error}
						refetch={() => {
							setPage(null);
							refetch();
						}}
					/>
				)}
				{!isRefetching && isSuccess && data && headers && (
					<>
						<MyFileDocument
							setPage={setPage}
							width={width}
							data={data.data}
							headers={headers}
							attach={displayAttach}
						/>
					</>
				)}
			</div>
		</>
	);
};

export default MyFile;
