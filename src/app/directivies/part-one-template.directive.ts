import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appPartOneTemplate]'
})
export class PartOneTemplateDirective {

  constructor(public templateRef: TemplateRef<unknown>) { }

}
