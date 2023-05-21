import { TestBed } from '@angular/core/testing';

import { Store } from '@ngrx/store';
import { PrimeNGConfig } from 'primeng/api';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent, Store],
      providers: [{ provide: PrimeNGConfig }, { provide: Store }]
    }).compileComponents();
  });

  it('Should be return component as defined', () => {
    expect(component).toBeDefined();
  });
});
