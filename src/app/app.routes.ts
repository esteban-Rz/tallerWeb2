import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CatalogoSuperHeroes } from './pages/catalogo-super-heroes/catalogo-super-heroes';
import { Contacto } from './pages/contacto/contacto';
import { Nosotros } from './pages/nosotros/nosotros';
import { loginGuard } from './guards/login-guard';
import { Login } from './pages/login/login';
import { Productos } from './components/productos/productos';
import { Inventario } from './components/inventario/inventario';
import { CarritoCompra } from './components/carrito-compra/carrito-compra';
import { productGuardGuard } from './guards/product.guard-guard';

export const routes: Routes = [
    {path:"home",component:Home},
    {path:"catalogoS",component: CatalogoSuperHeroes, canActivate: [loginGuard]},
    {path:"contacto",component: Contacto},
    {path:"nosotros",component: Nosotros},
    {path:"carritoCompra",component: CarritoCompra ,canActivate: [loginGuard]},
    {path:"producto/carritoCompra",component: CarritoCompra ,canActivate: [loginGuard]},
    {path:"login",component: Login},
    {path:"producto",component: Productos, canActivate: [loginGuard]},
    {path:"inventario",component: Inventario,canMatch: [productGuardGuard]},

];
