import authApis from "@/API/auth/apis";
import { useMutation } from "@tanstack/react-query";

const useRegisterQuery = () => useMutation({ mutationFn: authApis.register });
const useLoginQuery = () => useMutation({ mutationFn: authApis.login });
const useResetPasswordQuery = () =>
  useMutation({ mutationFn: authApis.resetPassword });
const useForgetPasswordQuery = () =>
  useMutation({ mutationFn: authApis.forgetPassword });

const authQueries = {
  useRegisterQuery,
  useLoginQuery,
  useResetPasswordQuery,
  useForgetPasswordQuery,
};

export default authQueries;
