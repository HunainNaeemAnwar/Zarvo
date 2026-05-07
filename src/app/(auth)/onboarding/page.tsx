"use client";

import { useState } from "react";
import Link from "next/link";
import { Mic, Keyboard, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

type OnboardingStep = 1 | 2 | 3 | "complete";

interface StepConfig {
  question: string;
  chips: string[];
}

const steps: Record<OnboardingStep, StepConfig | null> = {
  1: {
    question: "آپ کونسی فصلیں اگا رہے ہیں؟",
    chips: ["گندم", "چاول", "کپاس", "گنا"],
  },
  2: {
    question: "آپ کی زمین کا رقبہ کتنا ہے؟",
    chips: ["1 ایکڑ", "2-5 ایکڑ", "5-10 ایکڑ", "10 سے زیادہ"],
  },
  3: {
    question: "آپ کی مٹی کی قسم کیا ہے؟",
    chips: ["چکنی مٹی", "ریتلی مٹی", "کالی مٹی", "لوہے والی مٹی"],
  },
  complete: null,
};

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>(1);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [isRecording, setIsRecording] = useState(false);
  const [transcription, setTranscription] = useState<string>("");

  const stepConfig = steps[currentStep];

  const handleChipSelect = (label: string) => {
    setSelectedAnswer(label);
  };

  const handleNext = () => {
    if (currentStep === "complete") {
      // Navigate to home
      window.location.href = "/home";
      return;
    }
    if (selectedAnswer) {
      setSelectedAnswer("");
      setTranscription("");
      setCurrentStep((currentStep + 1) as OnboardingStep);
    }
  };

  const handleSkip = () => {
    setSelectedAnswer("");
    setTranscription("");
    if (currentStep === 3) {
      setCurrentStep("complete");
    } else if (typeof currentStep === "number") {
      setCurrentStep((currentStep + 1) as OnboardingStep);
    }
  };

  const getProgress = () => {
    if (currentStep === "complete") return 100;
    return ((currentStep - 1) / 3) * 100;
  };

  if (currentStep === "complete") {
    return (
      <div className="min-h-screen bg-[#FFFBEB] dark:bg-[#0A1F0F] px-6 py-8 flex flex-col items-center justify-center">
        <div className="text-center">
          <CheckCircle className="w-24 h-24 text-[#166534] dark:text-[#DCFCE7] mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-[#166534] dark:text-[#DCFCE7] font-urdu mb-4">
            پروفائل مکمل ہو گیا
          </h1>
          <p className="text-[#6B7280] dark:text-[#9CA3AF] mb-8 font-urdu">
            آپ کا پروفائل کامیابی سے بن گیا ہے
          </p>
          <Button onClick={handleNext} className="w-full max-w-sm">
            ہوم پر جائیں
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFBEB] dark:bg-[#0A1F0F] px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link href="/login" className="p-2">
          <Keyboard className="w-6 h-6 text-[#052E16] dark:text-[#DCFCE7]" />
        </Link>
        <LanguageToggle />
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-[#6B7280] dark:text-[#9CA3AF] font-urdu">
            مرحلہ {currentStep} از 3
          </span>
          <span className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
            {Math.round(getProgress())}%
          </span>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-[#374151] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#166534] transition-all duration-300"
            style={{ width: `${getProgress()}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-[#052E16] dark:text-[#DCFCE7] font-urdu mb-4">
          {stepConfig?.question}
        </h1>
      </div>

      {/* Mic Button */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setIsRecording(!isRecording)}
          className={`relative w-32 h-32 rounded-full flex items-center justify-center transition-all ${
            isRecording
              ? "bg-[#166534] animate-pulse scale-110"
              : "bg-[#DCFCE7] dark:bg-[#132A1A]"
          }`}
        >
          <Mic className="w-16 h-16 text-[#166534] dark:text-[#DCFCE7]" />
        </button>
      </div>

      {/* Transcription Area */}
      {transcription && (
        <div className="bg-white dark:bg-[#132A1A] rounded-2xl p-4 mb-6 border border-gray-200 dark:border-[#374151]">
          <p className="text-[#052E16] dark:text-[#DCFCE7] font-urdu">{transcription}</p>
        </div>
      )}

      {/* Suggestion Chips */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {stepConfig?.chips.map((chip) => (
          <Chip
            key={chip}
            label={chip}
            active={selectedAnswer === chip}
            onClick={() => handleChipSelect(chip)}
            lang="ur"
          />
        ))}
      </div>

      {/* Buttons */}
      <div className="space-y-4">
        <Button
          className="w-full"
          disabled={!selectedAnswer}
          onClick={handleNext}
        >
          اگلا سوال
        </Button>
        <button
          onClick={handleSkip}
          className="w-full text-center text-sm text-[#6B7280] dark:text-[#9CA3AF] font-urdu"
        >
          چھوڑیں
        </button>
      </div>
    </div>
  );
}
