# Angular

To build a new app

```bash

ng new [app_name]
```

To start

```bash
ng serve # or npm start

```

## Angular template syntax

Refer to `pw`

### Event binding

The event binding syntax uses
(event_name_in_html)="func_name_from_cmp()"

```bash
<button (click)="onButtonClick()" />

```

### Property binding

The property binding syntax uses [property_name_in_html] = "prop_name_from_cmp"

```typescript

<input [value]="myProp">

```

Or, you can also invoke an function rather than binding to a property,

```typescript
<input [value]="getProp()"/>

```

### Interpolation

Use {{property_name}}

```typescript
<h1>{{ myProp }}</h1>

<h2>{{someFunc()}}</h2>
```

### Get input value

in normal js, this is what you do

```js
const input = document.querySelector('input');
input.addEventListener('input', event => {
  console.log(event.target.value);
});
```

in angular, this is how we do it:

```typescript
// in app.component.html
// syntax looks a little akward using "$event"
<input (input)="onChangeInput($event)"/>

// then in the app.component.ts
onChangeInput(event: any) {
    console.log(event.target.value);

```

##### tip

```typescript
// this is the same when setting a property for a class

export class MyCmp {
  constructor() {
    this.myprop = '';
  }
}

export class MyCmp {
  myprop = '';
}
```

## Style with BULMA

Let's use BULMA: https://bulma.io/

For example, Form controls:
https://bulma.io/documentation/form/general/

```bash

npm install bulma
```

And after that, to use bulma you have to go the `/src/style.css` file and add this:

```css
@import 'bulma/css/bulma.css';
```

## Directives

Angular directives are special syntax we use indide of the template.

### Structrual directive

Add or remove HTML elements

- ngIf: show or hide an html element

```html
<div *ngIf="some_property_or_expression">
  This will be hidden if ngIf is evalued falsey
</div>
>
```

### Attribute directive

Changes the properties of the html element it gets applied to.

```html
<label appStrikethough> This will be strikethrough </label>
```

## Deploy your angular app

Use `now.sh`. Got to new.sh. Looks like it's now called Vercel.com.

```sh
npm install -g now
```

Then, run this command to login

```sh
now login
```

Once logged in, just run `now` from the root of your project directory

```sh
now
```

Then you can take the url and see you app being deployed! For example:
https://pw-eight-peach.vercel.app

## Components

Refer to `cards`
To make an angular compoent

```sh

ng generate component card
# or "ng g c card" for short
```

### Pass datat from parent to child

For a child component to receive data from a parent, for exmaple, something like this

```html
<child-component
  [some_property_in_child_comp]="property_in_parent_comp"
></child-component>
```

```typescript
// in child component
Input()some_property_in_child_comp = ''

```

```typescript
// in parent component
property_in_parent_comp = 'stuff you can send to child';
```

### ngFor

ngFor is a structrual directive.
Use \*ngFor to iterate over an iterable to avoid repetitive code.

```html
<child-comp *ngFor="let post of posts"
 [some_prop]="post.something
> </child-comp>
```

#### Style the whole component

For exmaple, if you want to select the whole `app-root` component, you can't just use below inside the app.component.cs

```css
app-root {
  display: flex;
}
```

Instead, you need to use `:host` to achieve it

```css
:host {
  display: flex;
}
```

## Pipe

Refer to `pipes`

Pipes are basically some (built-in)functions you can use in the template to transform data. https://angular.io/api?type=pipe For example:

```html
{{name | titlecase}}
```

Use the date pipe

```html
{{dateStr | date: "m/d/Y"}}
```

One pipe that is useful for debugging purpose is jsonPipe.

To use it, simply display anywhere in the tempalte for a json object:

```html
{{ myObj | json}}
```

#### Custom pipe

To create a pipe, use ng command

```sh
ng generate pipe convert

```

Then you can do whatevet you want with it. Not only you can use it in the template interpolation but you can also use it just about everywhere. For example, say you only want to show the element when the coverted value is greater than certain threshold.

```html
<div *ngIf="(miles | convert: 'km') > 10">{{miles | convert: "km"}}</div>
```

#### Chain pipes

You can also chain the pipes

```html
{{ miles | convert: 'm' | number: '1.0-2'}}
```

## Bootstrap

