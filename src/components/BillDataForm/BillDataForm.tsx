import React from "react";
import dayjs from "dayjs";
import { DatePicker, Form, Input } from "antd";

import { IBillInfo, IFormStepProps } from "../../interfaces/data";
import { formItemLayout } from "../../constants/formStyle";
import FormButtons from "../FormButtons/FormButtons";
import useFormCustom from "../../hooks/useFormCustom";

const BillDataForm: React.FC<IFormStepProps<IBillInfo>> = ({
	handleChangeData,
	next,
	prev,
	state,
}) => {
	const {
		form,
		formData: billData,
		setFormData: setBillData,
		handleNextClick,
		handlePrevClick,
	} = useFormCustom({ initialState: state, handleChangeData, next, prev });

	return (
		<Form style={{ margin: "60px 0" }} form={form}>
			<Form.Item
				{...formItemLayout}
				name="bill_no"
				label="Bill number"
				rules={[
					{
						required: true,
						message: "Please input bill number",
					},
					{
						min: 4,
						message: "The minimum length is 4 characters",
					},
					{
						max: 12,
						message: "The maximum length is 12 characters",
					},
				]}
			>
				<Input
					placeholder="Bill number"
					value={billData.bill_no}
					onChange={(e) =>
						setBillData({ ...billData, bill_no: e.target.value })
					}
					allowClear
				/>
			</Form.Item>

			<Form.Item
				{...formItemLayout}
				name="trans_date"
				label="Transaction date"
				rules={[{ required: true, message: "Please select date" }]}
			>
				<DatePicker
					placeholder="Transaction date"
					format="DD-MM-YYYY"
					value={dayjs(billData.trans_date, "DD-MM-YYYY")}
					onChange={(_, dateString) =>
						setBillData({ ...billData, trans_date: dateString })
					}
					allowClear
				/>
			</Form.Item>

			<FormButtons
				handleNextClick={handleNextClick}
				handlePrevClick={handlePrevClick}
			/>
		</Form>
	);
};

export default BillDataForm;
