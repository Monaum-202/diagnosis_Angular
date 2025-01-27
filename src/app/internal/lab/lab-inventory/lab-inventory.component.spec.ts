import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabInventoryComponent } from './lab-inventory.component';

describe('LabInventoryComponent', () => {
  let component: LabInventoryComponent;
  let fixture: ComponentFixture<LabInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
