import { CloudSun, CloudRain, Droplets, Wind, Thermometer, Sun, AlertTriangle, Bot, Droplet } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function WeatherPage() {
  const hourlyForecast = [
    { time: "12:00", temp: 28, icon: Sun },
    { time: "1:00", temp: 29, icon: Sun },
    { time: "2:00", temp: 30, icon: Sun },
    { time: "3:00", temp: 30, icon: Sun },
    { time: "4:00", temp: 29, icon: CloudSun },
    { time: "5:00", temp: 28, icon: CloudSun },
    { time: "6:00", temp: 27, icon: CloudSun },
    { time: "7:00", temp: 26, icon: CloudSun },
    { time: "8:00", temp: 25, icon: CloudSun },
    { time: "9:00", temp: 24, icon: CloudRain },
    { time: "10:00", temp: 23, icon: CloudRain },
    { time: "11:00", temp: 22, icon: CloudRain },
  ];

  const dailyForecast = [
    { day: "آج", high: 30, low: 22, rain: 10, icon: Sun, heavyRain: false },
    { day: "کل", high: 29, low: 21, rain: 20, icon: CloudSun, heavyRain: false },
    { day: "پیر", high: 28, low: 20, rain: 60, icon: CloudRain, heavyRain: true },
    { day: "منگل", high: 26, low: 19, rain: 80, icon: CloudRain, heavyRain: true },
    { day: "بدھ", high: 27, low: 20, rain: 40, icon: CloudSun, heavyRain: false },
    { day: "جمعرات", high: 29, low: 21, rain: 15, icon: Sun, heavyRain: false },
    { day: "جمعہ", high: 30, low: 22, rain: 10, icon: Sun, heavyRain: false },
  ];

  return (
    <div className="space-y-6 py-6">
      {/* Current Weather Hero */}
      <Card className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-6">
        <p className="text-sm mb-2">فیصل آباد، پنجاب</p>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-5xl font-bold mb-2">28°C</p>
            <p className="text-sm">زیادہ تر آبر آلود</p>
          </div>
          <CloudSun className="w-20 h-20" />
        </div>
        <p className="text-sm mb-4">محسوس ہوتا ہے: 30°C</p>
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center">
            <Droplets className="w-5 h-5 mx-auto mb-1" />
            <p className="text-xs">نمی 65%</p>
          </div>
          <div className="text-center">
            <Wind className="w-5 h-5 mx-auto mb-1" />
            <p className="text-xs">ہوا 12</p>
          </div>
          <div className="text-center">
            <CloudRain className="w-5 h-5 mx-auto mb-1" />
            <p className="text-xs">بارش 15%</p>
          </div>
          <div className="text-center">
            <Thermometer className="w-5 h-5 mx-auto mb-1" />
            <p className="text-xs">UV 6</p>
          </div>
        </div>
      </Card>

      {/* Flood Alert Card */}
      <Card className="bg-red-500 text-white p-6">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="w-6 h-6" />
          <h2 className="text-lg font-bold font-urdu">سیلاب کا الرٹ!</h2>
        </div>
        <p className="text-sm mb-4 font-urdu">
          دریائے چناب میں پانی کی سطح بڑھ رہی ہے۔ احتیاط برتیں۔
        </p>
        <Button className="bg-white text-red-500 hover:bg-gray-100 mb-2">
          محفوظ مقام کی ہدایات
        </Button>
        <p className="text-xs text-red-200 font-urdu">اپ ڈیٹ: آج صبح 8:00 بجے</p>
      </Card>

      {/* 7-Day Forecast */}
      <div>
        <h3 className="text-lg font-semibold text-[#052E16] dark:text-[#DCFCE7] mb-4 font-urdu">
          7 دن کی پیشگوئی
        </h3>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {dailyForecast.map((day, index) => (
            <Card
              key={index}
              className={`flex-shrink-0 p-4 text-center min-w-[80px] ${
                day.heavyRain ? "bg-red-50 dark:bg-red-900/20" : ""
              }`}
            >
              <p className="text-sm font-medium text-[#052E16] dark:text-[#DCFCE7] font-urdu mb-2">
                {day.day}
              </p>
              <day.icon className="w-8 h-8 mx-auto mb-2 text-[#166534] dark:text-[#DCFCE7]" />
              <p className="text-lg font-bold text-[#052E16] dark:text-[#DCFCE7]">
                {day.high}°
              </p>
              <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">{day.low}°</p>
              <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] mt-1">بارش {day.rain}%</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Hourly Forecast */}
      <div>
        <h3 className="text-lg font-semibold text-[#052E16] dark:text-[#DCFCE7] mb-4 font-urdu">
          آج کی گھنٹہ وار پیشگوئی
        </h3>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {hourlyForecast.map((hour, index) => (
            <Card key={index} className="flex-shrink-0 p-3 text-center min-w-[60px]">
              <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] mb-2">{hour.time}</p>
              <hour.icon className="w-6 h-6 mx-auto mb-2 text-[#166534] dark:text-[#DCFCE7]" />
              <p className="text-sm font-medium text-[#052E16] dark:text-[#DCFCE7]">
                {hour.temp}°
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* AI Advisory Card */}
      <Card className="bg-gradient-to-br from-[#166534] to-[#0A3D0C] text-white p-6">
        <div className="flex items-start gap-3 mb-3">
          <Bot className="w-6 h-6" />
          <div>
            <p className="font-semibold font-urdu">AI مشورہ</p>
          </div>
        </div>
        <p className="text-sm font-urdu">
          اگلے 2 دین بارش کی پیشگوئی ہے۔ سپرے نہ کریں۔ پانی دینے سے گریز کریں۔
        </p>
      </Card>

      {/* Irrigation Schedule Card */}
      <Card className="bg-blue-500 text-white p-6">
        <div className="flex items-center gap-3 mb-4">
          <Droplet className="w-6 h-6" />
          <h3 className="font-semibold font-urdu">آبیاری کا شیڈول</h3>
        </div>
        <p className="text-sm mb-4 font-urdu">
          اگلی آبپاشی: 5 دین بعد (بارش کے بعد)
        </p>
        <div className="bg-white/20 rounded-full h-3 overflow-hidden">
          <div className="bg-white h-full" style={{ width: "72%" }} />
        </div>
        <p className="text-xs mt-2">مٹی کی نمی: 72%</p>
      </Card>
    </div>
  );
}
