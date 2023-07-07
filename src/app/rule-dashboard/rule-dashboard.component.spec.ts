import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleDashboardComponent } from './rule-dashboard.component';

describe('RuleDashboardComponent', () => {
  let component: RuleDashboardComponent;
  let fixture: ComponentFixture<RuleDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});