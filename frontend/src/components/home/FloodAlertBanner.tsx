import { AlertTriangle } from "lucide-react";
import { AlertBanner } from "@/components/ui/AlertBanner";

export function FloodAlertBanner() {
  return (
    <AlertBanner
      id="flood-alert"
      type="warning"
      messageUr="اگلے 3 دنوں میں بارش کی پیشگوئی — نالوں کی صفائی کریں"
      messageEn="Rain expected in next 3 days - clean the canals"
      lang="ur"
    />
  );
}
