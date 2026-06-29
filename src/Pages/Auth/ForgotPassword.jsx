import { useFormik } from "formik";
import AuthFormUI from "../../Components/AuthComponents/AuthFormUI";

const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      console.log(values, "sss");
    },
  });
  return (
    <AuthFormUI
      title="Forgot Password"
      inputs={[{ id: "email", name: "email", type: "email", label: "Email" }]}
      buttontext="Send Reset Link"
      bottonlink={{ to: "/", text: "Back to Login" }}
      //   loading={false}
      formik={formik}
    />
  );
};

export default ForgotPassword;
