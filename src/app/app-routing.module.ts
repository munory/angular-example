import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

    {path: '', redirectTo: '/main', pathMatch: 'full'},

    {
      path: 'main',
      loadChildren: () => import('./components/main-component/main-component.module').then((m) => m.MainComponentModule),
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    declarations: [
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
