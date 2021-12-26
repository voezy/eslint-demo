class Animal {
  // es2022，class field decoration
  name = 'Animal';

  // es2022, private field
  #address = 'Earth'

  constructor() {
    this.speak = () => console.log(this.name);
  }
}

export default Animal;
