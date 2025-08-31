import { BarChart3, TrendingUp, Target, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const FarmStats = () => {
  const stats = [
    {
      title: "Total Area",
      value: "5.2",
      unit: "hectares",
      icon: Target,
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      title: "Active Crops",
      value: "3",
      unit: "varieties",
      icon: BarChart3,
      color: "text-leaf-green",
      bg: "bg-leaf-green/10"
    },
    {
      title: "This Season",
      value: "₹2.4L",
      unit: "expected income",
      icon: DollarSign,
      color: "text-harvest-gold",
      bg: "bg-harvest-gold/10"
    },
    {
      title: "Yield Increase",
      value: "+12%",
      unit: "vs last year",
      icon: TrendingUp,
      color: "text-success",
      bg: "bg-success/10"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg ${stat.bg}`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.unit}</p>
              <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};