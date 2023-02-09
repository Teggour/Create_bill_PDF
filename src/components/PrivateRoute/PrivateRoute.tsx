import { FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { notification } from "antd";
import { WarningOutlined } from "@ant-design/icons";

interface IProps extends RouteProps {
	children?: React.ReactNode;
}

const PrivateRoute: FC<IProps> = ({ ...routeProps }) => {
	const { isAuthenticated, isLoading } = useAuth0();

	if (!isLoading) {
		if (isAuthenticated) {
			return <Route {...routeProps} />;
		} else {
			notification.open({
				message: "Failed",
				description:
					"This is a private route! You must be logged in to go here.",
				duration: 5,
				icon: <WarningOutlined style={{ color: "red" }} />,
			});
			return <Redirect to={"/"} />;
		}
	} else return null;
};

export default PrivateRoute;
