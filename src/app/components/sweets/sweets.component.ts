import {Component, ContentChild, OnInit} from '@angular/core';
import {PartOneDirective} from "../../directivies/part-one.directive";

@Component({
  selector: 'app-sweets',
  templateUrl: './sweets.component.html',
  styleUrls: ['./sweets.component.less']
})
export class SweetsComponent implements OnInit {

  @ContentChild(PartOneDirective) partOne!: PartOneDirective;

  constructor() { }

  ngOnInit(): void {
  }

}
