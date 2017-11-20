import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTableauComponent } from './list-tableau.component';

describe('ListTableauComponent', () => {
  let component: ListTableauComponent;
  let fixture: ComponentFixture<ListTableauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
