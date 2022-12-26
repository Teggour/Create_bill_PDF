import React from "react";
import { Form, Input } from "antd";

import { ICompanyInfo, IFormStepWithoutPrevProps } from "../../interfaces/data";
import FormButtons from "../FormButtons/FormButtons";
import { formItemLayout } from "../../constants/formStyle";
import useFormCustom from "../../hooks/useFormCustom";

const CompanyDataForm: React.FC<IFormStepWithoutPrevProps<ICompanyInfo>> = ({
	handleChangeData,
	next,
	state,
}) => {
	const {
		form,
		formData: companyData,
		setFormData: setCompanyData,
		handleNextClick,
	} = useFormCustom({ initialState: state, handleChangeData, next });

	return (
		<Form
			style={{ margin: "40px 0" }}
			form={form}
			onValuesChange={(changedValues) =>
				setCompanyData({ ...companyData, ...changedValues })
			}
		>
			<Form.Item
				{...formItemLayout}
				name="companyName"
				label="Company name"
				rules={[
					{
						required: true,
						message: "Please input company name",
					},
					{
						min: 2,
						message: "The minimum length is 2 characters",
					},
					{
						max: 20,
						message: "The maximum length is 20 characters",
					},
				]}
			>
				<Input
					placeholder="Company name"
					value={companyData.companyName}
					allowClear
				/>
			</Form.Item>

			<Form.Item
				{...formItemLayout}
				name="companyEmail"
				label="Company Email"
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
					placeholder="Company Email"
					value={companyData.companyEmail}
					allowClear
				/>
			</Form.Item>

			<Form.Item
				{...formItemLayout}
				name="companyPhone"
				label="Company phone"
				rules={[
					{
						required: true,
						message: "Please input company phone number",
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
					placeholder="Company phone"
					value={companyData.companyPhone}
					allowClear
				/>
			</Form.Item>

			<Form.Item
				{...formItemLayout}
				name="companyAddress"
				label="Company Address"
				rules={[
					{
						required: true,
						message: "Please input company address",
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
					placeholder="Company Address"
					value={companyData.companyAddress}
					allowClear
				/>
			</Form.Item>

			<Form.Item
				{...formItemLayout}
				name="logoUrl"
				label="Company logo URL"
				rules={[
					{
						required: false,
					},
					{
						type: "url",
						message: "Please input a valid URL",
					},
				]}
			>
				<Input
					placeholder="Company logo URL"
					value={companyData.logoUrl}
					allowClear
				/>
			</Form.Item>

			<FormButtons handleNextClick={handleNextClick} withoutPrev />
		</Form>
	);
};

export default CompanyDataForm;
