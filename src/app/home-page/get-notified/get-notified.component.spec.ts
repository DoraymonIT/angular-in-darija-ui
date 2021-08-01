import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNotifiedComponent } from './get-notified.component';

describe('GetNotifiedComponent', () => {
  let component: GetNotifiedComponent;
  let fixture: ComponentFixture<GetNotifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetNotifiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetNotifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
