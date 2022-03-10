import tippy from "tippy.js";
import "tippy.js/dist/tippy.css"; // Link tippy.css explicitly in index.html
export default function tooltip(
  node,
  params = {
    content: "No Information available!",
    interactive: true
  }
) {
  let tip = tippy(node, params);
  return {
    update: (newParams) => {
      tip.setProps(newParams);
    },
    destroy: () => {
      tip.destroy();
    }
  };
}
