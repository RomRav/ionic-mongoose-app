import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormPagePage } from './login-form-page.page';

describe('LoginFormPagePage', () => {
  let component: LoginFormPagePage;
  let fixture: ComponentFixture<LoginFormPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
