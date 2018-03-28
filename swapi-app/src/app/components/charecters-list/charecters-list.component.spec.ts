import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharectersListComponent } from './charecters-list.component';

describe('CharectersListComponent', () => {
  let component: CharectersListComponent;
  let fixture: ComponentFixture<CharectersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharectersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharectersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
