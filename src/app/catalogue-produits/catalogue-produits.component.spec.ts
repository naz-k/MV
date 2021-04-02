import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueProduitsComponent } from './catalogue-produits.component';

describe('CatalogueProduitsComponent', () => {
  let component: CatalogueProduitsComponent;
  let fixture: ComponentFixture<CatalogueProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogueProduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
