"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Lock, Keyboard } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

type LoginState = "phone" | "otp";

export default function LoginPage() {
  const [state, setState] = useState<LoginState>("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const isPhoneFilled = phone.length === 10;
  const isOtpFilled = otp.every((digit) => digit !== "");

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`) as HTMLInputElement;
      nextInput?.focus();
    }
  };

  const handleVerify = () => {
    // Hardcoded: navigate to onboarding for first time, home for returning
    window.location.href = "/onboarding";
  };

  return (
    <div className="min-h-screen bg-[#FFFBEB] dark:bg-[#0A1F0F] px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Link href="/" className="p-2">
          <ArrowLeft className="w-6 h-6 text-[#052E16] dark:text-[#DCFCE7]" />
        </Link>
        <LanguageToggle />
      </div>

      {/* Logo */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#166534] dark:text-[#DCFCE7] font-urdu mb-2">
          زرو
        </h1>
        <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] font-urdu">
          خوش آمدید
        </p>
      </div>

      {state === "phone" ? (
        <>
          {/* Phone Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#052E16] dark:text-[#DCFCE7] mb-2 font-urdu">
              فون نمبر
            </label>
            <div className="flex gap-2">
              <div className="flex items-center px-4 bg-white dark:bg-[#132A1A] border border-gray-300 dark:border-[#374151] rounded-lg">
                <span className="text-[#052E16] dark:text-[#DCFCE7] font-medium">+92</span>
              </div>
              <Input
                type="tel"
                placeholder="3XX XXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value.slice(0, 10))}
                className="flex-1"
                lang="en"
              />
            </div>
          </div>

          {/* OTP Button */}
          <Button
            className="w-full mb-6"
            disabled={!isPhoneFilled}
            onClick={() => setState("otp")}
          >
            OTP حاصل کریں
          </Button>

          {/* OR Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-300 dark:bg-[#374151]" />
            <span className="text-sm text-[#6B7280] dark:text-[#9CA3AF] font-urdu">یا</span>
            <div className="flex-1 h-px bg-gray-300 dark:bg-[#374151]" />
          </div>

          {/* Google Sign-in */}
          <Button variant="secondary" className="w-full mb-6">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Google سے سائن ان
          </Button>
        </>
      ) : (
        <>
          {/* OTP Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#052E16] dark:text-[#DCFCE7] mb-2 font-urdu">
              OTP درج کریں
            </label>
            <div className="flex gap-2 justify-between">
              {otp.map((digit, index) => {
                return (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    className="w-12 h-12 text-center text-xl font-bold bg-white dark:bg-[#132A1A] border border-gray-300 dark:border-[#374151] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#166534] text-[#052E16] dark:text-[#DCFCE7]"
                  />
                );
              })}
            </div>
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mt-2 text-center font-urdu">
              60 سیکنڈ
            </p>
          </div>

          {/* Verify Button */}
          <Button className="w-full mb-6" disabled={!isOtpFilled} onClick={handleVerify}>
            تصدیق کریں
          </Button>

          {/* Resend Link */}
          <button className="w-full text-center text-sm text-[#166534] dark:text-[#DCFCE7] font-urdu mb-6">
            دوبارہ OTP بھیجیں
          </button>
        </>
      )}

      {/* Security Message */}
      <div className="flex items-center justify-center gap-2 text-xs text-[#6B7280] dark:text-[#9CA3AF] mt-8">
        <Lock className="w-4 h-4" />
        <span className="font-urdu">آپ کی معلومات محفوظ رہے گی</span>
      </div>
    </div>
  );
}
