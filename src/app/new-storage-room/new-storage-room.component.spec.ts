import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStorageRoomComponent } from './new-storage-room.component';

describe('NewStorageRoomComponent', () => {
  let component: NewStorageRoomComponent;
  let fixture: ComponentFixture<NewStorageRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewStorageRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStorageRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
