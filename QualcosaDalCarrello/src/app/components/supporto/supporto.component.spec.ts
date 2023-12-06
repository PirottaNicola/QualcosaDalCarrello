import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportoComponent } from './supporto.component';

describe('SupportoComponent', () => {
  let component: SupportoComponent;
  let fixture: ComponentFixture<SupportoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupportoComponent]
    });
    fixture = TestBed.createComponent(SupportoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
