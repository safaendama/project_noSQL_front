import { Component, OnInit } from "@angular/core";

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Brands",
    icon: "nc-chart-bar-32",
    class: "",
  },
  { path: "/maps", title: "State", icon: "nc-chart-pie-36", class: "" },
  { path: "/topcity", title: "Top City", icon: "nc-world-2", class: "" },
  { path: "/topgb", title: "Top GB", icon: "nc-mobile", class: "" },
];

@Component({
  moduleId: module.id,
  selector: "sidebar-cmp",
  templateUrl: "sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
}
