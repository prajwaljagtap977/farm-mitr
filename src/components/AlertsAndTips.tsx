import { AlertTriangle, Info, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const AlertsAndTips = () => {
  const alerts = [
    {
      type: "warning",
      title: "Weather Alert",
      message: "Heavy rainfall expected in next 48 hours. Ensure proper drainage in fields.",
      time: "2 hours ago",
      icon: AlertTriangle,
      priority: "High"
    },
    {
      type: "info",
      title: "Fertilizer Reminder",
      message: "Time to apply nitrogen fertilizer for your wheat crop (Growth stage: Tillering)",
      time: "1 day ago",
      icon: Info,
      priority: "Medium"
    },
    {
      type: "success",
      title: "Market Update",
      message: "Tomato prices increased by 15% in nearby markets. Good time to sell.",
      time: "3 hours ago",
      icon: CheckCircle,
      priority: "Low"
    }
  ];

  const getAlertStyles = (type: string) => {
    switch (type) {
      case "warning":
        return "border-l-warning bg-warning/5";
      case "info":
        return "border-l-sky-blue bg-sky-blue/5";
      case "success":
        return "border-l-success bg-success/5";
      default:
        return "border-l-primary bg-primary/5";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "destructive";
      case "Medium":
        return "default";
      case "Low":
        return "secondary";
      default:
        return "secondary";
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-primary">Alerts & Tips</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className={`p-4 border-l-4 rounded-lg ${getAlertStyles(alert.type)}`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <alert.icon className="w-5 h-5" />
                  <h4 className="font-medium text-foreground">{alert.title}</h4>
                </div>
                <Badge variant={getPriorityColor(alert.priority) as any} className="text-xs">
                  {alert.priority}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{alert.message}</p>
              <p className="text-xs text-muted-foreground">{alert.time}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};