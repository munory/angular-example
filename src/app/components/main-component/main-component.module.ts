import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {MainComponentComponent} from "./main-component.component";
import {Example1Component} from "../example1/example1.component";
import {CakesComponent} from "../cakes/cakes.component";
import {SweetsComponent} from "../sweets/sweets.component";
import {DirectiviesModule} from "../../directivies/directivies.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {Example2Component} from "../example2/example2.component";

@NgModule({
    declarations: [
        MainComponentComponent,
        Example1Component,
        CakesComponent,
        SweetsComponent,
        Example2Component
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: MainComponentComponent,
            },
        ]),
        DirectiviesModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
    ],
})
export class MainComponentModule {
}
