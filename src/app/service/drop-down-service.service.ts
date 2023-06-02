import { Injectable } from '@angular/core';
import { Select } from './select';
import { Where } from './where';

@Injectable({
  providedIn: 'root'
})
export class DropDownServiceService {

  constructor() { }

  getSelect(){
    return [
     new Select('Location', 'Country ='),
     new Select('Device Type', 'DType =' ),
     new Select('Size', 'ItemSize ='  ),
    new Select('Color', 'Color ='  )

     
     
     
    
    ];
  }

  getWhere(){
    return [
     new Where( 'Canada' ,'Country =',  'CAN' ),
     new Where( 'Colombia' ,'Country =',  'COL' ),
     new Where( 'Mexico' ,'Country =',  'MEX' ),
     new Where( 'United States' ,'Country =',  'USA' ),
     new Where( 'France' ,'Country =',  'FRA' ),


     new Where('Phone', 'DType =', 'Phone' ),
     new Where('Tablet', 'DType =', 'Tablet' ),

     new Where('Extra Small','ItemSize =', 'XS' ),
     new Where('Small','ItemSize =', 'S' ),
     new Where('Medium','ItemSize =', 'M' ),
     new Where('Large','ItemSize =', 'L' ),
     new Where('Extra Large','ItemSize =', 'XL' ),

     new Where('Yellow','Color =', 'yellow' ),
     new Where('Red','Color =', 'red' ),
     new Where('Blue','Color =', 'blue' ),
     new Where('Green','Color =', 'green' ),
     new Where('Purple','Color =', 'purple' ),
     new Where('Black','Color =', 'black' ),     
     
    ];
  }  


}