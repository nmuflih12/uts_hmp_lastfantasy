import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BacacerbungPage } from './bacacerbung.page';

describe('BacacerbungPage', () => {
  let component: BacacerbungPage;
  let fixture: ComponentFixture<BacacerbungPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BacacerbungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
