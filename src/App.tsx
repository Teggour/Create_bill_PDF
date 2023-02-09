import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import HomePage from "./pages/HomePage";
import CreateBillPage from "./pages/CreateBillPage";
import PDFViewerPage from "./pages/PDFViewerPage";
import Page404 from "./pages/Page404";
import UserProfilePage from "./pages/UserProfilePage";
import EditUserPage from "./pages/EditUserPage";

import "antd/dist/reset.css";

const App: React.FC = () => {
	return (
		<Router>
			<Auth0ProviderWithHistory>
				<Switch>
					<Route exact path="/" component={HomePage} />

					<Route path="/home">
						<Redirect to="/" />
					</Route>

					<Route path="/homepage">
						<Redirect to="/" />
					</Route>

					<Route path="/create-bill" component={CreateBillPage} />

					<Route path="/pdf-viewer" component={PDFViewerPage} />

					<PrivateRoute
						exact
						path="/profile"
						component={UserProfilePage}
					/>

					<PrivateRoute
						path="/profile/edit"
						component={EditUserPage}
					/>

					<Route path="*" component={Page404} />
				</Switch>
			</Auth0ProviderWithHistory>
		</Router>
	);
};

export default App;
