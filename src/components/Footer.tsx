import React from "react";
import { Envelope, Facebook, Instagram, Linkedin } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <>
      <footer className="w-full h-48 bg-primary-0 flex flex-col justify-center items-center gap-8 text-white">
        <h1 className="text-2xl font-segoe">Kapiko</h1>
        <div className="flex flex-row gap-10">
          <Facebook className="cursor-pointer text-xl hover:drop-shadow-lg" />
          <Instagram className="cursor-pointer text-xl hover:drop-shadow-lg" />
          <Envelope className="cursor-pointer text-xl hover:drop-shadow-lg" />
          <Linkedin className="cursor-pointer text-xl hover:drop-shadow-lg" />
        </div>
        <p className="text-md">&copy; 2022. All rights reserve Kapiko </p>
      </footer>
    </>
  );
};

export default Footer;
