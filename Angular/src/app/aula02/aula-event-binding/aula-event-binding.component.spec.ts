import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaEventBindingComponent } from './aula-event-binding.component';

describe('AulaEventBindingComponent', () => {
  let component: AulaEventBindingComponent;
  let fixture: ComponentFixture<AulaEventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AulaEventBindingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AulaEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
