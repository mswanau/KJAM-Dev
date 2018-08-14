import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrelinkDashboardComponent } from './centrelink-dashboard.component';

describe('CentrelinkDashboardComponent', () => {
  let component: CentrelinkDashboardComponent;
  let fixture: ComponentFixture<CentrelinkDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrelinkDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrelinkDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
