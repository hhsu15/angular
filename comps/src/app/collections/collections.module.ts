import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TableComponent } from './table/table.component';
import { ElementsModule } from '../elements/elements.module';
import { SharedModule } from '../shared/shared.module';
import { BiographComponent } from './biograph/biograph.component';
import { CompanyComponent } from './company/company.component';
import { PartnersComponent } from './partners/partners.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [CollectionsHomeComponent, TableComponent, BiographComponent, CompanyComponent, PartnersComponent, TabsComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule,
    ElementsModule
  ],
  exports: []
})
export class CollectionsModule {}
