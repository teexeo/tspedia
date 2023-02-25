export function IsVoid(data: Function): boolean {
  if (data()) {
    return true;
  }
  return false;
}
