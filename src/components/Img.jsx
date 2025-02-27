import React from "react";

export default function Img({ className, ...props }) {
  return (
    <>
      <img
        {...props}
        className={`w-full object-cover object-center ${className}`}
        alt="Imagem"
        loading="lazy"
      />
    </>
  );
}
