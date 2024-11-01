import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lista01Component } from './lista01.component';

describe('Lista01Component', () => {
  let component: Lista01Component;
  let fixture: ComponentFixture<Lista01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lista01Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lista01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
