import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { IPropsWithBill } from "../../interfaces/pdfTemplateProps";
import { billToStyles as styles } from "./styles";

const BillCompanyInfo: React.FC<IPropsWithBill> = ({ bill }) => (
	<View style={styles.headerContainer}>
		<Text style={styles.title}>{bill.companyName}</Text>
		<Text>{bill.companyEmail}</Text>
		<Text>{bill.companyPhone}</Text>
		<Text>{bill.companyAddress}</Text>
	</View>
);

export default BillCompanyInfo;
