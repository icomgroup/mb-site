import SignupForm from "@/features/Auth/signup/SignupForm";
import SwitchFormLink from "@/features/Auth/SwitchFormLink";

const Signup = () => {
  return (
    <>
      <SignupForm />
      <SwitchFormLink isLogin={false} />
    </>
  );
};

export default Signup;
