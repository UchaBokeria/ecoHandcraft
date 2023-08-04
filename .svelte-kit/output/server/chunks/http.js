import { U as User } from "./store.js";
let AuthCreds;
User.subscribe((v) => AuthCreds = { email: v?.email, token: v?.token });
class http {
  static headers = {
    "X-User": `${AuthCreds?.email}`,
    "Content-Type": "application/json",
    Authorization: `Bearer ${AuthCreds?.token}`
  };
  static async get(url, params = {}) {
    url += `?${Object.entries(params).map((e) => {
      return `${e[0]}=${e[1]}`;
    })}`;
    const response = await fetch(url, { method: "GET", headers: this.headers });
    return await this.response(response);
  }
  static async post(url, body = {}) {
    const response = await fetch(url, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(body)
    });
    return await this.response(response);
  }
  static async put(url, body = {}) {
    const response = await fetch(url, {
      method: "PUT",
      headers: this.headers,
      body: JSON.stringify(body)
    });
    return await this.response(response);
  }
  static async delete(url, body = {}) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: this.headers,
      body: JSON.stringify(body)
    });
    return await this.response(response);
  }
  /* Response warper */
  static response = async (response) => {
    return {
      status: response.status,
      result: await response.json()
    };
  };
}
export {
  http as h
};
