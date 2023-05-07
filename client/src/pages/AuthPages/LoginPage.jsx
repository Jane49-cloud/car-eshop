import React from "react";
import LoginForm from "../../components/Auth/Login";
import logo from "../../assets/formsAside.png";

const LoginPage = () => {
  return (
    <div className="container shadow-lg mt-4 p-5">
      <div className="row mx-auto h-100 m-0">
        <div className="col-md-5 d-flex align-items-center">
          <img src={logo} alt="image description" className="img-fluid h-100" />
        </div>
        <div className="col-md-5 d-flex align-items-center ">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
