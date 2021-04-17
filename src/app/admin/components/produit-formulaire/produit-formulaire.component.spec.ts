import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitFormulaireComponent } from './produit-formulaire.component';

describe('ProduitFormulaireComponent', () => {
  let component: ProduitFormulaireComponent;
  let fixture: ComponentFixture<ProduitFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitFormulaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
