import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottoRigaComponent } from './prodotto-riga.component';

describe('ProdottoRigaComponent', () => {
  let component: ProdottoRigaComponent;
  let fixture: ComponentFixture<ProdottoRigaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdottoRigaComponent]
    });
    fixture = TestBed.createComponent(ProdottoRigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
