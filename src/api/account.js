import axios from "axios";
// ("teach.captcha@gmail.com");
// ("teach.captcha");
const host = "http://14.225.7.221:7979";
const API = {
  async API_login(email, password) {
    const datas_login = await axios({
      method: "POST",
      url: `${host}/login`,
      data: {
        email,
        password,
      },
      headers: { "Content-Type": "multipart/form-data" },
    });
    return datas_login;
  },
  async APT_register(email, password) {
    const datas_register = await axios({
      method: "POST",
      url: `${host}/register`,
      data: {
        email,
        password,
      },
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(datas_register);
    return datas_register;
  },
  async APT_logout() {
    const datas_logout = await axios({
      method: "post",
      url: `${host}/logout`,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return datas_logout;
  },
};
export default API;
