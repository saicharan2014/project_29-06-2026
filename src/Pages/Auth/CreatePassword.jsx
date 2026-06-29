import { useFormik } from "formik";
import AuthFormUI from "../../Components/AuthComponents/AuthFormUI";

const CreatePassword = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmpassword: "",
      privacyStatement: false,
    },
    onSubmit: (values) => {
      console.log(values, "sss");
    },
  });
  return (
    <AuthFormUI
      title="Create Password"
      inputs={[
        {
          id: "email",
          name: "email",
          type: "email",
          label: "Email",
          disabled: true,
          //   value: email,
        },
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
      buttontext="Create Password"
      bottonlink={{ to: "/", text: "Back to login" }}
      //   loading={}
      formik={formik}
      loadingtext="Creating Password..."
      privacyStatement={true}
    />
  );
};

export default CreatePassword;
