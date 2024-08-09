import * as React from "react";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { ICAREContent } from "../icareContent";

export function ICARECarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-3xl"
    >
      <CarouselContent>
        {ICAREContent.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="hover:scale-0.95 transition-transform duration-300 ease-in-out">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <h3 className="text-xl font-bold text-green-600">{item.title}</h3>
                  <p className="mt-2 text-gray-600 text-center">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default ICARECarousel;

