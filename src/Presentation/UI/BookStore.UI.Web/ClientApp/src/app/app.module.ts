import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DialogService } from './helpers/dialog.service';
import { DialogComponent } from './components/dialog/dialog.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpInterceptor } from './helpers/custom-http-interceptor';
import { BooksComponent } from './pages/books/books.component';
import { SearchComponent } from './pages/search/search.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { BookService } from './services/book.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent, DialogComponent, BooksComponent, SearchComponent, MenuComponent, NavMenuComponent, 
    CardComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,   
    BrowserAnimationsModule,
    MatDialogModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, 
    MatButtonModule, MatSnackBarModule, MatToolbarModule, MatGridListModule, MatTabsModule, LayoutModule, MatSidenavModule, MatListModule, MatMenuModule
  ],
  providers: [ 
    DialogService,
    BookService,
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
