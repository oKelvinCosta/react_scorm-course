import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import "./ImageMapPopover.css";

export default function ImageMapPopover({
  imgSrc = "./imgs/core/placeholder.png",
  imgClassName,
  popovers,
}) {
  return (
    <>
      <div className="relative image-map-popover">
        <img
          src={imgSrc}
          className={`w-full object-cover object-center ${imgClassName}`}
          alt="Imagem"
          loading="lazy"
        />

        {popovers.map((item, key) => (
          <Popover key={key}>
            <PopoverTrigger
              className={`w-[24px] h-[24px] rounded-full bg-blue-200 border-2 border-slate-100  absolute animate-pulseShadow ${item.position}`}
              data-aos="fade-up"
            ></PopoverTrigger>
            <PopoverContent className="popoverContent">
              {typeof item.content === "function"
                ? item.content()
                : item.content}
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </>
  );
}
