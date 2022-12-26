import { useState } from "react";
import { Form, FormInstance, notification } from "antd";
import { WarningOutlined } from "@ant-design/icons";

interface IProps<T> {
	initialState: T;
	handleChangeData: (value: T) => void;
	next: () => void;
	prev?: () => void;
}

interface IForm<T> {
	form: FormInstance<any>;
	formData: T;
	setFormData: React.Dispatch<React.SetStateAction<T>>;
	handleNextClick: () => void;
	handlePrevClick?: () => void;
}

function useFormCustom<T>({
	initialState,
	handleChangeData,
	next,
	prev,
}: IProps<T>): IForm<T> {
	const [formData, setFormData] = useState<T>(initialState);

	const [form] = Form.useForm();

	const handleNextClick = async () => {
		try {
			await form.validateFields();
			handleChangeData(formData);
			next();
		} catch (errorInfo) {
			console.log("Failed:", errorInfo);
			notification.open({
				message: "Failed",
				description: "Please fill in the form correctly",
				duration: 5,
				icon: <WarningOutlined style={{ color: "red" }} />,
			});
		}
	};

	const handlePrevClick = prev ? () => prev() : undefined;
	return {
		form,
		formData,
		setFormData,
		handleNextClick,
		handlePrevClick,
	};
}

export default useFormCustom;
