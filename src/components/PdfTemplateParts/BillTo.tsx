import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { IPropsWithBill } from "../../interfaces/pdfTemplateProps";
import { billToStyles as styles } from "./styles";

const BillTo: React.FC<IPropsWithBill> = ({ bill }) => (
	<View style={styles.headerContainer}>
		<Text style={styles.title}>Bill To:</Text>
		<Text>{bill.fullname}</Text>
		<Text>{bill.email}</Text>
		<Text>{bill.phone}</Text>
		<Text>{bill.address}</Text>
	</View>
);

export default BillTo;
