import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaAtributeBindingComponent } from './aula-atribute-binding.component';

describe('AulaAtributeBindingComponent', () => {
  let component: AulaAtributeBindingComponent;
  let fixture: ComponentFixture<AulaAtributeBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AulaAtributeBindingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AulaAtributeBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
