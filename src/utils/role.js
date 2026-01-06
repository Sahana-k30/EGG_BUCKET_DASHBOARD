export const getRoleFlags = () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return {};

    const role = user.role;
    const roles = Array.isArray(user.roles) ? user.roles : [];

    return {
      isAdmin: role === "Admin" || roles.includes("admin"),
      isViewer: role === "Viewer" || roles.includes("viewer"),
      isDataAgent: role === "DataAgent" || roles.includes("dataagent"),
    };
  } catch {
    return {};
  }
};
