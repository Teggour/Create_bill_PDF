import { FC } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { Descriptions, Divider, Image, Tooltip, Typography } from "antd";
import { InfoCircleOutlined, EditOutlined } from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import { imgFb } from "../constants/imageFallback";

const UserProfilePage: FC = () => {
	const { user } = useAuth0();

	const withEmptyValue = (value: string | undefined): string => {
		const emptyValue = "empty *";
		return value || emptyValue;
	};

	return (
		<PageTemplate>
			<Typography.Title>Profile</Typography.Title>

			<Descriptions
				title={
					<>
						User Info
						<Link
							to={"/profile/edit"}
							style={{ marginLeft: "8px" }}
						>
							<EditOutlined /> Edit
						</Link>
					</>
				}
				column={1}
			>
				<Descriptions.Item label="Avatar">
					<Image
						src={""}
						width={100}
						alt={"User avatar"}
						fallback={imgFb}
					/>
				</Descriptions.Item>

				<Descriptions.Item label="Name">{user?.name}</Descriptions.Item>

				<Descriptions.Item label="Nickname">
					{withEmptyValue(user?.nickname)}
				</Descriptions.Item>

				<Descriptions.Item label="Gender">
					{withEmptyValue(user?.gender)}
				</Descriptions.Item>

				<Descriptions.Item label="Birthdate">
					{withEmptyValue(user?.birthdate)}
				</Descriptions.Item>

				<Descriptions.Item label="Address">
					{withEmptyValue(user?.address)}
				</Descriptions.Item>

				<Descriptions.Item
					label="Email"
					contentStyle={{ display: "flex", alignItems: "center" }}
				>
					{withEmptyValue(user?.email)}
					{user?.email && !user?.email_verified && (
						<Tooltip
							title="Email is not verified"
							placement="topLeft"
						>
							<InfoCircleOutlined style={{ marginLeft: "4px" }} />
						</Tooltip>
					)}
				</Descriptions.Item>

				<Descriptions.Item
					label="Phone"
					contentStyle={{ display: "flex", alignItems: "center" }}
				>
					{withEmptyValue(user?.phone_number)}
					{user?.phone_number && !user?.phone_number_verified && (
						<Tooltip
							title="Phone is not verified"
							placement="topLeft"
						>
							<InfoCircleOutlined style={{ marginLeft: "4px" }} />
						</Tooltip>
					)}
				</Descriptions.Item>

				<Descriptions.Item label="Website">
					{withEmptyValue(user?.website)}
				</Descriptions.Item>

				<Descriptions.Item label="Last updated">
					{withEmptyValue(
						dayjs(user?.updated_at).format("D MMMM, YYYY, h:mm A")
					)}
				</Descriptions.Item>

				<Descriptions.Item>
					<Divider />
				</Descriptions.Item>

				<Descriptions.Item label={<strong>Notice</strong>}>
					* - that field was not filled
				</Descriptions.Item>
			</Descriptions>
		</PageTemplate>
	);
};

export default UserProfilePage;
