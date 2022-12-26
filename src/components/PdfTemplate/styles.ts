import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
	page: {
		backgroundColor: "white",
		fontFamily: "Courier",
		fontSize: 12,
		paddingTop: 30,
		paddingLeft: 50,
		paddingRight: 50,
		// lineHeight: 1.5,
		flexDirection: "column",
	},
	logo: {
		width: 100,
		height: 100,
		marginLeft: "auto",
		marginRight: "auto",
	},
});

export default styles;
