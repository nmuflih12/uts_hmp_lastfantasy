import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuatcerbungPage } from './buatcerbung.page';

describe('BuatcerbungPage', () => {
  let component: BuatcerbungPage;
  let fixture: ComponentFixture<BuatcerbungPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BuatcerbungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
