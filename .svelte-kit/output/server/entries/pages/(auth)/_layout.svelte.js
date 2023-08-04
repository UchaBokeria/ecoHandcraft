import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { H as Header } from "../../../chunks/header.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
