import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentificationPage } from './authentification.page';

describe('AuthentificationPage', () => {
  let component: AuthentificationPage;
  let fixture: ComponentFixture<AuthentificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthentificationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthentificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
