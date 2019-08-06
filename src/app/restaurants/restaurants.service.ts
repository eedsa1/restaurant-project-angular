import {Restaurant} from "./restaurant/restaurant.model"
import {MEAT_API} from '../app.api'
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, of } from 'rxjs';
//import 'rxjs/add/observable/of';
import { map, catchError } from 'rxjs/operators'
import {ErrorHandler} from '../app.error-handler'
@Injectable()
export class RestaurantsService {
    constructor(private http: Http){}
    restaurants(): Observable<Restaurant[]>{
        return this.http.get(`${MEAT_API}restaurants`).pipe(map(response => response.json())).pipe(catchError(ErrorHandler.handleError))
    }
}