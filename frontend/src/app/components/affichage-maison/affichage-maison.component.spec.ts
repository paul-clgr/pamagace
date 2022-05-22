import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageMaisonComponent } from './affichage-maison.component';

describe('AffichageMaisonComponent', () => {
  let component: AffichageMaisonComponent;
  let fixture: ComponentFixture<AffichageMaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageMaisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
