import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './navigations/header/header.component';
import { FooterComponent } from './navigations/footer/footer.component';
import { SidenavComponent } from './navigations/sidenav/sidenav.component';
import { MaterialModule } from './modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PagesComponent } from './pages/pages.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactFormBComponent } from './forms/contact-form-b/contact-form-b.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; // Add this import for Firebase Storage
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'; // Add this import for Firebase Database
import { environment } from 'src/environments/environment.development';
import { FormSubmitSuccessfullyComponent } from './dialogs/form-submit-successfully/form-submit-successfully.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		SidenavComponent,
		PagesComponent,
		ContactFormBComponent,
  FormSubmitSuccessfullyComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		ReactiveFormsModule,
		FormsModule,
		HttpClientModule,
		NgbModule,
		NgbCarouselModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFireStorageModule,
		AngularFireDatabaseModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