```sh
npm install bootstrap
```

Then go to `src/style.css` and add

```css
@import 'bootstrap/dist/css/bootstrap.css';
```

## Angular Directives list

Refer to `pages`

- \*ngIf: This we already saw
- \*ngFor: structural directive
- [ngClass]: attribute directive, for style.

```html
<nav>
  <ul class="pagination">
    <li
      class="page-item"
      [ngClass]="{active: i === currnetPage}"
      *ngFor="let image of images; let i = index"
    >
      <a class="page-link">{{ i + 1 }}</a>
    </li>
  </ul>
</nav>
```

Actually, ngClass is very flexible. You can also do something like this:

```html
<div [ngClass]="someMethod()">...</div>
```

where someMethod can return a class string, or an array of class strings. NgClass is cabable of applying those to class attribute.

- ngSwitch
  Similar to ngIf but you can apply more cases.

```html
<div [ngSwitch]="currentPage">
  <div *ngSwitchCase="0">Current Page is zero</div>
  <div *ngSwitchCase="1">Current Page is one</div>
  <div *ngSwitchCase="2">Current Page is two</div>
  <div *ngSwitchCase="3">Current Page is two</div>
  <div *ngSwitchDefault>Unknow page</div>
</div>
```

#### Ng-container

ng-container is an invisible html element for purpose of apllying structural directive - since you cannot apply more than one structrual directive in the same element.

### Custom directive

`Refer to pages`

Run

```sh
ng generate directive myDirective
```

#### Attribute Directive

In the myDirevtive you can create your own directive. It can take in the element which you apply the directive to and mess around with it.

```typescript
@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  @Input()
  backgroundColor = '';
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'orange';
  }
}
```

#### Structual Directive

You can create a custom structural directive. Refer to `pages/src/app/times.directive.ts` where we created a [appTimes].

## Modules in Angular

Refer to `comps`
Use Module to organize a group of components.

```
ng generate module {module_name}
```

To create a component under a module,

```sh
ng generate component {module_folder/component_name}
# for example
ng generate component elements/ElementsHome
```

In order for app.component.html to use a component under another module, we need to do a little set up. Refer to `elements.module.ts`

Essentially,

Step 1 - create a component under a module using

```sh
ng g c {module}/{compoent}
```

Step 2 - export the compoent

- in the `xxx.module.ts`, add the component you want to `exports` to the outside world.

Step 2 - import the entire module in the app.module.ts

- in the app.module.ts, import the entire module (not the component) and add it to the import key

## Routing

Refer to `comps`
This is actually really easy!
In the `{component}-routing.module.ts` file,

1. import your component
2. add routing rules

```ts
import { ElementsHomeComponent } from './elements-home/elements-home.component';

// mange the routes rules here
const routes: Routes = [{ path: 'elements', component: ElementsHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule {}
```

Then, when you go to say `localhost:4200/elements` you will see the template being rendered.

### routerLink

Use routerLink to avoid reloading the entire page when chaning the routing path.

```html
<a routerLink="/elements">Elements</a>
```

## Semantic UI

```sh
npm install sementic-ui-css
```

In `style.css` file,

```css
@import 'semantic-ui-css/semantic.css';
```

### RouterLinkActive

Refer to `comps`.

When an anchor element (<a></a>) is selected we can use something like `routterLinkActive="active"` to easily apply the style class "active" so you don't have to do it yourself! neat!

### Routing rules

The routing rules are based on the order of the imported modules in the `app.module.ts`. So you can easily change the order of the modules being imported.

## Lazy Loading

Refer to `comps`.

Tell angular to just load the bare amount of code for what is requested. As additional modules are needed by user it will then load up those modules. Angular makes this possible and very easy!

What you have to do is to dynamically import the component when user requests the route. It's done by something like this:

```ts
// in app-routing.module.ts
const routes: Routes = [
  {
    path: 'elements',
    loadChildren: () =>
      import('./elements/elements.module').then(m => m.ElementsModule)
  },
  ...
]
```

and then in `elements-routing.module.ts`, make sure you clear out your path because otherwise the path gets accumulated (like elements/elements)

```ts
const routes: Routes = [{ path: '', component: ElementsHomeComponent }];
```

## Widget Module

