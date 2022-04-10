// Interface

interface PostGateKeeper {
  title: string;
  days: number;
  published: boolean;
}

const printPost = (postToPrint: PostGateKeeper) => {
  console.log(`${postToPrint.title} - ${postToPrint.days}`);
};

const post = { title: 'fefee', days: 10, published: true };

printPost(post);

// Class
class Car {
  // when you lay your constructor with access modifier it will automatically
  // assign attribute. e.g, this.color
  constructor(public color: string) {}
}

// Decorator

const Component = (target: any) => {
  console.log(target);
  let obj = new target();
  obj.say();
};

@Component
class Person {
  say() {
    console.log('Hello');
  }
}

import { Cat } from './Cat';
let cat = new Cat();
console.log(cat.age);

interface Driveable {
  speed: number;
  drive(): string;
}

class Bike implements Driveable {
  speed = 20;
  drive() {
    console.log('vroom');
    return 'vroom';
  }
}

const drive = (v: Driveable) => {
  v.drive();
};

drive(new Bike());

// Generic class
class ValueHolder<T> {
  value: T;
}

const stringHolder = new ValueHolder<number>();
stringHolder.value = 10;

// Generic function
const valueWrapper = <T>(value: T): T[] => {
  return [value];
};

// optional if you want to provide type
// same as
// const value = valueWrapper<number>(10)
const value = valueWrapper(10);
// return array of numbers "number[]"
console.log(valueWrapper<number>(10));
console.log(valueWrapper<boolean>(true));
