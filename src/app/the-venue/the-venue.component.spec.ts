import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheVenueComponent } from './the-venue.component';

describe('TheVenueComponent', () => {
  let component: TheVenueComponent;
  let fixture: ComponentFixture<TheVenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheVenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
