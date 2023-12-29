import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {MainComponentComponent} from "./main-component.component";
import {AppModule} from "../../app.module";
import {Example1Component} from "../example1/example1.component";
import {AppRoutingModule} from "../../app-routing.module";
import {CakesComponent} from "../cakes/cakes.component";
import {PartOneDirective} from "../../directivies/part-one.directive";

@NgModule({
    declarations: [
        MainComponentComponent,
        Example1Component,
        CakesComponent,
        PartOneDirective,
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
