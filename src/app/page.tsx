"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { BottomNav } from "@/components/ui/BottomNav";
import { AlertBanner } from "@/components/ui/AlertBanner";
import { Chip } from "@/components/ui/Chip";
import { Modal } from "@/components/ui/Modal";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { Skeleton } from "@/components/ui/Skeleton";
import { Badge } from "@/components/ui/Badge";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChip, setSelectedChip] = useState("all");

  return (
    <div className="min-h-screen py-8 space-y-8">
      {/* Header with Toggles */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#166534] dark:text-[#DCFCE7]">
          Zarvo Design System
        </h1>
        <div className="flex gap-2">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>

      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-[#052E16] dark:text-[#DCFCE7]">Buttons</h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
          <Button isLoading>Loading</Button>
        </div>
      </section>

      {/* Inputs */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-[#052E16] dark:text-[#DCFCE7]">Inputs</h2>
        <div className="space-y-4">
          <Input placeholder="Urdu text..." lang="ur" />
          <Input placeholder="English text..." lang="en" />
          <Input placeholder="Error state" error />
        </div>
      </section>

      {/* Cards */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-[#052E16] dark:text-[#DCFCE7]">Cards</h2>
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2 text-[#052E16] dark:text-[#DCFCE7]">
            Card Title
          </h3>
          <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
            This is a sample card component with padding and rounded corners.
          </p>
        </Card>
      </section>

      {/* Alert Banners */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-[#052E16] dark:text-[#DCFCE7]">Alert Banners</h2>
        <AlertBanner
          id="warning-1"
          type="warning"
          messageUr="یہ ایک انتباہ ہے"
          messageEn="This is a warning"
          lang="ur"
        />
        <AlertBanner
          id="danger-1"
          type="danger"
          messageUr="یہ خطرے کی نشانی ہے"
          messageEn="This is a danger alert"
          lang="en"
        />
      </section>

      {/* Chips */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-[#052E16] dark:text-[#DCFCE7]">Chips</h2>
        <div className="flex flex-wrap gap-2">
          {["all", "gandum", "chawal", "kapas"].map((chip) => (
            <Chip
              key={chip}
              label={chip === "all" ? "سب" : chip}
              active={selectedChip === chip}
              onClick={() => setSelectedChip(chip)}
              lang="ur"
            />
          ))}
        </div>
      </section>

      {/* Badges */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-[#052E16] dark:text-[#DCFCE7]">Badges</h2>
        <div className="flex flex-wrap gap-2">
          <Badge variant="high">زیادہ خطرہ</Badge>
          <Badge variant="medium">متوسط</Badge>
          <Badge variant="low">کم</Badge>
          <Badge variant="success">کامیاب</Badge>
          <Badge variant="warning">انتباہ</Badge>
          <Badge variant="danger">خطرہ</Badge>
        </div>
      </section>

      {/* Loading Spinner */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-[#052E16] dark:text-[#DCFCE7]">Loading Spinner</h2>
        <div className="flex items-center gap-4">
          <LoadingSpinner size="sm" />
          <LoadingSpinner size="md" />
          <LoadingSpinner size="lg" />
        </div>
      </section>

      {/* Skeleton */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-[#052E16] dark:text-[#DCFCE7]">Skeleton</h2>
        <div className="space-y-3">
          <Skeleton variant="rectangle" width="100%" height={40} />
          <Skeleton variant="circle" width={40} height={40} />
          <Skeleton variant="square" width={100} height={100} />
        </div>
      </section>

      {/* Modal */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-[#052E16] dark:text-[#DCFCE7]">Modal</h2>
        <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="موڈل ٹائٹل"
          titleLang="ur"
        >
          <p className="text-sm text-[#052E16] dark:text-[#DCFCE7] mb-4">
            یہ ایک نمونہ موڈل ہے۔ یہ اسکرین کے بیچ میں پاپ اپ ہوتا ہے۔
          </p>
          <div className="flex gap-2">
            <Button onClick={() => setIsModalOpen(false)}>بند کریں</Button>
          </div>
        </Modal>
      </section>

      {/* Bottom Nav */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-[#052E16] dark:text-[#DCFCE7]">Bottom Navigation</h2>
        <BottomNav />
      </section>
    </div>
  );
}
