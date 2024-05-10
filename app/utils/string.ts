export function publisherNameToAvatarImage(publisherName: string): string {
  return publisherName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s/g, "")
    .toLowerCase();
}
