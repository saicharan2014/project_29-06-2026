import APIKit from "../../Allapis/Apikit/apikit";

export const getEnergyGraphApi = async (params) => {
  try {
    const res = APIKit.get("properties/get-energy-graphs", {
      params: Object.keys(params).length ? params : undefined,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
