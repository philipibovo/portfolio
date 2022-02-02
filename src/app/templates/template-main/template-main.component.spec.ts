import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateMainComponent } from './template-main.component';

describe('TemplateMainComponent', () => {
  let component: TemplateMainComponent;
  let fixture: ComponentFixture<TemplateMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
