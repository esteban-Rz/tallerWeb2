import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CatalogoSuperHeroes } from './pages/catalogo-super-heroes/catalogo-super-heroes';
import { Contacto } from './pages/contacto/contacto';
import { Nosotros } from './pages/nosotros/nosotros';

export const routes: Routes = [
    {path:"home",component:Home},
    {path:"catalogoS",component: CatalogoSuperHeroes},
    {path:"contacto",component: Contacto},
    {path:"nosotros",component: Nosotros},
];
