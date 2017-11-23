import { BookStoreService } from './shared/book-store.service';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import localeDe from '@angular/common/locales/de';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { ButtonComponent } from './button/button.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { CreateBookTdfComponent } from './create-book-tdf/create-book-tdf.component';
import { CreateBookRfComponent } from './create-book-rf/create-book-rf.component';
import { RxjsPlaygroundComponent } from './rxjs-playground/rxjs-playground.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookComponent,
    ButtonComponent,
    CreateBookComponent,
    CreateBookTdfComponent,
    CreateBookRfComponent,
    RxjsPlaygroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BookStoreService,
    { provide: LOCALE_ID, useValue: 'de' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeDe);
  }
}
