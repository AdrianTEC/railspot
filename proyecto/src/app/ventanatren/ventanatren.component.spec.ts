import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanatrenComponent } from './ventanatren.component';

describe('VentanatrenComponent', () => {
  let component: VentanatrenComponent;
  let fixture: ComponentFixture<VentanatrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentanatrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanatrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
