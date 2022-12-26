import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { IPropsWithItems } from "../../interfaces/pdfTemplateProps";
import { billTableRowStyles as styles } from "./styles";

const BillTableRow: React.FC<IPropsWithItems> = ({ items }) => {
	return (
		<>
			{items.map((item) => (
				<View style={styles.row} key={item.id}>
					<Text style={styles.name}>{item.name}</Text>
					<Text style={styles.qty}>{item.qty}</Text>
					<Text style={styles.price}>
						{Number(item.price).toFixed(2)}
					</Text>
					<Text style={styles.amount}>
						{(item.qty * item.price).toFixed(2)}
					</Text>
				</View>
			))}
		</>
	);
};

export default BillTableRow;
