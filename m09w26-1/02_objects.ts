export interface Dog {
  breed: string;
  name: string;
}

interface User {
  id?: number;
  username: string;
  password: string;
  bff?: User;
  friends?: User[];
  pet?: Dog;
}

const myObj: User = {
  id: 45,
  username: 'bob',
  password: '1234',
};

const users: User[] = [];

users.push(myObj);
// users.push(true);
