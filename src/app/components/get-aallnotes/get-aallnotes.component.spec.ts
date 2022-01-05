import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAallnotesComponent } from './get-aallnotes.component';

describe('GetAallnotesComponent', () => {
  let component: GetAallnotesComponent;
  let fixture: ComponentFixture<GetAallnotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAallnotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAallnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
