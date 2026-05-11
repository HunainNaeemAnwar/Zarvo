import { MapPin } from "lucide-react";
import { WeatherMiniCard } from "@/components/home/WeatherMiniCard";
import { QuickActions } from "@/components/home/QuickActions";
import { AISuggestionCard } from "@/components/home/AISuggestionCard";
import { FloodAlertBanner } from "@/components/home/FloodAlertBanner";

export default function HomePage() {
  return (
    <div className="space-y-6 py-6">
      {/* Top Section */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-[#6B7280] dark:text-[#9CA3AF]">
          <MapPin className="w-4 h-4" />
          <p className="text-sm">چک نمبر 123، ضلع فیصل آباد</p>
        </div>
        <h1 className="text-2xl font-bold text-[#052E16] dark:text-[#DCFCE7] font-urdu">
          صبح بخیر، محمد صدیق!
        </h1>
      </div>

      {/* Weather Mini Card */}
      <WeatherMiniCard />

      {/* Flood Alert Banner */}
      <FloodAlertBanner />

      {/* Quick Actions */}
      <QuickActions />

      {/* AI Suggestion Card */}
      <AISuggestionCard />
    </div>
  );
}
