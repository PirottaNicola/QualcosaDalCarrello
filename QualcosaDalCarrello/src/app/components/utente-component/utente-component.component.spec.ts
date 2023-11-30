import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtenteComponentComponent } from './utente-component.component';

describe('UtenteComponentComponent', () => {
  let component: UtenteComponentComponent;
  let fixture: ComponentFixture<UtenteComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtenteComponentComponent]
    });
    fixture = TestBed.createComponent(UtenteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
