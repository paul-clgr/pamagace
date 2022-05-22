import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisuMaisonComponent } from './visu-maison.component';

describe('VisuMaisonComponent', () => {
  let component: VisuMaisonComponent;
  let fixture: ComponentFixture<VisuMaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisuMaisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisuMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
