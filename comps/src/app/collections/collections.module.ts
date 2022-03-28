import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TableComponent } from './table/table.component';
import { ElementsModule } from '../elements/elements.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CollectionsHomeComponent, TableComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule,
    ElementsModule
  ],
  exports: []
})
export class CollectionsModule {}
