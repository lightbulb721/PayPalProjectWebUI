import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRowComponent } from './service-row.component';

describe('ServiceRowComponent', () => {
  let component: ServiceRowComponent;
  let fixture: ComponentFixture<ServiceRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
