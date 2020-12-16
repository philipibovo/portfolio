import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateNotFoundComponent } from './template-not-found.component';

describe('TemplateNotFoundComponent', () => {
  let component: TemplateNotFoundComponent;
  let fixture: ComponentFixture<TemplateNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
