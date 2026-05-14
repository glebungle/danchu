export function formatDateInput(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 8);
  const y = digits.slice(0, 4);
  const m = digits.slice(4, 6);
  const d = digits.slice(6, 8);

  if (digits.length <= 4) return y;
  if (digits.length <= 6) return `${y}. ${m}`;
  return `${y}. ${m}. ${d}`;
}

export function isFullDate(value: string): boolean {
  return /^\d{4}\.\s*\d{2}\.\s*\d{2}$/.test(value.trim());
}
