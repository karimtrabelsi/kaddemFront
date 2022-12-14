import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
<<<<<<< HEAD
import { AuthGuardGuard } from "./core/auth-guard.guard";

const routes: Routes = [
  {
=======

const routes: Routes = [
  {
    
>>>>>>> remotes/origin/MalekIntegration
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "",
<<<<<<< HEAD
=======
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("app/layouts/admin-layout/admin-layout.module").then(
            (m) => m.AdminLayoutModule
          ),
      },
    ],
  },
  {
    path: "",
>>>>>>> remotes/origin/MalekIntegration
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("app/layouts/auth-layout/auth-layout.module").then(
            (m) => m.AuthLayoutModule
          ),
      },
    ],
  },
<<<<<<< HEAD
  {
    path: "",
    component: AdminLayoutComponent,
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: "",
        loadChildren: () =>
          import("app/layouts/admin-layout/admin-layout.module").then(
            (m) => m.AdminLayoutModule
          ),
      },
    ],
  },

  {
    path: "**",
    redirectTo: "dashboard",
  },
=======
  
  {path: 'universite', loadChildren: () => import('./pages/universite/universite.module').then(m => m.UniversiteModule  ),
},
{ path: 'department', loadChildren: () => import('./pages/department/department.module').then(m => m.DepartmentModule) },
{
  path: "**",
  redirectTo: "dashboard",
},
>>>>>>> remotes/origin/MalekIntegration
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
