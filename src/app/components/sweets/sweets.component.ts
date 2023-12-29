import {Component, ContentChild, OnInit} from '@angular/core';
import {PartOneDirective} from "../../directivies/part-one.directive";
import {PartOneTemplateDirective} from "../../directivies/part-one-template.directive";

@Component({
  selector: 'app-sweets',
  templateUrl: './sweets.component.html',
  styleUrls: ['./sweets.component.less']
})
export class SweetsComponent implements OnInit {

  @ContentChild(PartOneTemplateDirective) partOne!: PartOneTemplateDirective;

  constructor() { }

  ngOnInit(): void {
  }

}
