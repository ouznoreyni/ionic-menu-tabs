import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'first',
        loadChildren: () => import('../first-with-tabs/first-with-tabs.module').then( m => m.FirstWithTabsPageModule)
      },
      {
        path: 'second',
        loadChildren: () => import('../second/second.module').then( m => m.SecondPageModule)
      },
      {
        path: 'second/details',
        loadChildren: () => import('../details/details.module').then( m => m.DetailsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
