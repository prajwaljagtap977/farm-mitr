import { DashboardHeader } from "@/components/DashboardHeader";
import { WeatherCard } from "@/components/WeatherCard";
import { CropRecommendations } from "@/components/CropRecommendations";
import { QuickActions } from "@/components/QuickActions";
import { AlertsAndTips } from "@/components/AlertsAndTips";
import { FarmStats } from "@/components/FarmStats";
import heroImage from "@/assets/hero-farm.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <DashboardHeader />
      
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Smart Farming for Better Harvests
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-6">
              Get personalized crop recommendations, weather insights, and expert guidance to maximize your farm's potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors">
                Get Crop Advice
              </button>
              <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Check Weather
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <main className="container mx-auto px-4 py-8">
        {/* Farm Statistics */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Your Farm Overview</h2>
          <FarmStats />
        </section>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <CropRecommendations />
            <QuickActions />
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            <WeatherCard />
            <AlertsAndTips />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
