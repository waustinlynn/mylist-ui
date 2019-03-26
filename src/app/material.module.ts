import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
    declarations: [],
    imports: [
        MatListModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule
    ],
    exports: [
        MatListModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule
    ],
    providers: [],
    bootstrap: []
})
export class MaterialModule { }
