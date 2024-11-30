import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatricezComponent } from './matricez.component';

describe('MatricezComponent', () => {
  let component: MatricezComponent;
  let fixture: ComponentFixture<MatricezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatricezComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatricezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
