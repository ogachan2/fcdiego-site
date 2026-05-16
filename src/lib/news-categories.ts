export const NEWS_CATEGORIES = [
  { value: "NEWS", label: "お知らせ" },
  { value: "MATCH", label: "試合情報" },
  { value: "REPORT", label: "活動報告" },
  { value: "EVENT", label: "イベント" },
  { value: "RECRUIT", label: "メンバー募集" },
] as const;

export type NewsCategory = (typeof NEWS_CATEGORIES)[number]["value"];

export function getNewsCategoryLabel(category: string | null | undefined) {
  return (
    NEWS_CATEGORIES.find((item) => item.value === category)?.label ||
    NEWS_CATEGORIES[0].label
  );
}

export function normalizeNewsCategory(category: FormDataEntryValue | null) {
  const value = String(category || NEWS_CATEGORIES[0].value);

  return NEWS_CATEGORIES.some((item) => item.value === value)
    ? value
    : NEWS_CATEGORIES[0].value;
}
