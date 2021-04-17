import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireLivraisonComponent } from './formulaire-livraison.component';

describe('FormulaireLivraisonComponent', () => {
  let component: FormulaireLivraisonComponent;
  let fixture: ComponentFixture<FormulaireLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireLivraisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
