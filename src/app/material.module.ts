import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
    declarations: [],
    imports: [
        MatListModule,
        MatMenuModule
    ],
    exports: [
        MatListModule,
        MatMenuModule
    ],
    providers: [],
    bootstrap: []
})
export class MaterialModule { }
