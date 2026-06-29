import { useFormik } from "formik";
import AuthFormUI from "../../Components/AuthComponents/AuthFormUI";

const ResetPassword = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmpassword: "",
    },
    onSubmit: (values) => {
      console.log(values, "sss");
    },
  });
  return (
    <AuthFormUI
      title="Reset Password"
      inputs={[
        {
          id: "password",
          name: "password",
          type: "password",
          label: "Password",
        },
        {
          id: "confirmPassword",
          name: "confirmPassword",
          type: "password",
          label: "Confirm Password",
        },
      ]}
      buttontext="Reset Password"
      bottonlink={{ to: "/", text: "Back to Login" }}
      formik={formik}

      //   loading={false}
    />
  );
};

export default ResetPassword;
