import { FC } from "react";
import { Button, Form, Input, Space } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import { formItemLayout } from "../../constants/formStyle";

interface IProps {
	name: number;
	remove: (index: number | number[]) => void;
	fieldData: { fieldKey?: number };
	isSingleItem: boolean;
}

const BillItemForm: FC<IProps> = ({
	name,
	remove,
	fieldData,
	isSingleItem,
}) => {
	return (
		<Space
			style={{ display: "flex", marginBottom: 8 }}
			direction="vertical"
			align="baseline"
		>
			<Form.Item
				{...fieldData}
				{...formItemLayout}
				name={[name, "name"]}
				label="Name"
				rules={[
					{
						required: true,
						message: "Please input name",
					},
					{
						min: 2,
						message: "The minimum length is 2 characters",
					},
					{
						max: 15,
						message: "The maximum length is 15 characters",
					},
				]}
			>
				<Input placeholder="Name" allowClear />
			</Form.Item>

			<Form.Item
				{...fieldData}
				labelCol={{ span: 4 }}
				wrapperCol={{ span: 2 }}
				name={[name, "qty"]}
				label="Quantity"
				rules={[
					{
						required: true,
						message: "Please input items quantity",
					},
					{
						min: 1,
						message: "Minimum: 1",
					},
					{
						max: 5,
						message: "Maximum: 5",
					},
				]}
			>
				<Input type="number" />
			</Form.Item>

			<Form.Item
				{...fieldData}
				labelCol={{ span: 4 }}
				wrapperCol={{ span: 4 }}
				name={[name, "price"]}
				label="Price"
				rules={[
					{
						required: true,
						message: "Please input the item price",
					},
					{
						min: 0.1,
						message: "Minimum: 0.1",
					},
					{
						max: 99999,
						message: "Maximum: 99999",
					},
				]}
			>
				<Input type="number" />
			</Form.Item>

			{!isSingleItem && (
				<Form.Item wrapperCol={{ span: 4, offset: 4 }}>
					<Button
						onClick={() => remove(name)}
						icon={<MinusOutlined />}
						block
					>
						Delete item
					</Button>
				</Form.Item>
			)}
		</Space>
	);
};

export default BillItemForm;
