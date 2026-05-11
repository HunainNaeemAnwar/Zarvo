import { Bot } from "lucide-react";
import { Card } from "@/components/ui/Card";

export function AISuggestionCard() {
  return (
    <Card className="bg-[#DCFCE7] dark:bg-[#0A2E0D] p-6">
      <div className="flex items-start gap-3 mb-3">
        <Bot className="w-6 h-6 text-[#166534] dark:text-[#DCFCE7]" />
        <div>
          <p className="text-sm font-semibold text-[#166534] dark:text-[#DCFCE7]">
            AI مشورہ
          </p>
        </div>
      </div>
      <p className="text-sm text-[#052E16] dark:text-[#DCFCE7] mb-4 font-urdu">
        آپ کی گندم کی فصل میں نمی کی کمی ہو سکتی ہے۔ اگلے 2 دین پانی ضرور دیں۔
      </p>
      <button className="text-sm text-[#166534] dark:text-[#DCFCE7] font-medium font-urdu">
        مزید جانیں
      </button>
    </Card>
  );
}
