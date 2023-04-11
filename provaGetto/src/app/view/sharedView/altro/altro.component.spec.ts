import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltroComponent } from './altro.component';

describe('AltroComponent', () => {
  let component: AltroComponent;
  let fixture: ComponentFixture<AltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
