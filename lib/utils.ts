/**
 * Converts a string into a URL-friendly slug
 * @param text The text to convert to a slug
 * @returns The slugified text
 */
export const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
};

/**
 * Converts a slug back to a readable title
 * @param slug The slug to convert
 * @returns A readable title
 */
export const deslugify = (slug: string): string => {
  return slug
    .replace(/-and-/g, ' & ')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
};
