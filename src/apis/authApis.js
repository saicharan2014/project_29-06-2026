import APIKit from "../Allapis/Apikit/apikit";

export const loginServer = async (body) => {
  try {
    const url = `/users/login`;
    const result = await APIKit.post(url, body);

    return result;
  } catch (e) {
    return e.response ? e.response : e;
  }
};

// export const signUpServer = async (body) => {
//   try {
//     const url = `/users/signUp`;
//     const result = await APIKit.post(url, body);

//     return result;
//   } catch (e) {
//     return e.response ? e.response : e;
//   }
// };
export const forgotPasswordServer = async (body) => {
  try {
    const url = `/users/forgot-password`;

    const result = await APIKit.post(url, body);

    return result;
  } catch (e) {
    return e.response ? e.response : e;
  }
};

export const createPasswordServer = async (token, body) => {
  try {
    const url = `/users/create-password?token=${token}`;
    const result = await APIKit.post(url, body);
    return result;
  } catch (e) {
    return e.response ? e.response : e;
  }
};

export const resetPasswordServer = async (token, body) => {
  try {
    const url = `/users/reset-password?token=${token}`;

    const result = await APIKit.post(url, body);

    return result;
  } catch (e) {
    return e.response ? e.response : e;
  }
};

export const updatePasswordServer = async (body) => {
  try {
    const url = `/users/update-password`;
    const result = await APIKit.patch(url, body);
    return result;
  } catch (e) {
    return e.response ? e.response : e;
  }
};
