import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinAddComponent } from './coin-add.component';

describe('CoinAddComponent', () => {
  let component: CoinAddComponent;
  let fixture: ComponentFixture<CoinAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
