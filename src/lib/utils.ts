export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

export function isExternalUrl(url: string): boolean {
  return /^https?:\/\//.test(url);
}
