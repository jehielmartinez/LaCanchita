import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComplexScreenComponent } from './new-complex-screen.component';

describe('NewComplexScreenComponent', () => {
  let component: NewComplexScreenComponent;
  let fixture: ComponentFixture<NewComplexScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewComplexScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComplexScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
