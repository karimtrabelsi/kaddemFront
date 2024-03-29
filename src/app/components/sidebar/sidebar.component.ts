import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: "ni-tv-2 text-primary",
    class: "",
  },
  {
    path: "/users",
    title: "Users",
    icon: "ni-single-02 text-yellow",
    class: "",
  },
  {
    path: "/contracts",
    title: "Contracts",
    icon: "ni-bullet-list-67 text-red",
    class: "",
  },
  {
    path: "/reclamations",
    title: "Reclamations",
    icon: "ni-key-25 text-info",
    class: "",
  },
  {
    path: "/universities",
    title: "Universities",
    icon: "ni-circle-08 text-pink",
    class: "",
  },
  {
    path: "/departments",
    title: "Departments",
    icon: "ni-circle-08 text-pink",
    class: "",
  },
  {
    path: "/courses",
    title: "Courses",
    icon: "ni-circle-08 text-pink",
    class: "",
  },
  {
    path: "/trainings",
    title: "Trainings",
    icon: "ni-circle-08 text-pink",
    class: "",
  },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    console.log(this.menuItems);

    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
