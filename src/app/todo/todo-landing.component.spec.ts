import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoLandingComponent } from './todo-landing.component';

describe('TodoLandingComponent', () => {
  let component: TodoLandingComponent;
  let fixture: ComponentFixture<TodoLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
