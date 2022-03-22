import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {
  constructor(
    private viewContainer: ViewContainerRef, // this will be the element you apply the directive to. Similar to ElementRef but more for view, like <ul>
    private templateRef: TemplateRef<any> // this will be whatever wrapped inside the viewContainer, like <li>
  ) {}
  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear(); // first clear any elements inside of the container, e.g., <ul>
    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, { index: i }); // the second argument is the data we can pass to the template
    }
  }
}
