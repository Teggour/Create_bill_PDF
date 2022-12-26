import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { billTableHeaderStyles as styles } from "./styles";

const BillTableHeader = () => (
	<View style={styles.container}>
		<Text style={styles.description}>Item Description</Text>
		<Text style={styles.qty}>Qty</Text>
		<Text style={styles.price}>Price</Text>
		<Text style={styles.amount}>Amount</Text>
	</View>
);

export default BillTableHeader;
