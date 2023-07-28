import { commonrequest } from "./ApiCalls";
import { BASE_URL } from "./helper";

export const registerfunc = async (data, header) => {
  return await commonrequest("POST", `${BASE_URL}/user/register`, data, header);
};

export const userGetFunc = async () => {
  return await commonrequest("GET", `${BASE_URL}/user/details`, "");
};

export const singleUsergetfunc = async (id) => {
  return await commonrequest("GET", `${BASE_URL}/user/${id}`, "");
};

export const editfunc = async (id, data, header) => {
  return await commonrequest(
    "PUT",
    `${BASE_URL}/user/edit/${id}`,
    data,
    header
  );
};

export const deletefunc = async (id) => {
  return await commonrequest("DELETE", `${BASE_URL}/user/delete/${id}`, {});
};
