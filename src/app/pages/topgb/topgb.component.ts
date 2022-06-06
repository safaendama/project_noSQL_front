import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../api.service";

@Component({
  selector: "app-topgb",
  templateUrl: "./topgb.component.html",
  providers: [ApiService],
})
export class TopgbComponent implements OnInit {
  constructor(private api: ApiService) {
    this.TopGb();
  }

  storage: any;
  numbers: any;

  topgbchart: any;
  ngOnInit() {}

  TopGb = () => {
    this.api.TopGb().subscribe(
      (data) => {
        this.storage = data.storage;
        this.numbers = data.number;
        console.log(data);
        this.setTopgb();
      },
      (error) => {
        console.log(error);
      }
    );
  };

  setTopgb = () => {
    this.topgbchart = {
      data: [
        {
          x: ["8 GB", "16 GB", "32 GB", "64 GB", "256 GB", "512 GB"],
          y: [0, this.numbers[0], 0, this.numbers[1], 0, 0],
          name: "HTC",
          type: "bar",
        },
        {
          x: ["8 GB", "16 GB", "32 GB", "64 GB", "256 GB", "512 GB"],
          y: [0, 0, this.numbers[2], 0, 0, 0],
          name: "LG",
          type: "bar",
        },
        {
          x: ["8 GB", "16 GB", "32 GB", "64 GB", "256 GB", "512 GB"],
          y: [this.numbers[3], 0, this.numbers[4], this.numbers[4], 0, 0],
          name: "Redmi",
          type: "bar",
        },
        {
          x: ["8 GB", "16 GB", "32 GB", "64 GB", "256 GB", "512 GB"],
          y: [
            this.numbers[10],
            this.numbers[11],
            this.numbers[12],
            this.numbers[13],
            this.numbers[14],
            this.numbers[15],
          ],
          name: "Iphone",
          type: "bar",
        },
        {
          x: ["8 GB", "16 GB", "32 GB", "64 GB", "256 GB", "512 GB"],
          y: [
            this.numbers[26],
            this.numbers[27],
            this.numbers[28],
            this.numbers[29],
            this.numbers[30],
            this.numbers[31],
          ],
          name: "Samsung",
          type: "bar",
        },
      ],
      layout: {
        barmode: "group",
      },
    };
  };
}
