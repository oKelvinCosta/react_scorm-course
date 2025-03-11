import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import "./ImageMapPopover.css";

/**
 * Componente que renderiza uma imagem com pontos de popup.
 *
 * @prop {string} imgSrc - URL da imagem.
 * @prop {string} imgClassName - Classes CSS para a imagem.
 * @prop {Object[]} popovers - Array com informa es sobre os popups.
 * @prop {string} popovers[].content - Conte do do popup.
 * @prop {string} popovers[].position - Posi o do popup na imagem.
 *
 * @returns Componente com a imagem e seus popups.
 */
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
              className={`w-[24px] h-[24px] rounded-full bg-blue-200 border-2 border-slate-100 opacity-85 absolute hover:bg-blue-300 hover:scale-110 transition-all animate-pulseShadow ${item.position}`}
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
