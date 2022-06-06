import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  BASE_URL = "http://127.0.0.1:8000/";
  HTTP_HEADERS = new HttpHeaders({ "Content-Type": "application/json" });

  Storage(): Observable<any> {
    return this.http.get(this.BASE_URL + "storage/", {
      headers: this.HTTP_HEADERS,
    });
  }
  Pubs(): Observable<any> {
    return this.http.get(this.BASE_URL + "pubs/", {
      headers: this.HTTP_HEADERS,
    });
  }

  TopCity(): Observable<any> {
    return this.http.get(this.BASE_URL + "topcity/", {
      headers: this.HTTP_HEADERS,
    });
  }

  TopGb(): Observable<any> {
    return this.http.get(this.BASE_URL + "topgb/", {
      headers: this.HTTP_HEADERS,
    });
  }
}