Refer to `comps`.
Widget Module provides reusable components. By convension, they are placed in a file called `Shared Module`.

See the implementation in `comps/app/shared` where we implemented a simple divider component.

In order to import a component from a different module, you first have to export the compoent from the .module.ts and add the component to `exports`.

And then, for another module who wants to use the component it can import the entire module that contains that componet.

### NgContent

Refer to `comps/app/shared/divider.component.html`

<ng-content> is a special angular element. Anything you put in the selector you will be going into the <ng-content></ng-content>.For example:

In the parent template which uses app-some-compoenent:

```html
<app-some-component>
  Hello
  <app-some-component></app-some-component
></app-some-component>
```

In the some-component tempalte

```html
<h1>
  <!-- this par will become "Hello" -->
  <ng-content></ng-content>
</h1>
```

ng-content can only be used once in a template. To get around this, you can use the `select` property to distingush. Refer to `comps/app/elements/segment/segment.component.html`.

##### Hide display for ng-content when not provided

A little trick to not display the element for an ng-content when it's not provided. Use the css:

```css
div.ui.icon.header:empty {
  display: none;
}
```

#### RouterLink

A little trick about the routerLink attribute, you can use `[rountterLink]="[]"`, elements in the array will be joined to form the link, so you can do something like this:

```html
<a
  class="item"
  [routerLink]="['./', someLinkProperty]"
  routerLinkActive="active"
  >Biography
</a>
```

#### RouterLinkActive

Angular looks at the url to determine if the anchor is active. If it "contains" the route it will think it's active. You can use `routerLinkActiveOptions={exact=true}`

## Modal

Refer to `comps/app/mods/modal`

Issue/difficulties with modal

- In order to the modal to show in the center of the screen, it has to have the css style property of "position: absolute". The issue is that it could be set as "relative" when it's wrapped by some element.
- The way pretty much all the framework solves this problem is the same: It takes the model element and appends directly inside the <body> element.
- Refer to `comps/app/mods/modal/modal.compone nt.ts `

## Lifecycyle Hook

- ngOnInit (called once - the first time component displayed on the screen. After properties are passed down from the parent)
- ngOnChanges (called anytime a property is changed)
- ngOnDestroy (called once when user navigate to a different route)

`OnInt` interface and a like is 100% optional. You don't need it to use ngOnInit.

#### Evet Bubbling

By default javascript has something called event bubbling effect - meaning that the event goes up to the ultimate parent that has the same event. So if you have click event for multiple elements in a nested structure it will be bubbling up to the highest parent to handle that.

To prevent the event bubbling from going up, we will add `$event.stopPropagation()` for the element that you don't want to have the effct.

Refer to `comps/app/mods/modal/modal.component.html`

#### Use ng-content to display custom button if supplied

Refer to `comps/app/mods/modal/modal.component.html`

We will be using just css to solve this issue. The below css will do the trick: if ng-content is not provided then css will display none.

```css
.actions:empty {
  display: none;
}
```

## TypeScript

Intro for TypeScript.

TypeScript really only exists during the development to catch errors. Once it's complied it has zero effect.

```bash
npm install typescript ts-node-dev

# to start the server run
ts-node-dev --no-notify --respawn index.ts

```

### Use Interface to create a custom type

You can use it to validate the data. For example,

```ts
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
```

### TypeScript Class

```ts
// Class
class Car {
  // when you lay your constructor with access modifier it will automatically
  // assign attribute. e.g, this.color
  constructor(public color: string) {}

  //// equivelent to
  // constructor(color:string) {
  // this.color = color
  //}
}

car = new Car('red');
console.log(car.color); //red
```

### TypeScript Decorator

You can create a typescript project by running

```sh
npx tsc --init
```

In the `tsconfig.json` file, enable "experimentalDecorators" and change "strict" to false.

#### Decorator Factiory

A decorator factory is a decorator that returns a functiton.

```ts
const Component = (target: any) => {
  return () => {};
};

// to use it you will add ()
@Component()
class Person {}
```

### Module system

Angular uses the module system to allowing import and export to another module/file.

```ts
// car.ts

export class Car {
  year = 2000;
}
```

```ts
//index.ts
import { Car } from './Car';

const car = new Car();
```

#### Generic Class

