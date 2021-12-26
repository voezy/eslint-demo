const animals = ['cat', 'dog'];

const findAnimal = (animal) => {
  console.log(`${animal} ${animals.includes(animal) ? 'exist.' : 'does not exist.' }`);
};

findAnimal('cat');
