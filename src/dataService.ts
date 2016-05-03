import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { Toy } from './toy';
import { Configuration } from './configuration';

@Injectable()
export class DataService {

    private actionUrl: string;
    private urlBase: string;
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {
        
        this.urlBase = _configuration.ServerWithApiUrl + 'Toy';
        this.actionUrl = this.urlBase + '/';
        
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetAll = (): Observable<Response> => {
        this.actionUrl = this.urlBase + '/';
        return this._http.get(this.actionUrl).map(res => res.json());
    }
    
    public Search = (sport: string, type: string): Observable<Response> => {
        this.actionUrl = this.buildSearchURL(sport, type);
        return this._http.get(this.actionUrl).map(res => res.json());
    }
    
    private buildSearchURL(sport:string, type:string) {
        let url = this.urlBase;
        if (sport || type) url += '?';
        if (sport) url += 'sport=' + sport + '&';
        if (type) url += 'type=' + type + '&';
        return url;
    }

    public GetSingle = (id: number): Observable<Response> => {
        this.actionUrl = this.urlBase + '/';
        return this._http.get(this.actionUrl + id).map(res => res.json());
    }

    // public Add = (itemName: string): Observable<Response> => {
    //     var toAdd = JSON.stringify({ ItemName: itemName });

    //     return this._http.post(this.actionUrl, toAdd, { headers: this.headers }).map(res => res.json());
    // }


    public Add = (itemToAdd: Toy): Observable<Response> => {
        this.actionUrl = this.urlBase;
        return this._http.post(this.actionUrl, JSON.stringify(itemToAdd), { headers: this.headers }).map(res => res.json());
    }


    public Update = (id: number, itemToUpdate: Toy): Observable<Response> => {
        this.actionUrl = this.urlBase;
        return this._http.put(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers }).map(res => res.json());
    }

    public Delete = (id: number): Observable<Response> => {
        this.actionUrl = this.urlBase;
        return this._http.delete(this.actionUrl + id);
    }
}