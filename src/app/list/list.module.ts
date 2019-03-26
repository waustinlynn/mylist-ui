import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromList from '../reducers/list.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ListEffects } from '../effects/list.effects';
import { ListHomeComponent } from '../list-home/list-home.component';
import { ListRoutingModule } from './list-routing.module';
import { ListService } from '../list.service';

@NgModule({
  declarations: [ListHomeComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    StoreModule.forFeature('list', fromList.reducer),
    EffectsModule.forFeature([ListEffects])
  ],
  exports: [ListHomeComponent],
  providers: [ListService]
})
export class ListModule { }
