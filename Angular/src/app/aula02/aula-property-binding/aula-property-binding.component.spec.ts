import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaPropertyBindingComponent } from './aula-property-binding.component';

describe('AulaPropertyBindingComponent', () => {
  let component: AulaPropertyBindingComponent;
  let fixture: ComponentFixture<AulaPropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AulaPropertyBindingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AulaPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
