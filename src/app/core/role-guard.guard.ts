import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { StorageService } from "app/services/storage.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RoleGuardGuard implements CanActivate {
  constructor(private service: StorageService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isAuthorized(route);
  }

  private isAuthorized(route: ActivatedRouteSnapshot): boolean {
    const roles = this.service.getUser().roles;
    //this.roles = this.storageService.getUser().roles;
    console.log(roles);

    const expectedRoles = route.data.expectedRoles;
    const roleMatches = roles.findIndex(
      (role) => expectedRoles.indexOf(role) !== -1
    );
    return roleMatches < 0 ? false : true;
  }
}
