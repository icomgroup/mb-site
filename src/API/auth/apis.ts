import {
  ForgetPasswordBody,
  LoginPayload,
  LoginResult,
  ResetPassowrdBody,
  SignupPayload,
} from "@/API/auth/types";
import API_ROUTES from "@/constants/api-routes";
import axios from "@/libs/axios";

const register = async (payload: SignupPayload) => {
  const { data } = await axios.post<LoginResult>(
    API_ROUTES.AUTH.REGISTER,
    payload
  );
  return { token: data.result.token, id: data.result.user.id };
};

const login = async (payload: LoginPayload) => {
  const { data } = await axios.post<LoginResult>(
    API_ROUTES.AUTH.LOGIN,
    payload
  );
  return { token: data.result.token, id: data.result.user.id };
};

const forgetPassword = async (payload: ForgetPasswordBody) => {
  const { data } = await axios.post(API_ROUTES.AUTH.FORGET_PASSWORD, payload);
  return data;
};

const resetPassword = async (payload: ResetPassowrdBody) => {
  const { data } = await axios.post(API_ROUTES.AUTH.RESET_PASSWORD, payload);
  return data;
};

const authApis = {
  register,
  login,
  forgetPassword,
  resetPassword,
};

export default authApis;
