import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { billThankYouMsgStyles as styles } from "./styles";

interface IProps {
	fullName: string;
}

const BillThankYouMsg: React.FC<IProps> = ({ fullName }) => (
	<View style={styles.titleContainer}>
		<Text style={styles.reportTitle}>Thank You, Dear {fullName}</Text>
		<Text style={styles.reportTitle}>We hope you like it</Text>
	</View>
);

export default BillThankYouMsg;
