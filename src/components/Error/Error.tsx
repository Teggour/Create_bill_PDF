import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Result } from "antd";

interface IProps {
	errText: string;
}

const Error: React.FC<IProps> = ({ errText }) => {
	const history = useHistory();

	return (
		<Result
			status="error"
			title="Something went wrong"
			subTitle={errText}
			extra={[
				<Button type="primary" onClick={() => history.push("/")}>
					Back Home
				</Button>,
				<Button type="primary" onClick={() => history.goBack()}>
					Go back
				</Button>,
				<Button type="primary" onClick={() => history.go(0)}>
					Reload page
				</Button>,
			]}
		/>
	);
};

export default Error;
