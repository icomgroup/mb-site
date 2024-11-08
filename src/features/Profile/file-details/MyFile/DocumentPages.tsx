import { Page } from "react-pdf";

type Props = {
	pages: number;
	width: number;
};
const DocumentPages = ({ pages, width }: Props) => {
	return new Array(pages === -1 ? 0 : pages)
		.fill(0)
		.map((_, index) => index + 1)
		.map((page, i) => (
			<>
				<Page
					width={width || undefined}
					loading={<></>}
					key={page}
					renderAnnotationLayer={false}
					renderTextLayer={false}
					pageNumber={page}
				/>
			</>
		));
};

export default DocumentPages;
