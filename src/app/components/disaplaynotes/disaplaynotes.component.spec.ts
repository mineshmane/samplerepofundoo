import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisaplaynotesComponent } from './disaplaynotes.component';

describe('DisaplaynotesComponent', () => {
  let component: DisaplaynotesComponent;
  let fixture: ComponentFixture<DisaplaynotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisaplaynotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisaplaynotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
