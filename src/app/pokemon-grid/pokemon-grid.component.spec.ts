import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonGridComponent } from './pokemon-grid.component';

describe('PokemonGridComponent', () => {
  let component: PokemonGridComponent;
  let fixture: ComponentFixture<PokemonGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
