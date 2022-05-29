import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreiteriaListComponent } from './creiteria-list.component';

describe('CreiteriaListComponent', () => {
  let component: CreiteriaListComponent;
  let fixture: ComponentFixture<CreiteriaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreiteriaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreiteriaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
