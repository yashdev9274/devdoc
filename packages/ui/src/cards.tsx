import { Folder, FileText, Blocks, Terminal } from "lucide-react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function Card({ icon, title, description }: CardProps) {
  return (
    <div className="flex flex-col items-start gap-2 rounded-lg border p-4 text-left text-sm transition-all hover:bg-accent">
      <div className="flex items-center justify-center h-8 w-8 rounded-md bg-gray-100 dark:bg-gray-800">
        {icon}
      </div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

interface CardsProps {
  children: React.ReactNode;
}

export function Cards({ children }: CardsProps) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
      {children}
    </div>
  );
}
