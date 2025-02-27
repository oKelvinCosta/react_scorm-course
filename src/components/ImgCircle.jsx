import React from "react";

export default function ImgCircle({ className, ...props }) {
  return (
    <>
      <img
        className={`w-full rounded-full aspect-square object-cover object-center ${className}`}
        alt="Imagem"
        loading="lazy"
        {...props}
      />
    </>
  );
}
