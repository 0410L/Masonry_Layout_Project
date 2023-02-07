import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuraLComponent } from './mural.component';

describe('MuraLComponent', () => {
  let component: MuraLComponent;
  let fixture: ComponentFixture<MuraLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuraLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuraLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
