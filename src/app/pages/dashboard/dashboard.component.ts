import { Component, OnInit } from "@angular/core";
import Chart from "chart.js";
import { ApiService } from "../../api.service";

@Component({
  selector: "dashboard-cmp",
  moduleId: module.id,
  templateUrl: "dashboard.component.html",
  providers: [ApiService],
})
export class DashboardComponent implements OnInit {
  public canvas: any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;

  storage: any;
  storagegraph: any;

  brandprice: any;
  brandpricegraph: any;

  constructor(private api: ApiService) {
    this.Storage();
  }
  ngOnInit() {}

  Storage = () => {
    this.api.Storage().subscribe(
      (data) => {
        this.storage = data.y;
        this.brandprice = data.z;
        (this.storage[5] = 8072.253968253968), console.log(this.storage);
        this.setStorage();
        this.setBrand();
      },
      (error) => {
        console.log(error);
      }
    );
  };

  setStorage = () => {
    this.storagegraph = {
      data: [
        {
          x: ["8G", "16G", "32G", "64G", "256G", "512G"],
          y: [
            this.storage[1],
            this.storage[2],
            this.storage[3],
            this.storage[0],
            this.storage[4],
            this.storage[5],
          ],
          type: "bar",
        },
      ],
      layout: {},
    };
  };

  setBrand = () => {
    this.brandpricegraph = {
      data: [
        {
          x: [
            "HTC",
            "LG",
            "Redmi",
            "alcatel",
            "huawei",
            "iphone",
            "lenovo",
            "nokia",
            "oppo",
            "realme",
            "samsung",
            "sony",
            "xiaomi",
          ],
          y: this.brandprice,
          type: "bar",
          marker: {
            color: "rgb(158,202,225)",
            opacity: 0.6,
            line: {
              color: "rgb(8,48,107)",
              width: 1.5,
            },
          },
        },
      ],
      layout: {
        barmode: "stack",
      },
    };
  };
}
