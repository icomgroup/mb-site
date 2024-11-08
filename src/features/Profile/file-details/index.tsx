import { Badge, Button } from "react-bootstrap";

import Error from "@/components/feedback/Error";
import FileDetailsSkeleton from "@/features/Profile/file-details/FileDetailsSkeleton";
import MyFile from "@/features/Profile/file-details/MyFile";
import { daysNumberFormater } from "@/utils/transform";
import { Link, Navigate, useParams } from "react-router-dom";
import fielsQueries from "@/API/files/queries";
import { useState } from "react";

const FileDetails = () => {
	const { id } = useParams();
	const query = fielsQueries.useGetFileDetails(id ?? "");
	if (id === undefined) return <Navigate to="/profile/files" />;

	const { data, isError, isLoading, error, isSuccess, refetch } = query;
	const [displayAttach, setdisplayAttach] = useState(false);

	if (isLoading) return <FileDetailsSkeleton />;
	if (isError)
		return (
			<Error
				retry={refetch}
				className="my-5"
				error={error}
				msg404="الملف المطلوب غير  موجود"
			/>
		);
	if (isSuccess)
		return (
			<div className="file-details">
				<div className="head d-flex justify-content-between flex-wrap align-items-center gap-2">
					<h2 className="h2 text-center">{data.name}</h2>
					{data?.hasAttached && (
						<Button
							onClick={() => {
								setdisplayAttach(!displayAttach);
							}}
						>
							{!displayAttach ? " عرض الملف الملحق" : "عرض الملف الاصلي"}
						</Button>
					)}

					<Badge bg="" className="badge-soft-secondary w-fit ">
						مدة الدراسة: {daysNumberFormater(data.study_time)}
					</Badge>
				</div>
				<p>{data.description}</p>
				<MyFile id={data.id} displayAttach={displayAttach} />
			</div>
		);
};

export default FileDetails;
