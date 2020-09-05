import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RainbowcomponentComponent } from './rainbowcomponent.component';

describe('RainbowcomponentComponent', () => {
  let component: RainbowcomponentComponent;
  let fixture: ComponentFixture<RainbowcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainbowcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainbowcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
