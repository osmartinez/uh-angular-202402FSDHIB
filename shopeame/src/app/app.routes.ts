import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "productos",
        component: ProductsComponent,
    },
    {
        path: "gestion/:id",
        component: AdminComponent
    }
];
