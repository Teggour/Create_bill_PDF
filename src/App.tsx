import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateBillPage from "./pages/CreateBillPage";
import PDFViewerPage from "./pages/PDFViewerPage";
import Page404 from "./pages/Page404";
import "antd/dist/reset.css";

const App: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />

				<Route path="/home">
					<Redirect to="/" />
				</Route>

				<Route path="/homepage">
					<Redirect to="/" />
				</Route>

				<Route exact path="/create-bill" component={CreateBillPage} />

				<Route exact path="/pdf-viewer" component={PDFViewerPage} />

				{/* <Route exact path="/to-pdf" component={ToPdf} /> */}

				<Route path="*" component={Page404} />
			</Switch>
		</Router>
	);
};

export default App;
