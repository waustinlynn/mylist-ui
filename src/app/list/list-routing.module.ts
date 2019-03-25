import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListHomeComponent } from '../list-home/list-home.component';;


const routes: Routes = [
    {
        path: '',
        component: ListHomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListRoutingModule { }