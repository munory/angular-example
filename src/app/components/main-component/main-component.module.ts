import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {MainComponentComponent} from "./main-component.component";
import {Example1Component} from "../example1/example1.component";
import {CakesComponent} from "../cakes/cakes.component";
import {PartOneDirective} from "../../directivies/part-one.directive";
import {PartTwoDirective} from "../../directivies/part-two.directive";
import {SweetsComponent} from "../sweets/sweets.component";

@NgModule({
    declarations: [
        MainComponentComponent,
        Example1Component,
        CakesComponent,
        PartOneDirective,
        PartTwoDirective,
        SweetsComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: MainComponentComponent,
            },
        ]),
    ]
})
export class MainComponentModule {
}
