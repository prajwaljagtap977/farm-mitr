import { Cloud, Droplets, Eye, Wind } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const WeatherCard = () => {
  return (
    <Card className="bg-gradient-sky text-white border-0 shadow-card">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Cloud className="w-5 h-5" />
          Today's Weather
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-3xl font-bold">28°C</div>
            <div className="text-sm opacity-90">Partly Cloudy</div>
          </div>
          <div className="text-5xl">⛅</div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Droplets className="w-4 h-4" />
            <div>
              <div className="font-medium">Humidity</div>
              <div className="opacity-90">65%</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Wind className="w-4 h-4" />
            <div>
              <div className="font-medium">Wind</div>
              <div className="opacity-90">12 km/h</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4" />
            <div>
              <div className="font-medium">Visibility</div>
              <div className="opacity-90">10 km</div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-white/20 rounded-lg">
          <div className="text-sm font-medium mb-1">Farming Tip</div>
          <div className="text-sm opacity-90">
            Good conditions for irrigation. Moderate humidity levels are ideal for most crops.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};