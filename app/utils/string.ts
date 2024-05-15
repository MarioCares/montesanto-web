export function publisherNameToAvatarImage(publisherName: string): string {
  return publisherName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s/g, "")
    .toLowerCase();
}

export function cropLargeText(text: string, wordCount: number): string {
  return text.split(" ").slice(0, wordCount).join(" ");
}

export function longDateToShorDate(date: string) {
  const stringDate = new Date(date);
  return stringDate.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
