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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Assets
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="py-[80px]">
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
          <div className="card">
            <Button onClick={() => setCount((count) => count + 1)}>
              {" "}
              count is {count}
            </Button>
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

      <div className="py-[80px]">
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

      <div className="py-[80px]">
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

      <div className="py-[80px]">
        <div className="container  text-left">
          <h2>Cards</h2>
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      <div className="py-[80px]">
        <div className="container  text-left">
          <h2>Carousel</h2>
          <Carousel className="w-full ">
            <CarouselContent>
              <CarouselItem>
                <div>
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <div className="grid grid-cols-2 gap-2">
                        <img src="/public/imgs/kelvin-costa-boards-temple-1.jpg" />
                        <div>
                          <span className="text-4xl font-semibold">1</span>
                          <p>
                            Mussum Ipsum, cacilds vidis litro abertis.
                            Casamentiss faiz malandris se pirulitá. A ordem dos
                            tratores não altera o pão duris. Suco de cevadiss
                            deixa as pessoas mais interessantis. Viva Forevis
                            aptent taciti sociosqu ad litora torquent.
                          </p>
                          <p>
                            Suco de cevadiss deixa as pessoas mais
                            interessantis. Viva Forevis aptent taciti sociosqu
                            ad litora torquent.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div>
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <div className="grid grid-cols-2 gap-2">
                        <img src="/public/imgs/09_20_02_2024_Haki-Estande_Kelvin.png" />
                        <div>
                          <span className="text-4xl font-semibold">2</span>
                          <p>
                            Mussum Ipsum, cacilds vidis litro abertis.
                            Casamentiss faiz malandris se pirulitá. A ordem dos
                            tratores não altera o pão duris. Suco de cevadiss
                            deixa as pessoas mais interessantis. Viva Forevis
                            aptent taciti sociosqu ad litora torquent.
                          </p>
                          <p>
                            Suco de cevadiss deixa as pessoas mais
                            interessantis. Viva Forevis aptent taciti sociosqu
                            ad litora torquent.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div>
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <div className="grid grid-cols-2 gap-2">
                        <img src="/public/imgs/Task.jpg" />
                        <div>
                          <span className="text-4xl font-semibold">3</span>
                          <p>
                            Mussum Ipsum, cacilds vidis litro abertis.
                            Casamentiss faiz malandris se pirulitá. A ordem dos
                            tratores não altera o pão duris. Suco de cevadiss
                            deixa as pessoas mais interessantis. Viva Forevis
                            aptent taciti sociosqu ad litora torquent.
                          </p>
                          <p>
                            Suco de cevadiss deixa as pessoas mais
                            interessantis. Viva Forevis aptent taciti sociosqu
                            ad litora torquent.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
}
