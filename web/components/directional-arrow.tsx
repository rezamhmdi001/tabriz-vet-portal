import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Direction } from "@/lib/i18n";

export function DirectionalArrow({ direction }: { direction: Direction }) {
  const Icon = direction === "rtl" ? ArrowLeft : ArrowRight;
  return <Icon className="size-4 shrink-0" aria-hidden="true" />;
}
