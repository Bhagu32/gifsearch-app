import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GipySearchComponent } from './gipy-search.component';

describe('GipySearchComponent', () => {
  let component: GipySearchComponent;
  let fixture: ComponentFixture<GipySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GipySearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GipySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
