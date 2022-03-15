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

### Pipe

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

Run

```sh
ng generate directive myDirective
```

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
