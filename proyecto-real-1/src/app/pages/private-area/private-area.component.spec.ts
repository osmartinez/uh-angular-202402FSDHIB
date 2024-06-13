import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateAreaComponent } from './private-area.component';

describe('PrivateAreaComponent', () => {
  let component: PrivateAreaComponent;
  let fixture: ComponentFixture<PrivateAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivateAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
