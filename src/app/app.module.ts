import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from '../environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppEffects} from './app.effects';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CloudComponent } from './components/cloud/cloud.component';
import { SketchComponent } from './components/sketch/sketch.component';
import { ExperimentsComponent } from './components/experiments/experiments.component';
import { SecurityComponent } from './components/security/security.component';
import { OwnershipComponent } from './components/ownership/ownership.component';
import { ABTestComponent } from './components/abtest/abtest.component';
import { ColorsComponent } from './components/colors/colors.component';
import { OverviewTableComponent } from './components/overview/overview-table/overview-table.component';
import { OverviewFormComponent } from './components/overview/overview-form/overview-form.component';
import { PaginationComponent } from './components/overview/pagination/pagination.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalFormComponent } from './components/overview/modal-form/modal-form.component';
// import {PhoneMaskDirective} from './utills/MaskUtill';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    OverviewComponent,
    CloudComponent,
    SketchComponent,
    ExperimentsComponent,
    SecurityComponent,
    OwnershipComponent,
    ABTestComponent,
    ColorsComponent,
    OverviewTableComponent,
    OverviewFormComponent,
    PaginationComponent,
    ModalFormComponent,
    // PhoneMaskDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot( {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
