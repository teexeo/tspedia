export function IsFalsey(data: any): boolean {
  return typeof data !== 'boolean' && !data;
}
