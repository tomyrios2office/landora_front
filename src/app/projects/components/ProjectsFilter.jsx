import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ProjectsFilter({ onSearch, onFilterChange }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full justify-center items-center">
      <div className="flex items-center w-full md:w-64 border rounded-md bg-background focus-within:ring-1 focus-within:ring-ring">
        <Search className="h-4 w-4 text-muted-foreground ml-3 flex-shrink-0" />
        <input
          type="text"
          placeholder="Buscar proyectos..."
          className="flex h-10 w-full bg-transparent px-3 py-2 text-sm outline-none disabled:cursor -not-allowed disabled:opacity-50"
          onChange={(e) => onSearch && onSearch(e.target.value)}
        />
      </div>
      <Select
        defaultValue="all"
        onValueChange={(value) => onFilterChange && onFilterChange(value)}
      >
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Filtrar por estado" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos los estados</SelectItem>
          <SelectItem value="funding">Financiando</SelectItem>
          <SelectItem value="almost">Casi completo</SelectItem>
          <SelectItem value="completed">Completado</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
