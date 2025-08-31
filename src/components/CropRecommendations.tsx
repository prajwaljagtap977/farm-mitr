import { Leaf, TrendingUp, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const CropRecommendations = () => {
  const recommendations = [
    {
      crop: "Wheat",
      season: "Rabi",
      expectedYield: "40-45 quintals/hectare",
      confidence: "High",
      icon: "🌾",
      reasons: ["Suitable soil pH", "Optimal temperature", "Good market price"]
    },
    {
      crop: "Tomato",
      season: "Year-round",
      expectedYield: "200-250 quintals/hectare",
      confidence: "Medium",
      icon: "🍅",
      reasons: ["High demand", "Greenhouse farming", "Export potential"]
    },
    {
      crop: "Cotton",
      season: "Kharif",
      expectedYield: "15-20 quintals/hectare",
      confidence: "High",
      icon: "🌱",
      reasons: ["Ideal climate", "Traditional crop", "Government support"]
    }
  ];

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Leaf className="w-5 h-5" />
          Recommended Crops for Your Farm
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <div key={index} className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{rec.icon}</span>
                  <div>
                    <h3 className="font-semibold text-foreground">{rec.crop}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {rec.season} Season
                    </div>
                  </div>
                </div>
                <Badge variant={rec.confidence === "High" ? "default" : "secondary"}>
                  {rec.confidence} Confidence
                </Badge>
              </div>
              
              <div className="flex items-center gap-2 mb-3 text-sm">
                <TrendingUp className="w-4 h-4 text-success" />
                <span className="font-medium">Expected Yield:</span>
                <span className="text-muted-foreground">{rec.expectedYield}</span>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">Why this crop:</p>
                <div className="flex flex-wrap gap-2">
                  {rec.reasons.map((reason, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {reason}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Button variant="farm" size="sm" className="w-full">
                View Detailed Guide
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};