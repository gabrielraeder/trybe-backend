export interface UserForToken {
  id: number,
  name: string,
  email: string,
};

export interface Decoded {
  data: { id: number, name: string, email: string },
  isError?: boolean,
};
