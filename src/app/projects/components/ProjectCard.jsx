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

export function ProjectCard({
  image,
  title,
  location,
  returnRate,
  duration,
  progress,
  status,
  description,
  minInvestment,
  totalFunding,
}) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-[500px]">
      <div className="relative h-64 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
        <Badge className="absolute top-4 right-4 bg-primary text-white">
          {status}
        </Badge>
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription className="flex items-center mt-2">
              <MapPin className="h-4 w-4 mr-1" /> {location}
            </CardDescription>
          </div>
          <Badge variant="outline" className="text-lg px-4 py-1">
            {minInvestment}
            <span className="text-xs ml-1">min.</span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-6">{description}</p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground flex items-center">
              <Percent className="h-4 w-4 mr-1" /> Rentabilidad
            </span>
            <span className="text-xl font-bold text-primary">
              {returnRate}%
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground flex items-center">
              <Calendar className="h-4 w-4 mr-1" /> Duración
            </span>
            <span className="text-xl font-bold">{duration}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">
              Financiación total
            </span>
            <span className="text-xl font-bold">{totalFunding}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
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
      <CardFooter className="flex gap-4">
        <Button className="flex-1 bg-primary hover:bg-primary/90 text-white">
          Invertir ahora
        </Button>
        <Button variant="outline" className="flex-1">
          Ver detalles
        </Button>
      </CardFooter>
    </Card>
  );
}
