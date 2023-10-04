interface Logable {
  log: () => void;
}
function logItems<T extends Logable>(items: T[]): void {
  items.forEach(item => item.log());
}
