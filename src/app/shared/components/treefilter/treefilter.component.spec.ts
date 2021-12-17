import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreefilterComponent } from './treefilter.component';

describe('TreefilterComponent', () => {
  let component: TreefilterComponent;
  let fixture: ComponentFixture<TreefilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreefilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
