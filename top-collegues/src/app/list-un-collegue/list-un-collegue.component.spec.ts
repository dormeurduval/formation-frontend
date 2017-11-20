import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { ListUnCollegueComponent } from './list-un-collegue.component';

describe('ListUnCollegueComponent', () => {
  let component: ListUnCollegueComponent;
  let fixture: ComponentFixture<ListUnCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUnCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUnCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
