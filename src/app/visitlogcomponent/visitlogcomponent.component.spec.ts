import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitlogcomponentComponent } from './visitlogcomponent.component';

describe('VisitlogcomponentComponent', () => {
  let component: VisitlogcomponentComponent;
  let fixture: ComponentFixture<VisitlogcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitlogcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitlogcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
