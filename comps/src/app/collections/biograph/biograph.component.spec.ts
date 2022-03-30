import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiographComponent } from './biograph.component';

describe('BiographComponent', () => {
  let component: BiographComponent;
  let fixture: ComponentFixture<BiographComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiographComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiographComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
