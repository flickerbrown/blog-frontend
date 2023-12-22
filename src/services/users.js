import api from "./apiConfig";

export const signUp = async (credentials) => {
  try {
    const resp = await api.post("/users/register/", credentials);
    const token = resp.data.access;
    localStorage.setItem("token", token);
    return resp.data;
  } catch (error) {
    console.error("Sign-up error:", error);
    throw error;
  }
};

export const signIn = async (credentials) => {
  try {
    const resp = await api.post("/users/login/", credentials);
    localStorage.setItem("token", resp.data.access);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    localStorage.removeItem("token");
    return true;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const res = await api.get("/users/verify/");
    return res.data;
  }
  return false;
};