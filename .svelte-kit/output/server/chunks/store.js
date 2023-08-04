import { B as BROWSER, w as writable } from "./index2.js";
const browser = BROWSER;
const User = writable(null);
User.subscribe(
  (value) => browser
);
export {
  User as U
};
