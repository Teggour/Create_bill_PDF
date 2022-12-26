import React from "react";
import { Form, Input } from "antd";

import { ICustomerInfo, IFormStepProps } from "../../interfaces/data";
import { formItemLayout } from "../../constants/formStyle";
import FormButtons from "../FormButtons/FormButtons";
import useFormCustom from "../../hooks/useFormCustom";

const CustomerDataForm: React.FC<IFormStepProps<ICustomerInfo>> = ({
	handleChangeData,
	next,
	prev,
	state,
}) => {
	const {
		form,
		formData: customerData,
		setFormData: setCustomerData,
		handleNextClick,
		handlePrevClick,
	} = useFormCustom({ initialState: state, handleChangeData, next, prev });

	return (
		<Form
			style={{ margin: "40px 0" }}
			form={form}
			onValuesChange={(changedValues) =>
				setCustomerData({ ...customerData, ...changedValues })
			}
		>
			<Form.Item
				{...formItemLayout}
				name="fullname"
				label="Full name"
				rules={[
					{
						required: true,
						message: "Please input full name",
					},
					{
						min: 5,
						message: "The minimum length is 5 characters",
					},
					{
						max: 30,
						message: "The maximum length is 30 characters",
					},
				]}
			>
				<Input
					placeholder="Full name"
					value={customerData.fullname}
					allowClear
				/>
			</Form.Item>

			<Form.Item
				{...formItemLayout}
				name="email"
				label="Email"
				rules={[
					{
						required: true,
						message: "Please input Email",
					},
					{
						type: "email",
						message: "Please input a valid Email",
					},
				]}
			>
				<Input
					placeholder="Email"
					value={customerData.email}
					allowClear
				/>
			</Form.Item>

			<Form.Item
				{...formItemLayout}
				name="phone"
				label="Phone"
				rules={[
					{
						required: true,
						message: "Please input customer phone number",
					},
					{
						min: 10,
						message: "The minimum length is 10 characters",
					},
					{
						max: 25,
						message: "The maximum length is 25 characters",
					},
				]}
			>
				<Input
					placeholder="Phone"
					value={customerData.phone}
					allowClear
				/>
			</Form.Item>

			<Form.Item
				{...formItemLayout}
				name="address"
				label="Address"
				rules={[
					{
						required: true,
						message: "Please input customer address",
					},
					{
						min: 10,
						message: "The minimum length is 10 characters",
					},
					{
						max: 70,
						message: "The maximum length is 70 characters",
					},
				]}
			>
				<Input
					placeholder="Address"
					value={customerData.address}
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

export default CustomerDataForm;
