import { Camera, FileText, TrendingUp, Droplets, Bug, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const QuickActions = () => {
  const actions = [
    {
      icon: Camera,
      title: "Pest Detection",
      description: "Scan crop diseases",
      variant: "earth" as const,
      color: "text-earth-brown"
    },
    {
      icon: Droplets,
      title: "Soil Test",
      description: "Check soil health",
      variant: "farm" as const,
      color: "text-leaf-green"
    },
    {
      icon: TrendingUp,
      title: "Market Prices",
      description: "Latest crop rates",
      variant: "harvest" as const,
      color: "text-harvest-gold"
    },
    {
      icon: FileText,
      title: "Advisory",
      description: "Expert guidance",
      variant: "default" as const,
      color: "text-primary"
    },
    {
      icon: Bug,
      title: "Pest Alert",
      description: "Regional warnings",
      variant: "destructive" as const,
      color: "text-destructive"
    },
    {
      icon: MessageCircle,
      title: "Ask Expert",
      description: "Chat with advisor",
      variant: "success" as const,
      color: "text-success"
    }
  ];

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-primary">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              className="h-auto p-4 flex-col gap-2"
            >
              <action.icon className="w-6 h-6" />
              <div className="text-center">
                <div className="font-medium text-sm">{action.title}</div>
                <div className="text-xs opacity-90">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};