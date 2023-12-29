import {NgModule} from '@angular/core';
import {PartOneDirective} from "./part-one.directive";
import {PartTwoDirective} from "./part-two.directive";
import { PartOneTemplateDirective } from './part-one-template.directive';


@NgModule({
    declarations: [
        PartOneDirective,
        PartTwoDirective,
        PartOneTemplateDirective,
    ],
    imports: [
        //CommonModule
    ],
    exports: [
        PartOneDirective,
        PartTwoDirective,
        PartOneTemplateDirective,
    ],
})
export class DirectiviesModule {
}
