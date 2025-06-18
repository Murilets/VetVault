import React from "react";
import "../../index.css";
import Logo from "../../assets/logo.png";
import Input from "../../components/form-elements/Input";

const Login = () => {
  return (
    <div className=" min-h-screen relative">
      {/*ASSim se usa um png de logo */}
      <div className="text-center pt-8 md:absolute md: -top-6 md: -left-4 md:text-left">
        <img
          src={Logo}
          alt="VetVault Logo"
          className="w-32 h-36 sm:w-36 sm:h-24 md:w-40 md:h-28 lg:w-44 lg:h-32 object-contain inline-block "
        />
      </div>
      <div className="flex flex-col items-center justify-start min-h-screen px-4 md:pt-0 ">
        
        <h1 className="text-black-600 text-center text-3xl font-bold mt-24">
          {" "}
          Bem vindo de volta ao VetVault!
        </h1>
        <hr className="my-4 border-black w-32 sm:w-40 md:w-48 mx-auto" />
        <p className="text-black text-center">
          {" "}
          Seu App de Laudos e Raio-X Veterinários
        </p>
        
        <div className="w-full max-w-md mt-8">
          <Input 
          element="input"
          id="email"
          type="email"
          placeholder="ex: Alex@gmail.com"
          label="Email"
          required
          />
          <Input 
          element="input"
          id="password"
          type="password"
          placeholder="ex: Alex5567"
          label="Senha"
          required
          />


        </div>
      </div>
    </div>
  );
};

export default Login;
