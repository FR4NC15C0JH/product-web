import { ClienteNewComponent } from "./components/cliente-new/cliente-new.component";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { ClienteListComponent } from "./components/cliente-list/cliente-list.component";


export const ROUTES: Routes = [
    { path: 'cliente-new' , component : ClienteNewComponent },
    { path: 'cliente-list' , component : ClienteListComponent }
]    


export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);