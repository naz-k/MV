import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeReussieComponent } from './commande-reussie.component';

describe('CommandeReussieComponent', () => {
  let component: CommandeReussieComponent;
  let fixture: ComponentFixture<CommandeReussieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeReussieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeReussieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
