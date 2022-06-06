import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { TopcityComponent } from "../../pages/topcity/topcity.component";
import { TopgbComponent } from "../../pages/topgb/topgb.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import * as PlotlyJS from "plotly.js/dist/plotly.js";
import { PlotlyModule } from "angular-plotly.js";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

PlotlyModule.plotlyjs = PlotlyJS;
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    PlotlyModule,
  ],
  declarations: [
    DashboardComponent,
    TopcityComponent,
    TopgbComponent,
    MapsComponent,
  ],
})
export class AdminLayoutModule {}
