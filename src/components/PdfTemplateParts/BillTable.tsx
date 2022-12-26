import React from "react";
import { View } from "@react-pdf/renderer";
import BillTableHeader from "./BillTableHeader";
import BillTableRow from "./BillTableRow";
import BillTableFooter from "./BillTableFooter";
import { IPropsWithBill } from "../../interfaces/pdfTemplateProps";
import { billTableStyles as styles } from "./styles";

const BillItemsTable: React.FC<IPropsWithBill> = ({ bill }) => (
	<View style={styles.tableContainer}>
		<BillTableHeader />
		<BillTableRow items={bill.items} />
		<BillTableFooter items={bill.items} />
	</View>
);

export default BillItemsTable;
