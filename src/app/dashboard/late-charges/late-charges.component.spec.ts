import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LateChargesComponent } from './late-charges.component';

describe('LateChargesComponent', () => {
  let component: LateChargesComponent;
  let fixture: ComponentFixture<LateChargesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LateChargesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LateChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
