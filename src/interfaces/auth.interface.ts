export interface SignUpModel {
  avatar: string;
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface LoginModel {
  email: string;
  password: string;
}