You can create a genric class that can dynamically take the type you provide in the "<>" and pass to where it's needed.
By convention, people like to use letter "T" for the variale name.

```ts
class ValueHolder<T> {
  value: T;
}

const numberHolder = new ValueHolder<number>();
numberHolder.value = 10;
```

#### Generic function

```ts
// Generic function
const valueWrapper = <T>(value: T): T[] => {
  return [value];
};

// optional if you want to provide type
// same as
// const value = valueWrapper<number>(10)
const value = valueWrapper(10);
// return array of numbers "number[]"

console.log(valueWrapper<boolean>(true));
```

## Service

Refer to `wsearch`.
To create an angular service, run

```sh
ng c service <serviceName>
```

#### Search Input

By default, if you have an input element inside of a form element, when you hit the enter key, it will trigger a form Submit event - you can use this event as like:

```ts
<form (submit)="onFormSubmit()">
  <input (input)="onInput($event)" />
</form>
```

### Output EventEmitter

When you use EventEmitter you can pass a value to communicate. The way to make it work:

```ts

@Output() somEvent = new EventEmitter<string>()

onTrigger(){
  this.someEvent.emit("hello")
}
```

Then in the parent.html:

```ts
<app-child (someEvent)="someMethod($event)">
```

Then in the parent.ts:

```ts

someMethod(term:string){
  console.log(term) // hello
}
```

#### WikiAPI

Make a request to wikipedia:
https://en.wikipedia.org/w/api.php?
action=query&
list=search&
utf8=1&
srsearch=space&
format=json

## Dependency Ingection

Angular uses dependecy ingection. You use the @Injectable decorator and the Ingection container will be responsible to create and provide an istance when you ask for it.

```ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  constructor() {}

  search(term: string) {
    return 'I am wiki search result';
  }
}

@Component({
  selector: 'app-root',
  ...
})
export class AppComponent{
  constructor(private wiki: WikipediaService) {}

  this.wiki.search("some term")
}
```

Dependency Ingection makes it easier for unit test because then you can easily mock the object and justt test the behavior of a function (i.e., avoid making actual http request)

### Making HTTP requst

Angular has a standard way of making http request. Refer to `wsearch` where it uses dependency injection to accquire http client object.

```ts
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    return this.http.get('http://...') // will return an observable
```

## Security

