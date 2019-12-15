import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { MeetTheTeamComponent } from './meet-the-team/meet-the-team.component';
import { TheVenueComponent } from './the-venue/the-venue.component';
import { RsvpComponent } from './rsvp/rsvp.component';

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "nav-menu", component: NavMenuComponent },
    { path: "our-story", component: OurStoryComponent },
    { path: "event-details", component: EventDetailsComponent },
    { path: "meet-the-team", component: MeetTheTeamComponent },
    { path: "the-venue", component: TheVenueComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    OurStoryComponent,
    EventDetailsComponent,
    MeetTheTeamComponent,
    TheVenueComponent,
    RsvpComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
      FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent, },
      { path: 'our-story', component: OurStoryComponent },
        { path: 'event-details', component: EventDetailsComponent },
        { path: 'meet-the-team', component: MeetTheTeamComponent },
        { path: 'the-venue', component: TheVenueComponent },
        { path: 'rsvp', component: RsvpComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
