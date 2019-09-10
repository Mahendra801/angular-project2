import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerologinComponent } from './herologin.component';

describe('HerologinComponent', () => {
  let component: HerologinComponent;
  let fixture: ComponentFixture<HerologinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerologinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
