import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RideOrShareComponent } from './ride-or-share.component';

describe('RideOrShareComponent', () => {
  let component: RideOrShareComponent;
  let fixture: ComponentFixture<RideOrShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideOrShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideOrShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
