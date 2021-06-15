import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, ) { }

  public almacenaOrden(hotdog: number,hamburger: number, salad: number,pizza: number,soda: number): Observable<Number> {

    const url = "http://" + environment.host + ":" + environment.port + "/ticketNumber?hotdog=" +
    hotdog + "&hamburger=" + hamburger + "&salad=" +
    salad + "&pizza=" + pizza + "&soda=" +soda; 

    return this.http.get<Number>(url);
  }
}
