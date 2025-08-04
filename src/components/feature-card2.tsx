import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCard2Props {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

export function FeatureCard2({ title, description, icon, className }: FeatureCard2Props) {
  return (
    <Card className={cn("shadow-lg rounded-2xl aspect-square", className)}>
      <CardContent className="flex flex-col items-center gap-2 p-8">
        <div className="p-4">
          <img 
            src={`/images/${icon}`} 
            alt={`${title} icon`}
            width={140}
            height={140}
            className="text-primary"
          />
        </div>
        <div>
          <h4 className="mb-2 text-xl font-semibold text-secondary">{title}</h4>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}