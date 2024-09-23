import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineFrameComponent } from './machine-frame.component';

describe('MachineFrameComponent', () => {
  let component: MachineFrameComponent;
  let fixture: ComponentFixture<MachineFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
