import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoSuperHeroes } from './catalogo-super-heroes';

describe('CatalogoSuperHeroes', () => {
  let component: CatalogoSuperHeroes;
  let fixture: ComponentFixture<CatalogoSuperHeroes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoSuperHeroes],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogoSuperHeroes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
