/******************************************************
 * Section 1: Import statements
 ******************************************************/
import { createCustomElement, actionTypes } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";

/******************************************************
 * Section 2: Setup
 * - action types
 * - initial state
 ******************************************************/
const { COMPONENT_CONNECTED, COMPONENT_PROPERTY_CHANGED, COMPONENT_DOM_READY } =
	actionTypes;
const initialState = {};

/******************************************************
 * Section 3: Define the component
 ******************************************************/
const view = (state, { updateState }) => {
	return <div>Hello World!</div>;
};

/******************************************************
 * Section 4: Define action handlers
 ******************************************************/
const actionHandlers = {};

/******************************************************
 * Section 5: Define dispatches
 ******************************************************/
const dispatches = {};

/******************************************************
 * Section 6: Export Properties
 ******************************************************/
export const properties = {};

/******************************************************
 * Section 7: Provide component build information
 ******************************************************/
createCustomElement("x-961977-color-picker", {
	renderer: { type: snabbdom },
	view,
	styles,
	initialState,
	actionHandlers,
	dispatches,
	properties,
});
