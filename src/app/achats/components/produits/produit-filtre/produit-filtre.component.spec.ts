import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitFiltreComponent } from './produit-filtre.component';

describe('ProduitFiltreComponent', () => {
  let component: ProduitFiltreComponent;
  let fixture: ComponentFixture<ProduitFiltreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitFiltreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitFiltreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
