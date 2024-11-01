import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lista02Component } from './lista02.component';

describe('Lista02Component', () => {
  let component: Lista02Component;
  let fixture: ComponentFixture<Lista02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lista02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lista02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
