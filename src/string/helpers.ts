import { trim } from './trim';

export function CheckType(text: any): string | null {
  if (!CheckTypeIsString(text) || !trim(text)) return null;

  return text.trim();
}

export function CheckTypeIsString(text: any) {
  return typeof text === "string";
}