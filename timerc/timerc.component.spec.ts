import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimercComponent } from './timerc.component';

describe('TimercComponent', () => {
  let component: TimercComponent;
  let fixture: ComponentFixture<TimercComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimercComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimercComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
