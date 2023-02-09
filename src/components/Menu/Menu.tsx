import { FC } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Menu } from "antd";
import {
	HomeOutlined,
	FilePdfOutlined,
	SolutionOutlined,
	UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Loader from "../Loader/Loader";

type TMenuItem = Required<MenuProps>["items"][number];
type TMenuItems = Required<MenuProps>["items"];

// All keys must match the link on the label
const mainMenuItems: TMenuItems = [
	{
		key: "/",
		label: <Link to={"/"}>Home</Link>,
		icon: <HomeOutlined />,
	},
	{
		key: "/pdf-viewer",
		label: <Link to={"/pdf-viewer"}>PDF Viewer</Link>,
		icon: <FilePdfOutlined />,
	},
	{
		key: "/create-bill",
		label: <Link to={"/create-bill"}>Create bill</Link>,
		icon: <SolutionOutlined />,
	},
];

const getLoginMenuItem = (handleLogin: any): TMenuItem => {
	const loginMenuItem: TMenuItem = {
		key: "/login",
		label: <span onClick={() => handleLogin()}>Login</span>,
		icon: <UserOutlined />,
		style: { marginLeft: "auto" },
	};

	return loginMenuItem;
};

const getLoaderMenuItem = (): TMenuItem => {
	const loaderMenuItem: TMenuItem = {
		key: "/loader",
		label: <Loader />,
		style: { marginLeft: "auto" },
	};

	return loaderMenuItem;
};

const getUserMenuItem = (handleLogout: any, username?: string): TMenuItem => {
	const userMenuItem: TMenuItem = {
		key: "/user-info",
		label: username || "User",
		icon: <UserOutlined />,
		style: { marginLeft: "auto" },
		children: [
			{
				key: "/profile",
				label: <Link to={"/profile"}>Profile</Link>,
			},
			{
				key: "/logout",
				label: (
					<span
						onClick={() =>
							handleLogout({
								returnTo: window.location.href,
							})
						}
					>
						Logout
					</span>
				),
			},
		],
	};

	return userMenuItem;
};

const MyMenu: FC<RouteComponentProps> = ({ location }) => {
	const { user, isAuthenticated, isLoading, loginWithPopup, logout } =
		useAuth0();

	const additionalMenuItem: TMenuItem = isLoading
		? getLoaderMenuItem()
		: isAuthenticated
		? getUserMenuItem(logout, user?.name)
		: getLoginMenuItem(loginWithPopup);

	const menuItems: TMenuItems = [...mainMenuItems, additionalMenuItem];

	const activeMenuItemKey: string = String(
		menuItems.find((item) => item && item.key === location.pathname)?.key
	);

	return (
		<Menu
			mode="horizontal"
			theme={"dark"}
			inlineIndent={36}
			defaultSelectedKeys={[activeMenuItemKey]}
			items={menuItems}
		/>
	);
};

export default withRouter(MyMenu);
