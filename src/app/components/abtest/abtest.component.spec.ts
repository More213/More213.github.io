import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABTestComponent } from './abtest.component';

describe('ABTestComponent', () => {
  let component: ABTestComponent;
  let fixture: ComponentFixture<ABTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ABTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ABTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
