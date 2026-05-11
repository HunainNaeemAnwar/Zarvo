import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export interface DiseaseCardProps {
  id: string;
  nameUr: string;
  cropType: string;
  symptomPreview: string;
  severity: "high" | "medium" | "low";
  imageColor?: string;
}

export function DiseaseCard(props: DiseaseCardProps) {
  const id = props.id;
  const nameUr = props.nameUr;
  const cropType = props.cropType;
  const symptomPreview = props.symptomPreview;
  const severity = props.severity;
  const imageColor = props.imageColor;

  const defaultImageColor = imageColor ?? "#DCFCE7";
  const severityVariant = severity === "high" ? "danger" : severity === "medium" ? "warning" : "success";
  const severityLabel = severity === "high" ? "زیادہ" : severity === "medium" ? "متوسط" : "کم";

  return (
    <Link href={`/library/${id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        {/* Image Placeholder */}
        <div className="relative h-40" style={{ backgroundColor: defaultImageColor }}>
          <Badge
            variant={severityVariant as any}
            className="absolute top-3 right-3"
          >
            {severityLabel}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-bold text-[#052E16] dark:text-[#DCFCE7] font-urdu mb-1">
            {nameUr}
          </h3>
          <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] mb-2">{cropType}</p>
          <p className="text-sm text-[#052E16] dark:text-[#DCFCE7] font-urdu line-clamp-2">
            {symptomPreview}
          </p>
        </div>
      </Card>
    </Link>
  );
}
