import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MappingComponent } from './mapping/mapping.component';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HeaderComponent } from './header/header.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { StarRatingModule } from 'angular-star-rating';
import { RestServiceService } from './rest-service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookingComponent } from './booking/booking.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';

export function hotelService(provider: RestServiceService) {
  return () => provider.load();
}

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    MappingComponent,
    HeaderComponent,
    BookingComponent,
    RoomDetailComponent,

  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatAutocompleteModule,
    MatListModule,
    NgbModule,
    FormsModule,
    DialogModule,
    ReactiveFormsModule,
    StarRatingModule.forRoot(),
    LeafletModule.forRoot(),
  ],
  providers: [
    RestServiceService,
    { provide: APP_INITIALIZER, useFactory: hotelService, deps: [RestServiceService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

