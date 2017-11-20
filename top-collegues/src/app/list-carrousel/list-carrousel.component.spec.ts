import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCarrouselComponent } from './list-carrousel.component';

describe('ListCarrouselComponent', () => {
  let component: ListCarrouselComponent;
  let fixture: ComponentFixture<ListCarrouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCarrouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
