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