By default, when browser sees `<` and `>` it will render it as html element. To get around this (to show the actual `< >` charecters, you use:

- `&lt;` it turns it into `<` and show it.

- `&gt;` it turns it into `>` and show it.

Angular Escaper does this (escaping html and make it like `&gt;span&lt;` and that's how you are seeing the plan text as `<spam>` on the browser, behind the scene they have actually been replaced into `&gt;` and `&lt;`.

### Cross-site Scripting (XSS) Attacks

- allows malicious users to run JS code on other user's browsers
- the bad JS code can be used to steal credentials, make requests etc.
- Angular has you covered - it will automatically escate html

For example, a hacker can send you an html with javascript code that is going to take what you input, username, password etc and make an http request to another remote server to steal your personal info. Angular converts/escapes the html elements so to prevent XSS.

XSS example:

```js
<img src="" onerror="some bad js code here...">

```

#### Show actual HTML element

So by default, Angular replaces the tags to show pure text rather than html. Now if we do want to show html elements, how do we do that?

We can use property binding syntax with innerHTML property to achieve that. For example,

```ts

<td [innerHTML]="page.description"></td>
```

Angular knows certain behaviors as XSS (such as the `onerror="..."`) and will automatically remove it so you are covered.

## Rxjs

A JS library to manage data. The concept is used by other programs outside of angular and even other languages - so understanding Rxjs is valuable.

Notice, in angular Rxjs is often used instead of promise or async/await for handling async stuff.

Rxjs makes building some kinds of features really easy comared to writing normal code.

But it's hard. Probablly the hardest thing in the world of JS.

The terminologies for Rxjs

- Observable: tthis is the data source from the emitted event
- Operator: the function to process input data. You can find a fill built-in operators [here](https://rxjs.dev/api)
- Pipe/pipeline: A series of Operators
- Observer: the handler for the data from the pipe; either a function to use the value from the pipe, or handles error that occured in the pipe.

### RxJS in action

You can use `out.stegrider.now.sh` to test RxJS.

```js
const { fromEvent } = Rx;
const { map, pluck } from RxOperators;

const input = document.createElement('input')
const container = document.querySelector(".container")
container.appendChild(input)

// create an Observable
const observable = fromEvent(input, "input")
  .pipe(
    //map(event => event.targett.value),
    pluck('target', 'value'),  // does the same thing as above
    map(value => parseInt(value)),
    map(value => {
      if(isNaN(value)){
        throw new Error("Enter a number!");
      }
      return value;
    })
  )
// Observer (the acutal observer is inside the subscribe, it can be either an object, or a function)
observable.subscribe(
  {
    next(value){
      console.log(`Your value is ${value}`)
    },

    complete() {

    }
    error(err){
      console.error("Bad thing happen!", err.message)
    }
  }
)

observable

```

Just dive into the lower level of Obvervable..

```js
const { Observable } = Rx;

const observable = new Observable(subscriber => {
  subscriber.next('I am the value'); // the value that goes into the pipe

  subscriber.complete(); //

  subscriber.error(new Error('I am an error'));
}); // here the pipe function is optional

observable.subscribe(
  // this is an alternative way
  value => console.log(value), // next
  err => console.error('Bad thing', err.message), //error
  () => console.log('completed') //complete
);
```

#### Unicast and Multicast Observables

In _Unicast_ Observable, if we have a pipe set up with multiple Observer (i.e., when you use observable.subscribe()), it emits a separate set of values for each obsever that subscribes. All of the operators in a pipe will be executed for each observer - this can easily lead to bad behavior (e.g., an operator that makes network request multiple times due to multiple obversers)

In _Multicast_ Observable, it emits a single set of value for all observers that subscirbe - all the operators in a pipe only get executed once. However, it has a big gotcha. If you add a subscirber later on it might not receive the values that have already been gone through the pipe!

#### Hot and Cold Observables

Hot Observable: Single event stream shared for all subscribers old and new -> sometimes interchangeble with Multicast

Cold Observable: Event stream recreated for each new subscriber - sometimes interchageble with Unicast

### TypeScript with RxJS

As it turns out, Observable is a generic class (hintt: recall the <T>). You can use the <> to annotate the type of value emitted from an observable if you are using typescirpt. And typescript will know what type should be coming out of the observer which is neat!

```ts
interface Car {
  make: string;
  year: number;
}

const observable = new Observable<Car>(observer => {
  observer.next({
    make: 'toyota',
    year: 2020
  });
}).pipe(pluck('make'));

// typescript will know that this value should be a string
observable.subscribe(value => {
  console.log(value);
});
```

Refer to `wsearch/src/app/wikipedia.service.ts`

### Excercise

Refer to `photos` to see the basic angular way of building an app that:

- have a component, say, a button
- have a service tto fetch data from internet, say, get photos
- show it on the browser

## Augular Forms

Some natures for Forms,

- needs validation
- needs messaging to help user
- need to change frequently without having to rewrite a ton of app logic

Angular has two separate and different systems for building forms:

- `Reactive Forms`
- `Template Forms`

We can technically implement forms with just what have covered in this course but Angular forms will make building forms easier!

### Reactive Forms

Refer to `creditcard`.

Remember to import the `ReactiveFormsModule` into the app.module.ts

```ts
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
 ...
})
export class AppModule {}

```

Wire up the "ReactiveFormsModule".

When we import the `ReactiveFormModule`, angular is going to assume the <form> element will be control by the instance of `FormGroup`. We will need to bind the `fromGroup` property to the instance of FormControl.
A basic example:

```ts
<form [formGroup]="cardForm">
  <input formControlName="name">
</form>

<div>{{ cardForm.value }}<div>
<div>{{ cardForm.valid }}<div>
```

You can use the Validator to validate the form using some built-in functions, such as:

```ts
name: new FormControl('', [
  Validators.required, // required field
  Validators.minLength(3) // at least 3 characters
]);
```

The FormControl obj has some built in attributes. Such as:

- dirty
- disabled
- enabled
- valid
- parent
- pending
  You can console log it to see:

```ts
console.log(this.cardForm.get('name')); //  a FormCountrol "name"
```

To see a full list of description: [link](https://angular.io/api/forms/AbstractControl)

#### ngSubmit

To submit form in Reactive Form, we use a special thing called `ngSubmit`.

```
<form (ngSubmit)="onSubmit()">
...
</form>

```

### Input Masking

Input Masking means to automatically format the input for the users to improve user experience.

Refer to `creditcard`. As an example to control date input.

Create a class using

```ts
ng generate class DateFormControl
```

We are then going to use this class and extends/inherit from FormControl

Here, something particular interesting is the method called `setValue`, which we are overriding. There is one property in the signature called `emitModelToViewChange: boolean`.

If we set `emitModelToViewChange: boolean` to true, it means it will update the value in the input as well, which in turn overrides the user input value!!

```ts
// if the pattern matches, set the value to it's original value (this.value) and return -> this will basically stop the user to enter anything
setValue(value: string, options: any) {
    if (value.match(/[^0-9|\/]/gi)) {
      super.setValue(this.value, {
        ...options,
        emitModelToViewChange: true
      });
      return;
    }
```

We can also use a 3rd party library for more robust input masking. Refer to the documentation.

```sh
npm install --save ngx-mask
```

However, there are still some downsites - it does not change the underlying data but only the input view.

### Template Form

Refer tto `emailForm`.

In Template Forms, most of the form logic is driven by template(.html) file. It's more appropriate for simple forms.

To use Template Forms, simply import `FormsModule` tto the app.module.ts file.

#### ngModel

Use the `ngModel` directive to track the value of the input element. And anytime the value changes we want to update the propery `email` on our component class. It's important to note that you also need to add the attribute name for it to work properly.

```html
<form>
  <input name="email" [(ngModel)]="email" />
</form>
```

This is refered to as "Two way binding". It is a combination of property binding and event binding. It means - take a look at the email property, everytime the value of the property changes, update the value on the input. Likewise, everytime the value of the input is updated by the user, change the value of the `email` property.

#### ngForm

In Template Forms, Angular actually still creates the FormGroup and FormControls that we do in Reactive Forms by ourselves. In Template form, we can gain control by using element reference using `#` plus `ngForm`, by doing so, you can use the FormGroup property such as `.valid` which we saw in the Reactive Forms- because behind the scenes it is the same FormGroup.

```html
<form #emailForm="ngForm">
  <input name="email" [(ngModel)]="email" />
</form>
Form values: {{emailForm.value | json}} Errors:
{{emailForm.controls.email.errors}}
```

#### Input validations

The way Template forms accomplish validation is to use attributes, which have similar behavior as the Validators from Reactive Forms, for example:

```html
<form #emailForm="ngForm">
  <input
    type="email"
    required
    pattern=".+@.+\..+"
    name="myEmail"
    [(ngModel)]="email"
  />
</form>
```

Find the full listt of attributes in https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation

#### Get access tp FormControl

Similar to the ngForm, you can also make a reference to the FormControl using `#controlName="ngModel"`

```html
<input #emailControl="ngModel" />
```

### Custom Validator

Refer to `mathForm`.

When you need to add a validator that checks multiple form controls, we can create a custom validator and apply it to the entire form group.

```ts
myForm = new FormGroup(
  a: new FormControl(),
  b: new FormControl(),
  [
    (form:AbstractControl)=>{return {addition: true}},
    ...
  ]
)
```

Be sure to make a class for your custom validators so it can be reusbale in nature. Refer to `mathForm/src/app/math-validators.ts`

### RxJs with Reactive Forms

Refer to `mathForm`. There are some attributes of the FormGroup that are of type of Observable. Use them within the `ngOnInit` method so you get the response everytime some change event happens.

`.statusChanges` attribute is an observable.
Below will log either VALID or INVALID for your form everytime you make a change to your form control.

```ts
ngOnInit(){
// mathForm being an obj of FormGroup
  this.mathForm.statusChanges.subscribe(value => {
    console.log(value);
  });
}
```

This example shows how you can get values from a FormGroup when value chages when you use it in a custom directive:

```ts

mport { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appAnswerHighlight]'
})
export class AnswerHighlightDirective {
  constructor(private el: ElementRef, private controlName: NgControl) {
    // console.log(controlName);
  }
  ngOnInit() {
    // .parent will bump you to the parent which often time is the FormGroup
    this.controlName.control?.parent?.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

```
