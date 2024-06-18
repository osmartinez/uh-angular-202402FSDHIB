import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiComponente2Component } from './mi-componente-2.component';

describe('MiComponente2Component', () => {
  let component: MiComponente2Component;
  let fixture: ComponentFixture<MiComponente2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiComponente2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiComponente2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
