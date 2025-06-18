import React from "react";
import "../../index.css";
import Logo from "../../assets/logo.png";

const Login = () => {
  return (
    <div className=" min-h-screen relative text-center mb-6">
      {/*ASSim se usa um png de logo */}
      <div className="">
      <img src={Logo}
       alt="VetVault Logo"
       className="w-32 h-36 sm:w-36 sm:h-24 md:w-40 md:h-28 lg:w-44 lg:h-32 object-contain inline-block "
       />
       </div>
      <h1 className="text-black-600 text-center text-3xl font-bold mt-8">
        {" "}
        Bem vindo de volta ao VetVault!
      </h1>
      <hr className="my-4 border-black w-32 sm:w-40 md:w-48 mx-auto" />
      <p className="text-black text-center">
        {" "}
        Seu App de Laudos e Raio-X Veterinários
      </p>
    </div>
  );
};

export default Login;
