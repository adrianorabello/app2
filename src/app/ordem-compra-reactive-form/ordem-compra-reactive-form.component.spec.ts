import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemCompraReactiveFormComponent } from './ordem-compra-reactive-form.component';

describe('OrdemCompraReactiveFormComponent', () => {
  let component: OrdemCompraReactiveFormComponent;
  let fixture: ComponentFixture<OrdemCompraReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdemCompraReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemCompraReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
