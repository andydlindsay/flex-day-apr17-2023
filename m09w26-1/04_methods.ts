interface Writer {
  penName: string;
  realName: string;
  books: string[];
  writeBook: (title: string) => boolean;
}

const agatha: Writer = {
  penName: 'agatha christie',
  realName: 'joan mary',
  books: [],
  writeBook: (title: string) => {
    return false;
  }
};