import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommandesDetailsComponent } from './admin-commandes-details.component';

describe('AdminCommandesDetailsComponent', () => {
  let component: AdminCommandesDetailsComponent;
  let fixture: ComponentFixture<AdminCommandesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCommandesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCommandesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
