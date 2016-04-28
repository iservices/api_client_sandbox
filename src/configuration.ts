import { Injectable } from 'angular2/core';

@Injectable()
export class Configuration {
    public Server: string = "https://unum-cwp-dev0-tscilipoti-api.herokuapp.com/";
    public ApiUrl: string = "api/";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}