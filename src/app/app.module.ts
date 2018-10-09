import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatTabsModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { OptionMenuComponent } from './option-menu/option-menu.component';
import { OrdersComponent } from './orders/orders.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';

const appRoutes: Routes = [ // ruta + componente
  {
    path: '',//si no pone nada es la ruta principal
    component: MenuComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'pending-orders',
    component: PendingOrdersComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OptionMenuComponent,
    OrdersComponent,
    PendingOrdersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTabsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    RouterModule.forRoot(appRoutes),//ruta
    AngularFireAuthModule, 
    MatButtonModule,
    AngularFireStorageModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
