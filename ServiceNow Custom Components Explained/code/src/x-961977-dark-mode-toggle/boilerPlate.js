import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";

const view = (state, { updateState }) => {
	return <div></div>;
};

createCustomElement("x-961977-color-picker", {
	renderer: { type: snabbdom },
	view,
	styles,
});
