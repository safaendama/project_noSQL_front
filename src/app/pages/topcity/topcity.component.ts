import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../api.service";

@Component({
  selector: "app-topcity",
  templateUrl: "./topcity.component.html",
  providers: [ApiService],
})
export class TopcityComponent implements OnInit {
  constructor(private api: ApiService) {
    this.TopCity();
  }
  names: any;
  values: any;

  topcitychart: any;
  ngOnInit() {}

  TopCity = () => {
    this.api.TopCity().subscribe(
      (data) => {
        this.names = data.names;
        this.values = data.value;
        console.log(data);
        this.setTopCity();
      },
      (error) => {
        console.log(error);
      }
    );
  };

  setTopCity = () => {
    this.topcitychart = {
      data: [
        {
          values: this.values,
          labels: this.names,
          type: "pie",
          textinfo: "label",
          insidetextorientation: "radial",
        },
      ],
      layout: {
        height: 400,
        width: 500,
      },
    };
  };
}
