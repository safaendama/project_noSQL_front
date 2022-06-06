import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../api.service";

declare var google: any;

@Component({
  moduleId: module.id,
  selector: "maps-cmp",
  templateUrl: "maps.component.html",
  providers: [ApiService],
})
export class MapsComponent implements OnInit {
  pubsgraph1: any;
  pubsgraph2: any;
  pubs1: any;
  pubs2: any;
  constructor(private api: ApiService) {
    this.Pubs();
  }
  ngOnInit() {}

  Pubs = () => {
    this.api.Pubs().subscribe(
      (data) => {
        this.pubs1 = data.values1;
        this.pubs2 = data.values2;
        console.log(this.pubs1);
        this.setPubs();
        this.setPubs2();
      },
      (error) => {
        console.log(error);
      }
    );
  };

  setPubs = () => {
    this.pubsgraph1 = {
      data: [
        {
          values: this.pubs1,
          labels: ["Bon état", "Neuf"],
          type: "pie",
        },
      ],
      layout: {
        height: 400,
        width: 500,
      },
    };
  };

  setPubs2 = () => {
    this.pubsgraph2 = {
      data: [
        {
          values: this.pubs2,
          labels: ["Bon état", "Neuf"],
          type: "pie",
        },
      ],
      layout: {
        height: 400,
        width: 500,
      },
    };
  };
}
