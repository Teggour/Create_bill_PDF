import { FC } from "react";
import { useHistory } from "react-router-dom";
import { AppState, Auth0Provider } from "@auth0/auth0-react";

interface IProps {
	children?: React.ReactNode;
}

const Auth0ProviderWithHistory: FC<IProps> = ({ children }) => {
	const domain = String(process.env.REACT_APP_AUTH0_DOMAIN);
	// const audience = String(process.env.REACT_APP_AUTH0_API_URL);
	const clientId = String(process.env.REACT_APP_AUTH0_CLIENT_ID);

	const history = useHistory();

	const onRedirectCallback = (appState?: AppState): void => {
		history.push(appState?.returnTo || window.location.pathname);
	};

	return (
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			redirectUri={window.location.origin}
			// audience={audience}
			onRedirectCallback={onRedirectCallback}
		>
			{children}
		</Auth0Provider>
	);
};

export default Auth0ProviderWithHistory;
