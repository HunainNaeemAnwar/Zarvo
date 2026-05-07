import { Sun, Droplets, Wind, CloudRain } from "lucide-react";
import { Card } from "@/components/ui/Card";

export function WeatherMiniCard() {
  return (
    <Card className="bg-gradient-to-br from-[#166534] to-[#0A3D0C] text-white p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-3xl font-bold">28°C</p>
          <p className="text-sm text-[#DCFCE7]">زیادہ تر دھوپ</p>
        </div>
        <Sun className="w-12 h-12 text-[#DCFCE7]" />
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4 text-xs">
        <div className="flex flex-col items-center">
          <Droplets className="w-4 h-4 mb-1" />
          <span className="text-[#DCFCE7]">نمی 65%</span>
        </div>
        <div className="flex flex-col items-center">
          <Wind className="w-4 h-4 mb-1" />
          <span className="text-[#DCFCE7]">ہوا 12</span>
        </div>
        <div className="flex flex-col items-center">
          <CloudRain className="w-4 h-4 mb-1" />
          <span className="text-[#DCFCE7]">بارش 10%</span>
        </div>
      </div>
      <div className="border-t border-white/20 pt-4">
        <p className="text-xs text-[#DCFCE7] font-urdu">
          آج سپرے کے لیے مناسب وقت: شام 4 بجے
        </p>
      </div>
    </Card>
  );
}
