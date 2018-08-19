import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiespageComponent } from './hobbiespage.component';

describe('HobbiespageComponent', () => {
  let component: HobbiespageComponent;
  let fixture: ComponentFixture<HobbiespageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbiespageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
