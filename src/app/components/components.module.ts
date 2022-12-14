import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule],
  declarations: [FooterComponent, NavbarComponent, SidebarComponent],
  exports: [FooterComponent, NavbarComponent, SidebarComponent],
})
export class ComponentsModule {}
