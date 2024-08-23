import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgfooterComponent } from './imgfooter.component';

describe('ImgfooterComponent', () => {
  let component: ImgfooterComponent;
  let fixture: ComponentFixture<ImgfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgfooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
