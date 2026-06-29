import APIKit from "../../Allapis/Apikit/apikit";

export const getAuditlogs = async (params) => {

  try {
    const res = await APIKit.get("/audit-logs/get-audit-logs", {
      params: Object.keys(params).length ? params : undefined,
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
