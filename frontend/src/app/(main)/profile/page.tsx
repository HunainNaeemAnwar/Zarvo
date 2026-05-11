"use client";

import { MapPin, Mic, ChevronRight, LogOut, Wheat, Sprout, Droplet, Waves } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useThemeStore } from "@/stores/theme-store";
import { useLanguageStore } from "@/stores/language-store";

export default function ProfilePage() {
  const { theme } = useThemeStore();
  const { language } = useLanguageStore();

  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <div className="space-y-6 py-6">
      {/* Profile Header */}
      <Card className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-20 h-20 bg-[#166534] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-3xl font-bold text-white">MS</span>
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-[#052E16] dark:text-[#DCFCE7] font-urdu mb-1">
              محمد صدیق
            </h1>
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-2">+92 300 1234567</p>
            <div className="flex items-center gap-2 text-sm text-[#6B7280] dark:text-[#9CA3AF]">
              <MapPin className="w-4 h-4" />
              <span className="font-urdu">چک نمبر 123، ضلع فیصل آباد</span>
            </div>
          </div>
          <Button variant="secondary" size="sm">
            ترمیم
          </Button>
        </div>
      </Card>

      {/* Farm Info Grid */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-[#052E16] dark:text-[#DCFCE7] mb-4 font-urdu">
          کھیت کی معلومات
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 bg-[#DCFCE7] dark:bg-[#0A2E0D] rounded-lg">
            <Wheat className="w-6 h-6 text-[#166534] dark:text-[#DCFCE7]" />
            <div>
              <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] font-urdu">فصل</p>
              <p className="font-medium text-[#052E16] dark:text-[#DCFCE7] font-urdu">گندم</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-[#DCFCE7] dark:bg-[#0A2E0D] rounded-lg">
            <Sprout className="w-6 h-6 text-[#166534] dark:text-[#DCFCE7]" />
            <div>
              <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] font-urdu">رقبہ</p>
              <p className="font-medium text-[#052E16] dark:text-[#DCFCE7] font-urdu">12 ایکڑ</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-[#DCFCE7] dark:bg-[#0A2E0D] rounded-lg">
            <Droplet className="w-6 h-6 text-[#166534] dark:text-[#DCFCE7]" />
            <div>
              <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] font-urdu">مٹی</p>
              <p className="font-medium text-[#052E16] dark:text-[#DCFCE7] font-urdu">چکنی مٹی</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-[#DCFCE7] dark:bg-[#0A2E0D] rounded-lg">
            <Waves className="w-6 h-6 text-[#166534] dark:text-[#DCFCE7]" />
            <div>
              <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] font-urdu">آبپاشی</p>
              <p className="font-medium text-[#052E16] dark:text-[#DCFCE7] font-urdu">نہری + ٹیوب ویل</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Voice Update Button */}
      <Button variant="secondary" className="w-full">
        <Mic className="w-5 h-5 mr-2" />
        آواز سے اپ ڈیٹ کریں
      </Button>

      {/* Settings List */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-[#052E16] dark:text-[#DCFCE7] mb-4 font-urdu">
          ترتیبات
        </h2>
        <div className="space-y-4">
          {/* Language */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 dark:bg-[#374151] rounded-full flex items-center justify-center">
                🌐
              </div>
              <div>
                <p className="font-medium text-[#052E16] dark:text-[#DCFCE7] font-urdu">زبان</p>
                <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                  {language === "ur" ? "اردو" : "English"}
                </p>
              </div>
            </div>
            <LanguageToggle />
          </div>

          {/* Theme */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 dark:bg-[#374151] rounded-full flex items-center justify-center">
                🎨
              </div>
              <div>
                <p className="font-medium text-[#052E16] dark:text-[#DCFCE7] font-urdu">تھیم</p>
                <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                  {theme === "dark" ? "ڈارک" : "لائٹ"}
                </p>
              </div>
            </div>
            <ThemeToggle />
          </div>

          {/* Alert Notifications */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 dark:bg-[#374151] rounded-full flex items-center justify-center">
                🔔
              </div>
              <p className="font-medium text-[#052E16] dark:text-[#DCFCE7] font-urdu">
                الرٹ نوٹیفیکیشنز
              </p>
            </div>
            <div className="w-12 h-6 bg-[#166534] rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
            </div>
          </div>

          {/* Change Location */}
          <div className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 dark:bg-[#374151] rounded-full flex items-center justify-center">
                📍
              </div>
              <p className="font-medium text-[#052E16] dark:text-[#DCFCE7] font-urdu">
                مقام تبدیل کریں
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-[#6B7280] dark:text-[#9CA3AF]" />
          </div>

          {/* Help & Support */}
          <div className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 dark:bg-[#374151] rounded-full flex items-center justify-center">
                ❓
              </div>
              <p className="font-medium text-[#052E16] dark:text-[#DCFCE7] font-urdu">
                مدد اور سپورٹ
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-[#6B7280] dark:text-[#9CA3AF]" />
          </div>

          {/* Terms of Use */}
          <div className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 dark:bg-[#374151] rounded-full flex items-center justify-center">
                📜
              </div>
              <p className="font-medium text-[#052E16] dark:text-[#DCFCE7] font-urdu">
                استعمال کی شرائط
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-[#6B7280] dark:text-[#9CA3AF]" />
          </div>

          {/* About App */}
          <div className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 dark:bg-[#374151] rounded-full flex items-center justify-center">
                ℹ️
              </div>
              <div>
                <p className="font-medium text-[#052E16] dark:text-[#DCFCE7] font-urdu">
                  ایپ کے بارے میں
                </p>
                <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">Version 1.0</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-[#6B7280] dark:text-[#9CA3AF]" />
          </div>
        </div>
      </Card>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="w-full text-center text-[#DC2626] font-medium font-urdu py-3"
      >
        لاگ آؤٹ
      </button>
    </div>
  );
}
