export const isAuth = () => {
  const userAuth = localStorage.getItem("authToken");
  return userAuth ? true : false;
};
