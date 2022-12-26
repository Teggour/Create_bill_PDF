import React from "react";
import { Button, Form } from "antd";
import { formItemLayout } from "../../constants/formStyle";

interface IProps {
	handleNextClick: () => void;
	handlePrevClick?: () => void;
	withoutPrev?: boolean;
}

const FormButtons: React.FC<IProps> = ({
	handleNextClick,
	handlePrevClick,
	withoutPrev,
}) => {
	return (
		<Form.Item {...formItemLayout}>
			{!withoutPrev && (
				<Button style={{ margin: "0 8px" }} onClick={handlePrevClick}>
					Previous
				</Button>
			)}

			<Button type="primary" onClick={handleNextClick}>
				Next
			</Button>
		</Form.Item>
	);
};

export default FormButtons;
