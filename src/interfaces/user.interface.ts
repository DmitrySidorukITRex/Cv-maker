export interface User {
  _id: string;
  username: string;
  role: 'admin' | 'guest';
  avatar: string;
}
