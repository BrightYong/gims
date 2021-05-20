import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageListAmountComponent } from './image-list-amount.component';

describe('ImageListAmountComponent', () => {
  let component: ImageListAmountComponent;
  let fixture: ComponentFixture<ImageListAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageListAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageListAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
