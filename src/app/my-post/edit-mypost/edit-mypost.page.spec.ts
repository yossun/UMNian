import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMypostPage } from './edit-mypost.page';

describe('EditMypostPage', () => {
  let component: EditMypostPage;
  let fixture: ComponentFixture<EditMypostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMypostPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMypostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
