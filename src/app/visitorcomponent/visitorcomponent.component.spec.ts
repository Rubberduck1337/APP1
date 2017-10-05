import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorcomponentComponent } from './visitorcomponent.component';

describe('VisitorcomponentComponent', () => {
  let component: VisitorcomponentComponent;
  let fixture: ComponentFixture<VisitorcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
