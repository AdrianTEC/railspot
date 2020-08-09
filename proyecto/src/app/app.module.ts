import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GrafoComponent } from './grafo/grafo.component';
import { AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AgmDirectionModule } from 'agm-direction';
import { AdminComponent } from './admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GrafoComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD7RqZCsIGc_9YLfIFhfb4lZWj_aVCNg7I'
    }),
    NoopAnimationsModule,
    AgmDirectionModule
    
    
  ],

  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
