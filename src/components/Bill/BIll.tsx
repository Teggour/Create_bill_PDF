import React, { useEffect, useState } from "react";
import { Typography, Space, Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import { PDFViewer, usePDF } from "@react-pdf/renderer";
import PdfTemplate from "../PdfTemplate/PdfTemplate";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { IPropsWithBill } from "../../interfaces/pdfTemplateProps";

const Bill: React.FC<IPropsWithBill> = ({ bill }) => {
	const [height, setHeight] = useState<number>(720);
	const [showPreview, setShowPreview] = useState<boolean>(true);

	// const height = 720;

	const fileName = "Bill.pdf";
	const pdfDoc = <PdfTemplate billData={bill} />;

	const [pdfFile, updatePdfFile] = usePDF({
		document: pdfDoc,
	});

	const { url, loading, error } = pdfFile;

	const showPreviewOptions = [
		{ label: "Show", value: true },
		{ label: "Hide", value: false },
	];

	const onChangeShowPreview = ({ target: { value } }: RadioChangeEvent) => {
		setShowPreview(value);
	};

	const sizeOptions = [
		{ label: "Standart", value: 720 },
		{ label: "Large", value: 1000 },
	];

	const onChangeSize = ({ target: { value } }: RadioChangeEvent) => {
		setHeight(value);
	};

	useEffect(() => {
		updatePdfFile();
		console.log("update");
	}, [height]);

	return (
		<>
			{error && <Error errText={error} />}

			{loading && <Loader />}

			<Space
				align="center"
				direction="vertical"
				size="large"
				style={{ width: "100%", marginTop: "30px" }}
			>
				<Radio.Group
					options={sizeOptions}
					onChange={onChangeSize}
					value={height}
					optionType="button"
					buttonStyle="solid"
				/>

				<Radio.Group
					options={showPreviewOptions}
					onChange={onChangeShowPreview}
					value={showPreview}
					optionType="button"
					buttonStyle="solid"
				/>

				{url && (
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={url}
						download={fileName}
					>
						Download bill
					</a>
				)}

				{url && showPreview && (
					<>
						<Typography.Title level={4}>
							Bill preview:
						</Typography.Title>

						<PDFViewer
							width={height / Math.sqrt(2)}
							height={height}
							showToolbar={false}
						>
							{pdfDoc}
						</PDFViewer>
					</>
				)}
			</Space>
		</>
	);
};

export default Bill;
