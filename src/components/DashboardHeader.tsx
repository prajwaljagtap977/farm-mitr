import { Cloud, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DashboardHeader = () => {
  return (
    <header className="bg-card shadow-soft border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🌾</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">FarmMitr</h1>
              <p className="text-sm text-muted-foreground">Your Smart Farming Companion</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Pune, Maharashtra</span>
            </div>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};