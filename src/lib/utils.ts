import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(value: number | string): string {
  if (!value) return "";
  const num = typeof value === "string" ? parseFloat(value.replace(/,/g, "")) : value;
  if (isNaN(num)) return "";
  return num.toLocaleString("ko-KR");
}

export function parseNumber(value: string): number {
  return parseFloat(value.replace(/,/g, "")) || 0;
}
