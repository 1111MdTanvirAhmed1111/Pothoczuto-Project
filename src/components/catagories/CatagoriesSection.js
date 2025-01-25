import { Card, CardContent } from "@/components/ui/card"

import { categories } from './catagories';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
 

export default function CatagoriesSection() {
  return (
    <div className="my-16">
    <span className="block text-4xl text-center font-bold my-5">Blog Categories</span>
    <div className="flex justify-center max-sm:w-60%">
    
    <Carousel className="w-full max-w-sm ">
      <CarouselContent className="mx-auto">
        {categories.map(({ name, icon }, index) => (
          <CarouselItem key={index} className="pl-1 max-md:basis-1/5 basis-1/3 max-lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square flex-col justify-center items-center px-12">
                <span className="text-4xl mb-2 mt-5 block">{icon}</span>
      <h3 className="text-sm font-semibold text-center">{name}</h3>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
    </div>)
}