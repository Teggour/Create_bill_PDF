import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

interface IProps {
	children?: React.ReactNode;
}

const NewWindow: React.FC<IProps> = ({ children }) => {
	const [container, setContainer] = useState<HTMLDivElement | null>(null);
	const newWindow = useRef<Window | null>(null);

	useEffect(() => {
		setContainer(document.createElement("div"));
	}, []);

	useEffect(() => {
		if (container) {
			newWindow.current = window.open(
				"",
				"",
				"width=600,height=400,left=200,top=200"
			);

			newWindow.current?.document.body.appendChild(container);

			return () => newWindow.current?.close();
		}
	}, [container]);

	return container && ReactDOM.createPortal(children, container);
};

export default NewWindow;
