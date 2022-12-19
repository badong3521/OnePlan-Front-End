const storage = window.localStorage;

export function load(key: string): any | null {
  const data = storage.getItem(key);
  if (!data) {
    return null;
  }
  return JSON.parse(data);
}

export function save(key: string, value: any): void {
  storage.setItem(key, JSON.stringify(value));
}

export function clear() {
  storage.clear();
}
