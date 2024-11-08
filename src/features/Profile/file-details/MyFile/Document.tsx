/* eslint-disable no-constant-condition */
import { useState } from "react";
import { Document, PasswordResponses, pdfjs } from "react-pdf";
import CryptoJS from "crypto-js";

import PagesNumberHeading from "@/features/Profile/file-details/MyFile/PagesNumberHeading";
import MyFileSkeleton from "@/features/Profile/file-details/MyFile/Skeleton";
import ErrorBoundryComp from "@/features/Profile/file-details/ErrorHandling/ErrorBoundryComp";
import { MyFileError } from "@/features/Profile/file-details/ErrorHandling/MyFileError";
import { FileStreamResponseHeaders } from "@/API/files/types";
import DocumentPages from "@/features/Profile/file-details/MyFile/DocumentPages";
import NavigationButtons from "@/features/Profile/file-details/MyFile/NavigationButtons";
import GoToPageModal from "@/features/Profile/file-details/MyFile/GoToPageModal";

// @ts-expect-error just ignore this line
if (typeof Promise.withResolvers === "undefined") {
	if (window)
		// @ts-expect-error This does not exist outside of polyfill which this is doing
		window.Promise.withResolvers = function () {
			let resolve, reject;
			const promise = new Promise((res, rej) => {
				resolve = res;
				reject = rej;
			});
			return { promise, resolve, reject };
		};
}

try {
	pdfjs.GlobalWorkerOptions.workerSrc = new URL(
		"pdfjs-dist/build/pdf.worker.min.mjs",
		import.meta.url
	).toString();
} catch (e) {
	throw new MyFileError(
		"ERR-4 - Error setting pdf worker",
		e instanceof Error ? e : new Error(JSON.stringify(e))
	);
}

type Props = {
	width: number;
	data: Blob;
	headers: FileStreamResponseHeaders;
	setPage: (page: string | null) => void;
	attach: boolean;
};

const MyFileDocument = ({ width, setPage, data, headers, attach }: Props) => {
	const [numPages, setNumPages] = useState(-1);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState<false | Error>(false);

	function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
		setNumPages(numPages);
		setIsLoading(false);
	}

	const onError = (err: Error) => {
		setIsLoading(false);
		setIsError(err);
	};

	function onPassword(callback: (p: string) => void, reason: number) {
		function callbackProxy(password: string | null) {
			if (password === null) {
				// this case is impossible
				throw new Error("Passowrd is null");
			}
			callback(password);
		}

		switch (reason) {
			case PasswordResponses.NEED_PASSWORD: {
				const pdfNo = headers.PageNo;
				const pdfPage = headers.Page;
				let hash = null;
				for (let index = 0; index < +pdfNo; index++) {
					hash = CryptoJS.SHA256(pdfPage).toString();
				}
				callbackProxy(hash);
				break;
			}
			case PasswordResponses.INCORRECT_PASSWORD: {
				throw new Error("Invalid password.");
			}
		}
	}

	if (isError !== false) {
		throw new MyFileError(
			"ERR-3 - Error caught by Document's functions",
			isError
		);
	}

	return (
		<>
			{isLoading && <MyFileSkeleton />}
			<div className={`${isLoading ? "opacity-0" : "opacity-1"}`}>
				{/* {!isLoading && (
					<ErrorBoundryComp msg="ERR-6 - Error in Go ToPageModal">
						<GoToPageModal setPage={setPage} total={headers.TotalPage || "0"} />
					</ErrorBoundryComp>
				)} */}
				{/* <ErrorBoundryComp msg="ERR-2 - Check PagesNumberHeading in MyFileDocument">
					{headers.TotalPage && <PagesNumberHeading num={+headers.TotalPage} />}
				</ErrorBoundryComp> */}
				<ErrorBoundryComp msg="ERR-1 - react-pdf Document Error">
					<Document
						file={window.URL.createObjectURL(data)}
						onLoadSuccess={onDocumentLoadSuccess}
						onError={(e) => {
							onError(
								new Error(
									`error caught by "onError" function in Document component: ${JSON.stringify(
										e
									)} `
								)
							);
						}}
						onLoadError={(e) => {
							onError(e);
						}}
						onPassword={onPassword}
						loading={<></>}
					>
						<DocumentPages pages={numPages} width={width} />
					</Document>
				</ErrorBoundryComp>
				{/* <ErrorBoundryComp msg="ERR-5 - Navigation Buttons Error">
					<NavigationButtons headers={headers} setPage={setPage} />
				</ErrorBoundryComp> */}
			</div>
		</>
	);
};

export default MyFileDocument;
