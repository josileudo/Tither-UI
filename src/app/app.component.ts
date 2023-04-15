import { Component } from '@angular/core';
import {NgIconComponent, provideIcons} from "@ng-icons/core";
import {HeaderComponent} from "./components/header";
import {CardComponent} from "./components/card";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgIconComponent, HeaderComponent, CardComponent,],
  // viewProviders: [provideIcons({ featherAirplay, heroUsers })]
})
export class AppComponent {}
