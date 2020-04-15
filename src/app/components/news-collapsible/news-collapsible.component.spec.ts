import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCollapsibleComponent } from './news-collapsible.component';

describe('NewsCollapsibleComponent', () => {
  let component: NewsCollapsibleComponent;
  let fixture: ComponentFixture<NewsCollapsibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsCollapsibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCollapsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
