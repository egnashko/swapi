import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharecterInfoComponent } from './charecter-info.component';

describe('CharecterInfoComponent', () => {
  let component: CharecterInfoComponent;
  let fixture: ComponentFixture<CharecterInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharecterInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharecterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
