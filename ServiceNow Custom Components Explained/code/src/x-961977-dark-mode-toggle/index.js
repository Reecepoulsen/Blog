import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";

// Declare the initial state of the component
const initialState = {
	darkMode: false,
};

// Define the view
const view = ({ darkMode, properties }, { updateState, dispatch }) => {
	const doSomething = () => {
		dispatch("MY_FIRST_ACTION", { data: "I'm the payload data" });
	};

	return (
		<button
			id="container"
			className={darkMode ? "dark" : "light"}
			on-click={() => {
				doSomething();
				updateState({
					darkMode: !darkMode,
				});
			}}
		>
			{properties.buttonText}
		</button>
	);
};

// Define the properties
const properties = {
	buttonText: {
		default: "Click Me!",
		schema: { type: "string" },
	},
};

// Define action handlers
const actionHandlers = {
	MY_FIRST_ACTION: ({ action: { payload } }) => {
		console.log("MY_FIRST_ACTION payload:", payload.data);
	},
};

// Define event handlers
const eventHandlers = [
	{
		events: ["click"], // Accepts a list of events
		effect({
			action: {
				payload: { event, host },
			},
		}) {
			console.log("Native DOM JS Event:", event); // Native DOM JS Event object
		},
	},
];

// Render the component
createCustomElement("x-961977-dark-mode-toggle", {
	initialState,
	view,
	properties,
	actionHandlers,
	eventHandlers,
	styles,
	renderer: { type: snabbdom },
});
