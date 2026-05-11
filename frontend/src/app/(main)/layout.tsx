import { BottomNav } from "@/components/ui/BottomNav";

export default function MainLayout(props: {
  children: React.ReactNode;
}) {
  const children = props.children;
  return (
    <div className="flex flex-col min-h-full pb-16">
      {children}
      <BottomNav />
    </div>
  );
}
