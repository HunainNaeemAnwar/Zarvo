import Link from "next/link";
import { Camera, Cloud, BookOpen, Mic } from "lucide-react";

export function QuickActions() {
  const actions = [
    {
      icon: Camera,
      label: "بیماری چیک کریں",
      color: "bg-[#166534]",
      href: "/library",
    },
    {
      icon: Cloud,
      label: "موسم کی تفصیل",
      color: "bg-blue-500",
      href: "/weather",
    },
    {
      icon: BookOpen,
      label: "بیماریوں کی لائبریری",
      color: "bg-[#F59E0B]",
      href: "/library",
    },
    {
      icon: Mic,
      label: "آواز سے پوچھیں",
      color: "bg-purple-500",
      href: "/home",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {actions.map((action) => {
        return (
          <Link key={action.label} href={action.href}>
            <div className={`${action.color} rounded-2xl p-6 text-center text-white`}>
              <action.icon className="w-10 h-10 mx-auto mb-3" />
              <p className="text-sm font-urdu">{action.label}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
