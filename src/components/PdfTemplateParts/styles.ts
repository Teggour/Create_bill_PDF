import { StyleSheet } from "@react-pdf/renderer";
import { blue, white, tableColumnsWidth } from "../../constants/pdfStyle";

export const billNoStyles = StyleSheet.create({
	billNoContainer: {
		flexDirection: "row",
		marginTop: 36,
		justifyContent: "space-between",
		width: 170,
		marginRight: 0,
		marginLeft: "auto",
	},
	billDateContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: 170,
		marginRight: 0,
		marginLeft: "auto",
	},
	label: {
		width: 60,
		textDecoration: "underline",
	},
	value: {
		fontSize: 12,
		fontFamily: "Courier-Bold",
	},
});

export const billToStyles = StyleSheet.create({
	headerContainer: {
		marginTop: 36,
		justifyContent: "flex-start",
		width: "50%",
	},
	title: {
		marginTop: 20,
		paddingBottom: 3,
		fontFamily: "Courier-Bold",
		textDecoration: "underline",
	},
});

export const billTableStyles = StyleSheet.create({
	tableContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		marginTop: 24,
		borderWidth: 1,
		borderColor: blue,
	},
});

export const billTableFooterStyles = StyleSheet.create({
	row: {
		flexDirection: "row",
		alignItems: "center",
		height: 24,
		fontSize: 12,
		fontFamily: "Courier-Bold",
	},
	totalTitle: {
		width: tableColumnsWidth.totalTitle,
		textAlign: "right",
		borderRightColor: blue,
		borderRightWidth: 1,
		paddingLeft: 8,
		paddingRight: 8,
	},
	totalValue: {
		width: tableColumnsWidth.amount,
		textAlign: "right",
		paddingLeft: 8,
		paddingRight: 8,
	},
});

export const billTableHeaderStyles = StyleSheet.create({
	container: {
		flexDirection: "row",
		borderBottomColor: blue,
		backgroundColor: blue,
		color: "white",
		borderBottomWidth: 1,
		alignItems: "center",
		height: 24,
		textAlign: "center",
		fontFamily: "Courier-Bold",
		flexGrow: 1,
	},
	description: {
		width: tableColumnsWidth.description,
		borderRightColor: white,
		borderRightWidth: 1,
	},
	qty: {
		width: tableColumnsWidth.qty,
		borderRightColor: white,
		borderRightWidth: 1,
	},
	price: {
		width: tableColumnsWidth.price,
		borderRightColor: white,
		borderRightWidth: 1,
	},
	amount: {
		width: tableColumnsWidth.amount,
	},
});

export const billTableRowStyles = StyleSheet.create({
	row: {
		flexDirection: "row",
		borderBottomColor: blue,
		borderBottomWidth: 1,
		alignItems: "center",
		height: 24,
	},
	name: {
		width: tableColumnsWidth.description,
		textAlign: "left",
		borderRightColor: blue,
		borderRightWidth: 1,
		paddingLeft: 8,
		paddingRight: 8,
	},
	qty: {
		width: tableColumnsWidth.qty,
		borderRightColor: blue,
		borderRightWidth: 1,
		textAlign: "right",
		paddingLeft: 8,
		paddingRight: 8,
	},
	price: {
		width: tableColumnsWidth.price,
		borderRightColor: blue,
		borderRightWidth: 1,
		textAlign: "right",
		paddingLeft: 8,
		paddingRight: 8,
	},
	amount: {
		width: tableColumnsWidth.amount,
		textAlign: "right",
		paddingLeft: 8,
		paddingRight: 8,
	},
});

export const billThankYouMsgStyles = StyleSheet.create({
	titleContainer: {
		marginTop: 64,
	},
	reportTitle: {
		fontSize: 12,
		textAlign: "center",
		textTransform: "uppercase",
	},
});

export const billTitleStyles = StyleSheet.create({
	titleContainer: {
		marginTop: 24,
	},
	reportTitle: {
		color: blue,
		letterSpacing: 4,
		fontSize: 25,
		textAlign: "center",
		textTransform: "uppercase",
	},
});
