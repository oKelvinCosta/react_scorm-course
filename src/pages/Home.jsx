import React from "react";
import { useState } from "react";

// Estilos
import "./Home.css";

// Componentes
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CarouselCard from "@/components/CarouselCard";
import BoxAttention from "@/components/BoxAttention";

// Assets
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";

// SCORM
import * as SCORM from "../lib/scorm-toolkit-esm/index.js";

export default function Home() {
  const firstCarouselItems = [
    {
      imgSrc: "./imgs/kelvin-costa-boards-temple-1.jpg",

      title: () => {
        return (
          <>
            <h4>My Title</h4>
          </>
        );
      },
      content: () => {
        return (
          <>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
              malandris se pirulitá. A ordem dos tratores não altera o pão
              duris. Suco de cevadiss deixa as pessoas mais interessantis. Viva
              Forevis aptent taciti sociosqu ad litora torquent.
            </p>
            <p>
              Suco de cevadiss deixa as pessoas mais interessantis. Viva Forevis
              aptent taciti sociosqu ad litora torquent.
            </p>
          </>
        );
      },
    },
    {
      imgSrc: "./imgs/09_20_02_2024_Haki-Estande_Kelvin.png",

      title: () => {
        return (
          <>
            <h4>My Title</h4>
          </>
        );
      },
      content: () => {
        return (
          <>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
              malandris se pirulitá. A ordem dos tratores não altera o pão
              duris. Suco de cevadiss deixa as pessoas mais interessantis. Viva
              Forevis aptent taciti sociosqu ad litora torquent.
            </p>
          </>
        );
      },
    },
    {
      imgSrc: "./imgs/Task.jpg",

      title: () => {
        return (
          <>
            <h4>My Title</h4>
          </>
        );
      },
      content: () => {
        return (
          <>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
              malandris se pirulitá. A ordem dos tratores não altera o pão
              duris. Suco de cevadiss deixa as pessoas mais interessantis. Viva
              Forevis aptent taciti sociosqu ad litora torquent.
            </p>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
              malandris se pirulitá. A ordem dos tratores não altera o pão
              duris. Suco de cevadiss deixa as pessoas mais interessantis. Viva
              Forevis aptent taciti sociosqu ad litora torquent.
            </p>
          </>
        );
      },
    },
  ];
  // Adiciona IDs dinâmicos aos itens
  const carouselItemsWithIds = firstCarouselItems.map((item, index) => ({
    ...item,
    id: `first-${index + 1}`,
  }));

  const handleConclude = () => {
    SCORM.SCOApp.finishTopic();
  };

  return (
    <>
      <div id="intro" className="py-[80px]">
        <div className="container text-center">
          <div className="flex justify-center">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div>
            <Button onClick={() => handleConclude()}>Conclude</Button>
          </div>

          <div className="read-the-docs ">
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
              malandris se pirulitá. A ordem dos tratores não altera o pão
              duris. Suco de cevadiss deixa as pessoas mais interessantis. Viva
              Forevis aptent taciti sociosqu ad litora torquent.
            </p>
            <p>
              Praesent malesuada urna nisi, quis volutpat erat hendrerit non.
              Nam vulputate dapibus. Quem num gosta di mé, boa gentis num é.
              Quem num gosta di mim que vai caçá sua turmis! Detraxit consequat
              et quo num tendi nada.
            </p>
          </div>
        </div>
      </div>

      <div id="typography" className="py-[80px]">
        <div className="container  text-left">
          <h2>Typography</h2>

          <h1>Title h1</h1>
          <h2>Title h2</h2>
          <h3>Title h3</h3>
          <h4>Title h4</h4>
          <h5>Title h5</h5>
          <h6>Title h6</h6>
          <p>Paragraph:</p>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
            malandris se pirulitá. A ordem dos tratores não altera o pão duris.
            Suco de cevadiss deixa as pessoas mais interessantis. Viva Forevis
            aptent taciti sociosqu ad litora torquent.
          </p>
          <p>
            Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam
            vulputate dapibus. Quem num gosta di mé, boa gentis num é. Quem num
            gosta di mim que vai caçá sua turmis! Detraxit consequat et quo num
            tendi nada.
          </p>
        </div>
      </div>

      <div id="accordion" className="py-[80px]">
        <div className="container">
          <h2>Accordion</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div id="cards" className="py-[80px]">
        <div className="container  text-left">
          <h2>Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
            <Card>
              <CardHeader>
                <img
                  src="./imgs/Task.jpg"
                  alt="Vite logo"
                  className=" aspect-video object-cover"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>Card Title</CardTitle>
                <p>Card Content</p>
              </CardContent>
            </Card>

            <Card>
              <img
                src="./imgs/Task.jpg"
                alt="Vite logo"
                className="mb-5 aspect-video object-cover"
              />
              <CardContent>
                <CardTitle>Card Title</CardTitle>
                <p>
                  Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
                  malandris se pirulitá. A ordem dos tratores não altera o pão
                  duris. Suco de cevadiss deixa as pessoas mais interessantis
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <img
                  src="./vite.svg"
                  alt="Vite logo"
                  className="rounded-lg mx-auto w-full max-w-[140px] "
                />
              </CardHeader>
              <CardContent>
                <CardTitle>Card Title</CardTitle>
                <p>Card Content</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div id="carousel" className="py-[80px]">
        <div className="container  text-left">
          <h2>Carousel</h2>
          <CarouselCard items={carouselItemsWithIds} />
        </div>
      </div>

      <div id="box-attention" className="py-[80px]">
        <div className="container  text-left">
          <h2>Box Attention</h2>

          <BoxAttention
            boxClass="bg-primary"
            contentClass="text-center text-white"
          >
            <h4>Teste do Kelvin</h4>
            <p>
              Casamentiss faiz malandris se pirulitá. A ordem dos tratores não
              altera o pão duris. Suco de cevadiss deixa as pessoas mais
              interessantis
            </p>
          </BoxAttention>

          <BoxAttention
            boxClass="bg-red-600"
            imgSrc={"./imgs/kelvin-costa-boards-temple-1.jpg"}
            imgClass="max-w-[50%] sm:mr-6 object-cover rounded-md"
          >
            <h4>Teste do Kelvin</h4>
            <p>
              Casamentiss faiz malandris se pirulitá. A ordem dos tratores não
              altera o pão duris. Suco de cevadiss deixa as pessoas mais
              interessantis
            </p>
          </BoxAttention>

          <div className="flex items-start sm:items-center flex-col sm:flex-row  rounded-lg bg-indigo-600 p-6 my-10">
            <img
              src="./imgs/Task.jpg"
              alt=""
              className="w-full max-w-[150px] sm:mr-6  object-cover rounded-md"
            />
            <div className=" text-white">
              <h3>Box Attention</h3>
              <p>
                Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
                malandris se pirulitá. A ordem dos tratores não altera o pão
                duris. Suco de cevadiss deixa as pessoas mais interessantis
              </p>
            </div>
          </div>

          <div className="flex items-start sm:items-center flex-col sm:flex-row  rounded-lg bg-indigo-600 p-6 my-10">
            <img
              src="./imgs/Task.jpg"
              alt=""
              className="w-full max-w-[30%] sm:mr-6  object-cover rounded-md"
            />
            <div className=" text-white">
              <h3>Box Attention</h3>
              <p>
                Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
                malandris se pirulitá. A ordem dos tratores não altera o pão
                duris. Suco de cevadiss deixa as pessoas mais interessantis
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
