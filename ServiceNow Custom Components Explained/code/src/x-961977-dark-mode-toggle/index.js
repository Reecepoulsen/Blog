import { createCustomElement, actionTypes } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";

const view = ({ darkMode }, { updateState }) => {
	console.log("Component rendered");
	return (
		<div
			id="container"
			className={darkMode ? "dark" : "light"}
			on-click={() => {
				console.log(`Turning Dark mode ${darkMode ? "off" : "on"}`);
				updateState({
					darkMode: !darkMode,
				});
			}}
		>
			<div id="text">{darkMode ? "Dark" : "Light"}</div>
		</div>
	);
};

createCustomElement("x-961977-dark-mode-toggle", {
	initialState: {
		darkMode: false,
	},
	view,
	properties: {},
	actionHandlers: {},
	eventHandlers: [],
	dispatches: {},
	styles,
	renderer: { type: snabbdom },
});
