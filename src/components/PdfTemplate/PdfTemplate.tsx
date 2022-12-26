import React from "react";
import { Page, Document, Image } from "@react-pdf/renderer";
import styles from "./styles";
import BillTitle from "../PdfTemplateParts/BillTitle";
import BillNo from "../PdfTemplateParts/BillNo";
import BillTo from "../PdfTemplateParts/BillTo";
import BillCompanyInfo from "../PdfTemplateParts/BillCompanyInfo";
import BillTable from "../PdfTemplateParts/BillTable";
import BillThankYouMsg from "../PdfTemplateParts/BillThankYouMsg";
import { IBillData } from "../../interfaces/data";

interface IProps {
	billData: IBillData;
}

const PdfTemplate: React.FC<IProps> = ({ billData }) => {
	return (
		<Document>
			<Page size="A4" style={styles.page}>
				<Image
					style={styles.logo}
					src={
						billData.logoUrl ||
						`${process.env.PUBLIC_URL}/bill-logo.png`
					}
				/>
				<BillTitle title={"Bill"} />
				<BillNo bill={billData} />
				<BillTo bill={billData} />
				<BillTable bill={billData} />
				<BillCompanyInfo bill={billData} />
				<BillThankYouMsg fullName={billData.fullname} />
			</Page>
		</Document>
	);
};

export default PdfTemplate;
