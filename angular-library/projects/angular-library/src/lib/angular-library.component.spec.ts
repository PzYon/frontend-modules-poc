import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLibraryComponent } from './angular-library.component';

describe('AngularLibraryComponent', () => {
  let component: AngularLibraryComponent;
  let fixture: ComponentFixture<AngularLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
