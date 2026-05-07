import { BottomNav } from "@/components/ui/BottomNav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-full pb-16">
      {children}
      <BottomNav />
    </div>
  );
}
