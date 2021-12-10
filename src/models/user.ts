export interface IUser {
  dob: {
    age: number;
  };
  email: string;
  gender: string;
  location: {
    coordinates: {
      latitude: string;
      longitude: string;
    };
  };
  name: {
    first: string;
    last: string;
  };
  picture: {
    thumbnail: string;
  };
  login: {
    uuid: string;
  };
}
