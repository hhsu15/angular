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
  target.say();
};

@Component
class Person {
  say() {
    console.log('Hello');
  }
}
