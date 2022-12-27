import { FC, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Pagination, Space, Typography } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import Loader from "../components/Loader/Loader";

import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PDFViewerPage: FC = () => {
	const [pdfFileUrl, setPdfFileUrl] = useState<string>();
	const [numPages, setNumPages] = useState<number>(1);
	const [pageNumber, setPageNumber] = useState<number>(1);

	const paginationComponent = (
		<Pagination
			simple
			defaultCurrent={1}
			current={pageNumber}
			pageSize={1}
			total={numPages}
			onChange={(page) => {
				setPageNumber(page);
			}}
		/>
	);

	return (
		<PageTemplate>
			<Typography.Title>PDF Viewer</Typography.Title>

			<Space
				align="center"
				direction="vertical"
				size="large"
				style={{
					width: "100%",
					marginTop: "30px",
					marginBottom: "30px",
				}}
			>
				<Upload
					accept="application/pdf"
					showUploadList={false}
					onChange={({ file }) => {
						file.originFileObj &&
							setPdfFileUrl(
								URL.createObjectURL(file.originFileObj)
							);
					}}
				>
					<Button
						icon={<UploadOutlined />}
						type="primary"
						style={{ marginBottom: "30px" }}
					>
						Upload PDF
					</Button>
				</Upload>

				{pdfFileUrl ? (
					<>
						{paginationComponent}

						<Document
							file={pdfFileUrl}
							loading={<Loader />}
							onLoadSuccess={({ numPages: pages }) => {
								setNumPages(pages);
							}}
							options={{
								cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
								cMapPacked: true,
								standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`,
							}}
						>
							<Page pageNumber={pageNumber} />
						</Document>

						{paginationComponent}
					</>
				) : null}
			</Space>
		</PageTemplate>
	);
};

export default PDFViewerPage;
