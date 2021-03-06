import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegisterComponent } from './Component/login-register/login-register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { HomeComponent } from './Component/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { GetBooksComponent } from './Component/get-books/get-books.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatStepperModule} from '@angular/material/stepper';
import { WishListComponent } from './Component/wish-list/wish-list.component';
import { BookComponent } from './Component/book/book.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileComponent } from './Component/user-profile/user-profile.component';
import {MatRadioModule} from '@angular/material/radio';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatBadgeModule} from '@angular/material/badge';
import { MyCartComponent } from './Component/my-cart/my-cart.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import { OrderSuccessfullComponent } from './Component/order-successfull/order-successfull.component';
import { MyOrderComponent } from './Component/my-order/my-order.component';
import { AdminDashboardComponent } from './Component/admin-dashboard/admin-dashboard.component';
import { EditBookComponent } from './Component/edit-book/edit-book.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteNoteComponent } from './Component/delete-note/delete-note.component';
import { AddBookComponent } from './Component/add-book/add-book.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    HomeComponent,
    GetBooksComponent,
    WishListComponent,
    BookComponent,
    UserProfileComponent,
    MyCartComponent,
    OrderSuccessfullComponent,
    MyOrderComponent,
    AdminDashboardComponent,
    EditBookComponent,
    DeleteNoteComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatStepperModule,
    NgbModule,
    MatRadioModule,
    NgxPaginationModule,
    MatExpansionModule,
    MatBadgeModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
