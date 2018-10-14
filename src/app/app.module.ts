import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatTabsModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { LoginComponent } from './login/login.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [ // ruta + componente
  {
    path: '',//si no pone nada es la ruta principal
    component: LoginComponent
  },
  {
    path: 'takeOrder',
    component: MenuComponent
  },
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'pending-orders',
    component: PendingOrdersComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OptionMenuComponent,
    OrdersComponent,
    PendingOrdersComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent
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
    AngularFireStorageModule ,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
