import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { IPropsWithBill } from "../../interfaces/pdfTemplateProps";
import { billNoStyles as styles } from "./styles";

const BillNo: React.FC<IPropsWithBill> = ({ bill }) => (
	<>
		<View style={styles.billNoContainer}>
			<Text style={styles.label}>Bill No:</Text>
			<Text style={styles.value}>{bill.bill_no}</Text>
		</View>
		<View style={styles.billDateContainer}>
			<Text style={styles.label}>Date: </Text>
			<Text style={styles.value}>{bill.trans_date}</Text>
		</View>
	</>
);

export default BillNo;
