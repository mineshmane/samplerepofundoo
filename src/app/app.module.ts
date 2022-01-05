import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule, MatListModule, MatToolbarModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TakeNoteComponent } from './components/take-note/take-note.component';
import { GetAallnotesComponent } from './components/get-aallnotes/get-aallnotes.component';
import { DisaplaynotesComponent } from './components/disaplaynotes/disaplaynotes.component';
import { IconsComponent } from './components/icons/icons.component';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ResetPasswordComponent,
    DashboardComponent,
    TakeNoteComponent,
    GetAallnotesComponent,
    DisaplaynotesComponent,
    IconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,MatSidenavModule,MatToolbarModule,MatListModule,
    BrowserAnimationsModule,MatFormFieldModule,MatIconModule,MatInputModule,FlexLayoutModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
