import React, { useEffect } from "react";
import Login from "../components/Admin/Login";

const AdminLoginpage = () => {
  useEffect(() => {
    document.title = "Admin | Login";
  }, []);

  return (
    <>
      <Login />
    </>
  );
};

export default AdminLoginpage;
