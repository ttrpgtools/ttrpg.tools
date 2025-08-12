import type { CollectionEntry } from "astro:content";

export function sortGardenByDate(
  a: CollectionEntry<"resources">,
  b: CollectionEntry<"resources">,
) {
  const aDate = a.data.updated || a.data.created;
  const bDate = b.data.updated || b.data.created;
  return bDate.getTime() - aDate.getTime();
}
