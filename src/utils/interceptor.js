import router from "@/router";

export default config => {
  if (location.pathname != "/login" && location.pathname != "/signup") {
    try {
      const auth = localStorage.getItem("state");
      const { access_token } = JSON.parse(auth).login.oauth;
      if (!config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${access_token}`;
      }
    } catch {
      router.push({ name: "login" });
    }
  }
  return config;
};
