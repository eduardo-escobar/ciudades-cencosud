import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadesTarjetaComponent } from './ciudades-tarjeta.component';

describe('CiudadesTarjetaComponent', () => {
  let component: CiudadesTarjetaComponent;
  let fixture: ComponentFixture<CiudadesTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiudadesTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadesTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
