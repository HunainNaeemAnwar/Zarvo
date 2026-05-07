"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Chip } from "@/components/ui/Chip";
import { DiseaseCard } from "@/components/disease/DiseaseCard";
import { dummyDiseases } from "@/lib/dummyData";

export default function LibraryPage() {
  const [selectedFilter, setSelectedFilter] = useState("تمام");

  const filters = ["تمام", "گندم", "چاول", "کپاس", "گنا", "مکئی"];

  const filteredDiseases =
    selectedFilter === "تمام"
      ? dummyDiseases
      : dummyDiseases.filter((d) => d.cropType === selectedFilter);

  return (
    <div className="space-y-6 py-6">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-[#052E16] dark:text-[#DCFCE7] font-urdu text-center">
        بیماریوں کی لائبریری
      </h1>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <Input placeholder="تلاش کریں..." className="pl-10" lang="ur" />
      </div>

      {/* Filter Chips */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {filters.map((filter) => (
          <Chip
            key={filter}
            label={filter}
            active={selectedFilter === filter}
            onClick={() => setSelectedFilter(filter)}
            lang="ur"
          />
        ))}
      </div>

      {/* Disease Cards Grid */}
      <div className="grid grid-cols-2 gap-4">
        {filteredDiseases.map((disease) => (
          <DiseaseCard key={disease.id} {...disease} />
        ))}
      </div>
    </div>
  );
}
