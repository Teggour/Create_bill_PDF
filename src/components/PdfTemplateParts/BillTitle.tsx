import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { billTitleStyles as styles } from "./styles";

interface IProps {
	title: string;
}

const BillTitle: React.FC<IProps> = ({ title }) => {
	return (
		<View style={styles.titleContainer}>
			<Text style={styles.reportTitle}>{title}</Text>
		</View>
	);
};

export default BillTitle;
