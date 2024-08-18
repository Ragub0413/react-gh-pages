import React, { useEffect } from "react";
import Sidebar from "../components/Admin/AdminPanel/Sidebar";
import NavBar from "../components/Admin/AdminPanel/NavBar";
import Dashboard from "../components/Admin/AdminPanel/Dashboard";

const AdminPanelpage = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <>
      <Sidebar />
      <div className='md:ml-64'>
      <NavBar />
      <Dashboard />
      </div>
    </>
  );
};

export default AdminPanelpage;
