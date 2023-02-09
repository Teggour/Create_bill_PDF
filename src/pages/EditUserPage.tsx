import { FC, useEffect, useState } from "react";
import dayjs from "dayjs";
import { Button, DatePicker, Form, Input, Select, Typography } from "antd";
import { useAuth0, User } from "@auth0/auth0-react";
import { formItemLayout } from "../constants/formStyle";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import useDebounce from "../hooks/useDebounce";
import axiosInstance from "../axios";

// make without state of user and onChangeValues
const EditUserPage: FC = () => {
	const { user, getAccessTokenSilently } = useAuth0();
	const [form] = Form.useForm();

	const [formChangedValue, setFormChangedValue] = useState<User>({});
	const [userInfo, setuserInfo] = useState<User>({
		picture: "",
		name: "",
		nickname: "",
		gender: "",
		birthdate: "",
		address: "",
		email: "",
		phone_number: "",
		website: "",
		...user,
	});

	const debouncedValue = useDebounce(formChangedValue);

	const handleChange = (changedValues: User) => {
		if (changedValues.birthdate) {
			changedValues.birthdate = dayjs(changedValues.birthdate).format(
				"DD-MM-YYYY"
			);
		}

		setFormChangedValue(changedValues);
	};

	const handleFinish = () => {
		console.log("handleFinish"); // add API request

		updateUser(userInfo);
	};

	const updateUser = async (userData: User) => {
		try {
			const formValid = await form.validateFields();

			console.log("formValid = ", formValid);

			const accessToken = await getAccessTokenSilently({
				audience: process.env.REACT_APP_AUTH0_API_URL,
				scope: "read:current_user",
			});

			console.log("accessToken = ", accessToken);

			const metadataResponse = await axiosInstance.patch(
				`/users/${user?.sub}`,
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
					body: userData,
				}
			);

			console.log("metadataResponse = ", metadataResponse);
		} catch (e) {
			console.log((e as Error).message);
		}
	};

	useEffect(() => {
		if (Object.keys(debouncedValue)) {
			setuserInfo((prev) => ({ ...prev, ...debouncedValue }));
		}
	}, [debouncedValue]);

	return (
		<PageTemplate>
			<Typography.Title>Edit profile</Typography.Title>

			<Form
				style={{ margin: "40px 0" }}
				form={form}
				onValuesChange={handleChange}
				onFinish={handleFinish}
			>
				<Form.Item
					{...formItemLayout}
					name="picture"
					label="Avatar"
					initialValue={userInfo.picture}
					rules={[
						{
							required: true,
							message: "Please input avatar url",
						},
						{
							type: "url",
							message: "Please input a valid url",
						},
					]}
				>
					<Input allowClear placeholder={"Avatar URL"} />
				</Form.Item>

				<Form.Item
					{...formItemLayout}
					name="name"
					label="Name"
					initialValue={userInfo.name}
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
							max: 40,
							message: "The maximum length is 40 characters",
						},
					]}
				>
					<Input allowClear placeholder={"Name"} />
				</Form.Item>

				<Form.Item
					{...formItemLayout}
					name="nickname"
					label="Nickname"
					initialValue={userInfo.nickname}
					rules={[
						{
							required: true,
							message: "Please input nickname",
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
					<Input allowClear placeholder={"Nickname"} />
				</Form.Item>

				<Form.Item
					{...formItemLayout}
					name="email"
					label="Email"
					initialValue={userInfo.email}
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
					<Input allowClear placeholder="Email" />
				</Form.Item>

				<Form.Item
					{...formItemLayout}
					name="gender"
					label="Gender"
					initialValue={userInfo.gender}
					rules={[
						{
							required: true,
							message: "Please select a gender",
						},
					]}
				>
					<Select
						placeholder="Selcet a gender"
						options={[
							{ value: "male", label: "Male" },
							{ value: "female", label: "Female" },
						]}
					/>
				</Form.Item>

				<Form.Item
					{...formItemLayout}
					name="phone_number"
					label="Phone"
					initialValue={userInfo.phone_number}
					rules={[
						{
							required: true,
							message: "Please input phone number",
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
					<Input allowClear placeholder="Phone" />
				</Form.Item>

				<Form.Item
					{...formItemLayout}
					name="birthdate"
					label="Birthdate"
					// initialValue={dayjs(
					// 	userInfo.trans_date
					// )}
					// rules={[{ required: true, message: "Please select date" }]}
				>
					<DatePicker
						placeholder="Birthdate"
						format="DD-MM-YYYY"
						allowClear
					/>
				</Form.Item>

				<Form.Item
					{...formItemLayout}
					name="address"
					label="Address"
					initialValue={userInfo.address}
					rules={[
						// {
						// 	required: true,
						// 	message: "Please input address",
						// },
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
					<Input allowClear placeholder="Address" />
				</Form.Item>

				<Form.Item
					{...formItemLayout}
					name="website"
					label="Website"
					initialValue={userInfo.website}
					rules={[
						// {
						// 	required: true,
						// 	message: "Please input website url",
						// },
						{
							type: "url",
							message: "Please input a valid url",
						},
					]}
				>
					<Input allowClear placeholder="Website URL" />
				</Form.Item>

				<Form.Item wrapperCol={{ span: 4, offset: 4 }}>
					<Button type="primary" htmlType="submit">
						Save
					</Button>
				</Form.Item>
			</Form>
		</PageTemplate>
	);
};

export default EditUserPage;
