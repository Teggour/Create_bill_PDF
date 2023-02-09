import {FC} from "react";
import { Typography } from "antd";

import PageTemplate from "../components/PageTemplate/PageTemplate";

const HomePage: FC = () => {
	return (
		<PageTemplate>
			<Typography.Title>Homepage</Typography.Title>
		</PageTemplate>
	);
};

export default HomePage;
