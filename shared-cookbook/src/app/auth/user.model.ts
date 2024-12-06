export interface UserForAuth {
  //   username: string;
  email: string;
  password: string;
}

export interface LoggedUser {
  email: string;
  username: string;
  _id: string;
  accessToken: string;
}
