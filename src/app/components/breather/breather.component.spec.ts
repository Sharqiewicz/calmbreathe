import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreatherComponent } from './breather.component';

describe('BreatherComponent', () => {
  let component: BreatherComponent;
  let fixture: ComponentFixture<BreatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
