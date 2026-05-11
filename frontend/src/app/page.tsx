"use client";

import Link from "next/link";
import { Camera, Cloud, Mic } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { Chip } from "@/components/ui/Chip";
import { useState } from "react";
import { dummyDiseases } from "@/lib/dummyData";
import { Modal } from "@/components/ui/Modal";

export default function SplashPage() {
    const [selectedFilter, setSelectedFilter] = useState("تمام");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filters = ["تمام", "گندم", "چاول", "کپاس", "گنا", "مکئی"];

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#166534] to-[#0A3D0C]">
      {/* Language Toggle */}
      <div className="absolute top-4 right-4">
        <LanguageToggle />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-white font-urdu mb-4">
            زرو
          </h1>
          <p className="text-lg text-[#DCFCE7] font-urdu">
            آپ کا کھیتی باڑی کا AI ساتھی
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-3">
              <Camera className="w-8 h-8 text-white" />
            </div>
            <p className="text-sm text-white font-urdu">بیماری کی پہچان</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-3">
              <Cloud className="w-8 h-8 text-white" />
            </div>
            <p className="text-sm text-white font-urdu">موسم کی خبر</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-3">
              <Mic className="w-8 h-8 text-white" />
            </div>
            <p className="text-sm text-white font-urdu">آواز سے سوال</p>
          </div>
        </div>
<div>
  {filters.map((filter) => {
    return (
      <Chip
        key={filter}
        label={filter}
        active={selectedFilter === filter}
        onClick={() => setSelectedFilter(filter)}
        lang="ur"
      />
    );
  })}
</div>



        {/* CTA Button */}
        <Link href="/login" className="w-full max-w-sm mb-4">
          <Button className="w-full text-lg py-4 bg-white text-[#166534] hover:bg-gray-100">
            شروع کریں
          </Button>
        </Link>

        {/* Modal Trigger Button */}
        <Button 
          onClick={handleOpenModal}
          className="w-full max-w-sm mb-4 bg-transparent border-2 border-white text-white hover:bg-white/10"
        >
          Modal کھولیں
        </Button>

        {/* Login Link */}
        <Link href="/login" className="text-white/80 hover:text-white text-sm font-urdu">
          پہلے سے اکاؤنٹ ہے؟ لاگ ان
        </Link>
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="خوش آمدید"
        titleLang="ur"
      >
        <p className="text-[#052E16] dark:text-[#DCFCE7] font-urdu">
          زرو میں آپ کا خوش آمدید ہے۔ یہ آپ کا کھیتی باڑی کا AI ساتھی ہے۔
        </p>
      </Modal>
    </div>
  );
}
