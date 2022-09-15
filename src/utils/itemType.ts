interface Item {
  id: number;
  name: string;
  children?: Item[];
}

export type { Item }
