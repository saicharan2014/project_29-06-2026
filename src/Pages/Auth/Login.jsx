import { useFormik } from "formik";
import AuthFormUI from "../../Components/AuthComponents/AuthFormUI";
import { useEffect, useState } from "react";
import { loginServer } from "../../apis/authApis";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSucess } from "../../app/Slices/authSlice";

const Login = () => {
  const [rememberme, setRememberme] = useState(false);
  const dispatch = useDispatch();
  const storedUser = JSON.parse(localStorage.getItem("userEmail") || "{}");
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: storedUser.email || "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const result = await loginServer(values);
        if (result.status === 201) {
          const { role, email, name, contact } = result.data.user;
          const token = result.data.token;
   
          const roleName = role.roleName;

          if (rememberme) {
            localStorage.setItem(
              "userEmail",
              JSON.stringify({
                email: email,
              }),
            );
          }
          dispatch(
            loginSucess({
              role: roleName,
              token,
              user: { email, name, contact },
            }),
          );
          setTimeout(() => {
            navigate("/dashboard");
          }, 3000);
        } else {
          console.log(result.data.message);
        }
      } catch (e) {
        console.log(e, "login error");
      }
    },
  });

  return (
    <AuthFormUI
      title="Welcome"
      inputs={[
        { id: "email", name: "email", type: "email", label: "Email" },
        {
          id: "password",
          name: "password",
          type: "password",
          label: "Password",
        },
      ]}
      buttontext="Login"
      footerlink={{ to: "/forgot-password", text: "Forgot Password?" }}
      //   loading={false}
      formik={formik}
      loadingtext="Logging in..."
      setRememberme={setRememberme}
    />
  );
};

export default Login;
