import { createCustomElement, actionTypes } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";

const { COMPONENT_CONNECTED, COMPONENT_PROPERTY_CHANGED, COMPONENT_DOM_READY } =
	actionTypes;
const initialState = {};

const view = (state, { updateState }) => {
	return <div>Hello World!</div>;
};

export const properties = {};

const actionHandlers = {};

const dispatches = {};

createCustomElement("x-961977-color-picker", {
	initialState,
	view,
	properties,
	actionHandlers,
	dispatches,
	styles,
	renderer: { type: snabbdom },
});
