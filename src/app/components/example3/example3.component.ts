import { Component, OnInit } from '@angular/core';
import {of} from "rxjs";

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.less']
})
export class Example3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const numbers = of(1, 2, 3, 4);

    numbers.subscribe(value => console.log(value));
  }

}
