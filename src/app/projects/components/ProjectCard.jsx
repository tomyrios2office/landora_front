import Image from "next/image";
import { MapPin, Percent, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function ProjectCard({
  image,
  name,
  tokenName,
  investmentPeriod,
  totalProfit,
  anualProfit,
  rentStart,
  minPrice,
  progress,
  price,
  location,
  tag,
  content,
}) {
  const rentStartFormatted = new Date(rentStart)
    .toLocaleDateString("es-ES")
    .slice(0, 10);
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-[650px] relative">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-25% to-background to-35%"></div>
        <Badge className="absolute top-4 right-4 bg-primary text-white">
          {tag}
        </Badge>
        <Badge className="absolute top-4 left-4 bg-gray-50 text-black">
          {tokenName}
        </Badge>
      </div>
      <div className="relative z-10 mt-52">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl">{name}</CardTitle>
              <CardDescription className="flex items-center mt-2">
                <MapPin className="h-4 w-4 mr-1" /> {location}
              </CardDescription>
            </div>
            <Badge variant="outline" className="text-lg px-4 py-1">
              ${minPrice}
              <span className="text-xs ml-1">min.</span>
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6 line-clamp-3 overflow-hidden text-ellipsis">
            {content}
          </p>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground flex items-center">
                <Percent className="h-4 w-4 mr-1" /> Rentabilidad
              </span>
              <span className="text-xl font-bold text-primary">
                {totalProfit}%
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground flex items-center">
                <Calendar className="h-4 w-4 mr-1" /> Duración
              </span>
              <span className="text-xl font-bold">
                {investmentPeriod} Año/s
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">
                Financiación total
              </span>
              <span className="text-xl font-bold">${price}</span>
            </div>
          </div>
          <Separator className="my-2 text-black" />
          <div className="flex justify-around">
            <span className="flex flex-col">
              <span className="text-sm text-muted-foreground flex items-center">
                Rentabilidad anual
              </span>
              <span className="text-sm">{anualProfit}%</span>
            </span>
            <span className="flex flex-col">
              <span className="text-sm text-muted-foreground flex items-center">
                Periodo de renta
              </span>
              <span className="text-sm">
                {rentStartFormatted} - {rentStartFormatted}
              </span>
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm mt-4">
              <span>Progreso de financiación</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex gap-4 mt-6">
          <Link
            className="flex-1 bg-primary hover:bg-primary/90 text-white"
            href={`/projects/${id}`}
          >
            Invertir ahora
          </Link>
          <Link
            vari
            className="flex-1 bg-primary hover:bg-primary/90 text-white"
            href={`/projects/${id}`}
          >
            Ver detalles
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
}
