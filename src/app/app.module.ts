import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {HttpClientModule} from "@angular/common/http";
import {NzFormModule} from "ng-zorro-antd/form";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "@env/environment";
import {AppRoutingModule} from "./app-routing.module";
import {NzMessageModule} from "ng-zorro-antd/message";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        NzButtonModule,
        NzIconModule,
        HttpClientModule,
        NzFormModule,
        ReactiveFormsModule,
        FormsModule,
        ReactiveFormsModule,
        NzInputModule,
        BrowserAnimationsModule,
        NzCardModule,
        NzTableModule,
        NzDividerModule,
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
        HttpClientModule,
        NzMessageModule
    ],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
