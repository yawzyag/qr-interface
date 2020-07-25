export const isAuth = () => {
  const userAuth = localStorage.getItem("authToken");
  return userAuth ? true : false;
};

export const getToken = () => {
  let auth = localStorage.getItem("authToken");
  if (isAuth()) {
    return auth;
  }
  return null;
};