import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonlistpageComponent } from './pokemonlistpage.component';

describe('PokemonlistpageComponent', () => {
  let component: PokemonlistpageComponent;
  let fixture: ComponentFixture<PokemonlistpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonlistpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonlistpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
