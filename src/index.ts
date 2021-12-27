import './condition-same-block';
import './var';
import Animal from './new-feature-syntax';

const animals = ['cat', 'dog'];

const findAnimal = (animal: string) => {
  console.log(`${animal} ${animals.includes(animal) ? 'exist.' : 'does not exist.' }`);
};

findAnimal('cat');

export { Animal as MyAnimal };
