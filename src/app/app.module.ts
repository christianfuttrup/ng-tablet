import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DarkwebComponent } from './apps/darkweb/darkweb.component';
import { RacingComponent } from './apps/racing/racing.component';
import { HeaderComponent } from './shared/header/header.component';

// UI Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
@NgModule({
	declarations: [
		AppComponent,
		DarkwebComponent,
		RacingComponent,
		HeaderComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatIconModule,
		MatTableModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
