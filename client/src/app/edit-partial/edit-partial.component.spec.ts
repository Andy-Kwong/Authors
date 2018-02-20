import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPartialComponent } from './edit-partial.component';

describe('EditPartialComponent', () => {
  let component: EditPartialComponent;
  let fixture: ComponentFixture<EditPartialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPartialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
