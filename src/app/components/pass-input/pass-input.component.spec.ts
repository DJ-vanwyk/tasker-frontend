import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassInputComponent } from './pass-input.component';

describe('PassInputComponent', () => {
  let component: PassInputComponent;
  let fixture: ComponentFixture<PassInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
