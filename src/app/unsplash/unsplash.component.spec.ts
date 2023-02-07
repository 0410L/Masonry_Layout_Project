import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsplashComponent } from './unsplash.component';

describe('UnsplashComponent', () => {
  let component: UnsplashComponent;
  let fixture: ComponentFixture<UnsplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsplashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnsplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
