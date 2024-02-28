import React from "react";
import Userlogin from "../components-library/Userlogin";

function PropsDemo() {
  return (
    <div className="container-fluid">
      <h3>Home</h3>
      <Userlogin
        ButtonType="btn btn-light w-100"
        Theme="w-25 bg-primary text-white p-2"
        Title="User Login"
        UserLabel="Your Email"
        UserType="email"
        Verify="Confirmation Code"
        VerifyType="number"
      />
      <hr/>
      <Userlogin
        ButtonType="btn btn-warning w-100"
        Theme="w-25 bg-danger text-white p-2"
        Title="Admin Login"
        UserLabel="Mobile"
        UserType="text"
        Verify="Your OTP"
        VerifyType="number"
      />

    </div>
  );
}

export default PropsDemo;
