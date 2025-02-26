import React from "react";
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

export default function CarouselCard({ items }) {
  // Informação do Slide atual
  const [api, setApi] = React.useState(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel setApi={setApi} className="w-full p-x-[80px]">
        <CarouselContent className="items-center">
          {items.map((item, key) => {
            return (
              <CarouselItem key={key}>
                <Card>
                  <CardContent className="flex items-center justify-center p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <img
                        src={item.imgSrc}
                        className="aspect-square md:aspect-video rounded-md object-cover mb-4 sm:mb-0"
                      />
                      <div className="flex items-center  ml-0 sm:ml-4">
                        <div>
                          {item.title()}
                          {item.content()}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <div className="py-2 text-center text-sm text-muted-foreground">
          {current} de {count}
        </div>
      </Carousel>
    </>
  );
}
