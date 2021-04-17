import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantiteProduitComponent } from './quantite-produit.component';

describe('QuantitePeoduitComponent', () => {
  let component: QuantiteProduitComponent;
  let fixture: ComponentFixture<QuantiteProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantiteProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantiteProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
