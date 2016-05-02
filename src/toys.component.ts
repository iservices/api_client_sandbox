//our root app component
import {
  Component, OnInit
} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import { DataService } from './dataService';
import { Configuration } from './configuration';
import { Toy } from './toy';

@Component({
    selector: 'toys',
    providers: [DataService, Configuration],
    directives: [],
    templateUrl: 'src/toys.component.html' // apparently this needs to be a full path; ./toys.component.html does not work
})
export class ToyComponent implements OnInit {
   
   // TODO get these data from API call
  
  public toys:Toy[] = [];
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
    
    private getItem(id:number): void {
        this._dataService
            .GetSingle(id)
            .subscribe(
                (data: any) => this.toys = data,
                error => console.log(error),
                () => console.log('Get Item complete')
                );
    }
    
    private saveItem(sport:string, type:string): void {
        let toyToAdd = new Toy();
        toyToAdd.sport = sport;
        toyToAdd.type = type;
        let retVal;
        this._dataService
            .Add(toyToAdd)
            .subscribe(
                // (data: any) => retVal = data,
                (data: any) => this.getAllItems(), // refresh list with new item
                error => console.log(error),
                () => console.log('Save Item Complete')
                );
        
    }

 
}