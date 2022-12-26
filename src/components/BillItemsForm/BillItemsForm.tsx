import { FC } from "react";
import { Button, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import { IFormStepProps, IItem } from "../../interfaces/data";
import FormButtons from "../FormButtons/FormButtons";
import useFormCustom from "../../hooks/useFormCustom";
import { emptyItem } from "../../constants/mockData";
import BillItemForm from "../BillItemForm/BillItemForm";

const BillItemsForm: FC<IFormStepProps<IItem[]>> = ({
	handleChangeData,
	next,
	prev,
	state,
}) => {
	const newState = state.length ? state : [{ ...emptyItem, id: uuidv4() }];

	const {
		form,
		formData: itemsData,
		setFormData: setItemsData,
		handleNextClick,
		handlePrevClick,
	} = useFormCustom({ initialState: newState, handleChangeData, next, prev });

	return (
		<Form
			style={{ margin: "60px 0" }}
			form={form}
			onValuesChange={(_, allValues) => {
				const { items: changedItems } = allValues;
				setItemsData(changedItems);
			}}
		>
			<Form.List name="items" initialValue={itemsData}>
				{(fields, { add, remove }) => (
					<>
						{fields.map(({ key, name, ...fieldData }) => (
							<BillItemForm
								key={key}
								name={name}
								remove={remove}
								fieldData={fieldData}
								isSingleItem={fields.length === 1}
							/>
						))}

						<Form.Item wrapperCol={{ span: 8, offset: 4 }}>
							<Button
								onClick={() =>
									add({ ...emptyItem, id: uuidv4() })
								}
								block
								type="primary"
								icon={<PlusOutlined />}
							>
								Add field
							</Button>
						</Form.Item>
					</>
				)}
			</Form.List>

			<FormButtons
				handleNextClick={handleNextClick}
				handlePrevClick={handlePrevClick}
			/>
		</Form>
	);
};

export default BillItemsForm;
