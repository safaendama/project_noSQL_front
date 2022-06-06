import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { TopcityComponent } from "../../pages/topcity/topcity.component";
import { TopgbComponent } from "../../pages/topgb/topgb.component";
import { MapsComponent } from "../../pages/maps/maps.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "maps", component: MapsComponent },
  { path: "topcity", component: TopcityComponent },
  { path: "topgb", component: TopgbComponent },
];
