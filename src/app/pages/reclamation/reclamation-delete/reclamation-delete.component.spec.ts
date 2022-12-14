import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationDeleteComponent } from './reclamation-delete.component';

describe('ReclamationListComponent', () => {
  let component: ReclamationDeleteComponent;
  let fixture: ComponentFixture<ReclamationDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclamationDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
