"use client";

import Link from "next/link";
import { ArrowLeft, Bookmark, AlertTriangle, CheckCircle, Sprout } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { dummyDiseaseDetails } from "@/lib/dummyData";

export default function DiseaseDetailPage(props: {
  params: { id: string };
}) {
  const params = props.params;
  const disease = dummyDiseaseDetails[params.id];

  if (!disease) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-[#6B7280] dark:text-[#9CA3AF]">بیماری نہیں ملی</p>
      </div>
    );
  }

  const severityVariant =
    disease.severity === "high"
      ? "danger"
      : disease.severity === "medium"
      ? "warning"
      : "success";
  const severityLabel =
    disease.severity === "high"
      ? "زیادہ نقصان دہ"
      : disease.severity === "medium"
      ? "متوسط"
      : "کم";

  return (
    <div className="pb-24">
      {/* Hero Image */}
      <div className="relative h-72">
        <div
          className="w-full h-full"
          style={{ backgroundColor: disease.imageColor }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FFFBEB] dark:to-[#0A1F0F]" />

        {/* Back Button */}
        <Link href="/library" className="absolute top-4 left-4 p-2 bg-white/80 dark:bg-[#132A1A]/80 rounded-full">
          <ArrowLeft className="w-6 h-6 text-[#052E16] dark:text-[#DCFCE7]" />
        </Link>

        {/* Bookmark Button */}
        <button className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-[#132A1A]/80 rounded-full">
          <Bookmark className="w-6 h-6 text-[#052E16] dark:text-[#DCFCE7]" />
        </button>
      </div>

      {/* Content */}
      <div className="px-6 -mt-8 relative">
        <div className="space-y-6">
          {/* Disease Info */}
          <div>
            <h1 className="text-2xl font-bold text-[#052E16] dark:text-[#DCFCE7] font-urdu mb-2">
              {disease.nameUr}
            </h1>
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] italic mb-3">
              {disease.scientificName}
            </p>
            <Badge variant={severityVariant as any}>{severityLabel}</Badge>
          </div>

          {/* Symptoms */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-5 h-5 text-[#F59E0B]" />
              <h2 className="text-lg font-semibold text-[#052E16] dark:text-[#DCFCE7] font-urdu">
              علامات
              </h2>
            </div>
            <ul className="space-y-2">
              {disease.symptoms.map((symptom, index) => {
                return (
                  <li key={index} className="flex items-start gap-3 text-[#052E16] dark:text-[#DCFCE7] font-urdu">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B] mt-2 flex-shrink-0" />
                    <span>{symptom}</span>
                  </li>
                );
              })}
            </ul>
          </Card>

          {/* Prevention */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-5 h-5 text-[#166534]" />
              <h2 className="text-lg font-semibold text-[#052E16] dark:text-[#DCFCE7] font-urdu">
                بچاؤ کے طریقے
              </h2>
            </div>
            <ul className="space-y-2">
              {disease.prevention.map((item, index) => {
                return (
                  <li key={index} className="flex items-start gap-3 text-[#052E16] dark:text-[#DCFCE7] font-urdu">
                    <CheckCircle className="w-5 h-5 text-[#166534] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          </Card>

          {/* Treatment */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Sprout className="w-5 h-5 text-[#166534]" />
              <h2 className="text-lg font-semibold text-[#052E16] dark:text-[#DCFCE7] font-urdu">
                علاج
              </h2>
            </div>
            <ol className="space-y-2 mb-4">
              {disease.treatment.map((step, index) => {
                return (
                  <li key={index} className="flex items-start gap-3 text-[#052E16] dark:text-[#DCFCE7] font-urdu">
                    <span className="w-6 h-6 rounded-full bg-[#166534] text-white flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                );
              })}
            </ol>
            <div className="bg-[#DCFCE7] dark:bg-[#0A2E0D] p-4 rounded-lg">
              <p className="text-sm text-[#052E16] dark:text-[#DCFCE7] font-urdu">
                <span className="font-semibold">اسپرے کا بہترین وقت:</span>{" "}
                {disease.bestSprayTime}
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Fixed Bottom Buttons */}
      <div className="fixed bottom-16 left-0 right-0 bg-white dark:bg-[#132A1A] border-t border-gray-200 dark:border-[#374151] px-6 py-4 space-y-3">
        <Button
          className="w-full"
          onClick={() => alert("Chat widget se integrate hoga Day 7")}
        >
          اس بیماری کی تشخیص کریں
        </Button>
        <Button
          variant="secondary"
          className="w-full"
          onClick={() => alert("Chat widget se integrate hoga Day 7")}
        >
          چیٹ میں پوچھیں
        </Button>
      </div>
    </div>
  );
}
