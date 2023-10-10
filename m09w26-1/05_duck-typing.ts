interface PotentialUser {
  username: string;
  password: string;
}

const login = (user: PotentialUser): boolean => {
  return true;
};

const user = {
  username: 'jstamos',
  password: '1234',
  age: 42
};

login(user);
