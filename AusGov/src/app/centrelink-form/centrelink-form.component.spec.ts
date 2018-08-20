import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrelinkFormComponent } from './centrelink-form.component';

describe('CentrelinkFormComponent', () => {
  let component: CentrelinkFormComponent;
  let fixture: ComponentFixture<CentrelinkFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrelinkFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrelinkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
