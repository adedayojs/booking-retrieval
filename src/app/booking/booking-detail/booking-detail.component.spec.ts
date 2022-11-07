import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { BOOKINGS_MOCK } from 'src/app/shared/mock/booking.mock';
import { BookingService } from 'src/app/shared/services/booking.service';

import { BookingDetailComponent } from './booking-detail.component';

describe('BookingDetailComponent', () => {
  let component: BookingDetailComponent;
  let fixture: ComponentFixture<BookingDetailComponent>;
  let BookingMockService = {
    booking: of(BOOKINGS_MOCK[0]),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingDetailComponent],
      providers: [
        {
          provide: BookingService,
          useValue: BookingMockService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingDetailComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('BookingDetailComponent', () => {
  let component: BookingDetailComponent;
  let fixture: ComponentFixture<BookingDetailComponent>;
  let BookingMockService = {
    booking: of(null),
  };
  let RouterMock = { navigateByUrl: () => {} };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingDetailComponent],
      providers: [
        {
          provide: BookingService,
          useValue: BookingMockService,
        },
        { provide: Router, useValue: RouterMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingDetailComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    spyOn(RouterMock, 'navigateByUrl');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate when there is no booking', () => {
    expect(RouterMock.navigateByUrl).toHaveBeenCalled();
  });
});
