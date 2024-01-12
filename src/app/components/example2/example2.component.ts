import {Component, ElementRef, OnInit} from '@angular/core';
import {fromEvent, Observable} from "rxjs";

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.less']
})
export class Example2Component implements OnInit{

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    const button = this.elementRef.nativeElement.querySelector('#myButton');

    // Создаем Observable на основе событий клика на кнопке
    const buttonClicks: Observable<Event> = fromEvent(button, 'click');

    // Подписываемся на Observable и выполняем действие при каждом клике
    buttonClicks.subscribe(event => {
      console.log('Button clicked!', event);
    });
  }

}
