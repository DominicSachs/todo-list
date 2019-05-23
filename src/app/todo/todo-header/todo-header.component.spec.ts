import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { TodoHeaderComponent } from './todo-header.component';

describe('TodoHeaderComponent', () => {
  let component: TodoHeaderComponent;
  let fixture: ComponentFixture<TodoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MaterialModule],
      declarations: [ TodoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('editTitle changes edit mode', () => {
    component.isEditMode = false;

    component.editTitle();

    expect(component.isEditMode).toBeTruthy();
  });

  it('emits delete list', () => {
    spyOn(component.deleteList, 'emit');

    component.delete();

    expect(component.deleteList.emit).toHaveBeenCalled();
  });

  it('close set isEditMode to false and emits name changed', () => {
    spyOn(component.nameChanged, 'emit');
    component.isEditMode = true;

    component.close();

    expect(component.nameChanged.emit).toHaveBeenCalled();
    expect(component.isEditMode).toBeFalsy();
  });
});
