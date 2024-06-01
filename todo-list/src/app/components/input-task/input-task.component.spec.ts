import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTaskComponent } from './input-task.component';

describe('InputTaskComponent', () => {
  let component: InputTaskComponent;
  let fixture: ComponentFixture<InputTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
