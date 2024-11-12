import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvehicalsComponent } from './viewvehicals.component';

describe('ViewvehicalsComponent', () => {
  let component: ViewvehicalsComponent;
  let fixture: ComponentFixture<ViewvehicalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewvehicalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewvehicalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
