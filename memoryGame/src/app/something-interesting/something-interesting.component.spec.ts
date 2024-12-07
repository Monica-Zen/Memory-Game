import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomethingInterestingComponent } from './something-interesting.component';

describe('SomethingInterestingComponent', () => {
  let component: SomethingInterestingComponent;
  let fixture: ComponentFixture<SomethingInterestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomethingInterestingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SomethingInterestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
