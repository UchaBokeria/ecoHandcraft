import crypto from "crypto";
const mail = async (e) => {
  return true;
};
class generator {
  static token = () => {
    return crypto.randomBytes(64).toString("hex") + Math.floor(+/* @__PURE__ */ new Date() / 1e3);
  };
  static datetime = (hour = 0) => {
    const now = /* @__PURE__ */ new Date();
    now.setHours(now.getHours() + hour);
    const isoDateTime = now.toISOString();
    return isoDateTime;
  };
}
export {
  generator as g,
  mail as m
};
