export interface Character {
  id: string;
  name: string;
  description: string;
  rating: number;
  address: string;
  city: string;
}

export const createEmptyCharater = (): Character => ({
  id: '',
  name: '',
  description: '',
  rating: 3,
  address: '',
  city: '',
});
