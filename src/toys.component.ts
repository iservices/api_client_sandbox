//our root app component
// import {Component} from 'angular2/core';
// import {CORE_DIRECTIVES} from 'angular2/angular2';
import {
  Component, OnInit
} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import { DataService } from './dataService';
import { Configuration } from './configuration';

@Component({
    selector: 'toys',
    providers: [DataService, Configuration],
    // providers: [],
    // directives: [CORE_DIRECTIVES],
    directives: [],
    template: `
    <div *ngFor="#toy of toys; var index=index">
      Id: {{toy.id}}<br/>
      Sport: {{toy.sport}}<br/>
      Type: {{toy.type}}
      <hr>
    </div>
  `,
})

 export class ToyComponent implements OnInit {
   
   // TODO get these data from API call
  
  public toys = [];
  constructor(private _dataService: DataService) { }
  
    ngOnInit() {
      this.getAllItems();
    }
    
    //...

    private getAllItems(): void {
        this._dataService
            .GetAll()
            .subscribe(
                (data: any) => this.toys = data,
                error => console.log(error),
                () => console.log('Get all Items complete')
                );
    }
    
    private getItem(id): void {
        this._dataService
            .GetSingle(id)
            .subscribe(
                (data: any) => this.toys = data,
                error => console.log(error),
                () => console.log('Get Item complete')
                );
    }
 
}