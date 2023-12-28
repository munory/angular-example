import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {MainComponentComponent} from "./main-component.component";

@NgModule({
    declarations: [
        MainComponentComponent
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
