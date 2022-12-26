import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { IPropsWithItems } from "../../interfaces/pdfTemplateProps";
import { billTableFooterStyles as styles } from "./styles";

const BillTableFooter: React.FC<IPropsWithItems> = ({ items }) => {
	const total: number = items
		.map((item) => item.qty * item.price)
		.reduce((acc, currValue) => acc + currValue, 0);

	return (
		<View style={styles.row}>
			<Text style={styles.totalTitle}>TOTAL</Text>
			<Text style={styles.totalValue}>{total.toFixed(2)}</Text>
		</View>
	);
};

export default BillTableFooter;
