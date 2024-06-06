import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { KeyProblemsComponent } from './key-problems/key-problems.component';
import { KeyMetricsComponent } from './key-metrics/key-metrics.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ProblemTargetComponent } from './problem-target/problem-target.component';
import { CtaComponent } from './cta/cta.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    KeyProblemsComponent,
    KeyMetricsComponent,
    ReviewsComponent,
    ProblemTargetComponent,
    CtaComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
