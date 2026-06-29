import APIKit from "../../Allapis/Apikit/apikit";

export const getAlerts = async (params) => {
 
  try {
    const res = await APIKit.get("/alerts/get-alerts", {
      params: Object.keys(params).length ? params : undefined,
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
