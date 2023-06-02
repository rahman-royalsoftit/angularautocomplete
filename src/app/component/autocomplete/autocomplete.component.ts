import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';


export interface ColorInfo{
  colorID : number;
  colorName : string;
}

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  title = 'angular-material-autocomplete';
  
  colorCtrl = new FormControl('');  
  filteredColor: Observable<ColorInfo[]>|undefined;
  
  colorList : ColorInfo[]=[
    {colorID:1, colorName:'BLUE'},
    {colorID:2, colorName:'BLUE MOON'},
    {colorID:3, colorName:'BLEU NAVY'},
    {colorID:4, colorName:'BRIGHT BLUE'},
    {colorID:5, colorName:'BRIGHT COBALT'},
    {colorID:6, colorName:'BRIGHT GREEN'},
    {colorID:7, colorName:'BRIGHT NAVY'},
    {colorID:8, colorName:'BRIGHT PINK'},
    {colorID:9, colorName:'BRIGHT PURPLE'},
    {colorID:10, colorName:'BRIGHT RED'},
    {colorID:11, colorName:'BRIGHT ROSE'},
    {colorID:12, colorName:'BRIGHT WHITE'},
    {colorID:13, colorName:'BRIGHT YELLOW'},
    {colorID:14, colorName:'BLACK'},
    {colorID:15, colorName:'BLACK IRIS'},
    {colorID:16, colorName:'COBALT'},
    {colorID:17, colorName:'COFFEE'},
    {colorID:18, colorName:'CORAL'},
    {colorID:19, colorName:'CORAL PINK'},
    {colorID:20, colorName:'DARK BLUE'},
    {colorID:21, colorName:'DARK CORAL'},
    {colorID:22, colorName:'DARK BLUE NAVY'},
    {colorID:23, colorName:'DARK GREEN'},
    {colorID:24, colorName:'DARK GREY'},   
    {colorID:27, colorName:'DARK YELLOW'},
    {colorID:28, colorName:'DEEP BLUE'},
    {colorID:29, colorName:'ECRU'},
    {colorID:30, colorName:'GREEN'},
    {colorID:31, colorName:'YELLOW'},
    {colorID:32, colorName:'WHITE'},
    {colorID:33, colorName:'NAVY BLUE'},
    {colorID:34, colorName:'NAVY GREY'},  
    {colorID:37, colorName:'LIME'},
    {colorID:38, colorName:'LIME LIGHT'},
    {colorID:39, colorName:'LIME STONE'},
    {colorID:40, colorName:'LIGHT NAVY'},
    {colorID:35, colorName:'NAVY IVORY'},
    {colorID:36, colorName:'NAVY WHITE'},
    {colorID:41, colorName:'LIGHT PINK'},
    {colorID:42, colorName:'LIGHT ORANGE'},
    {colorID:43, colorName:'LIGHT GREEN'},
    {colorID:44, colorName:'LIGHT GREY'},
    {colorID:45, colorName:'NEON CORAL'},
    {colorID:46, colorName:'NEON GREEN'},
    {colorID:47, colorName:'NEON LIME'},
    {colorID:25, colorName:'DARK NAVY'},
    {colorID:26, colorName:'DARK PINK'},
    {colorID:48, colorName:'NEON ORANGE'},
    {colorID:49, colorName:'NEON PINK'},
    {colorID:50, colorName:'NEON PURPLE'},
    {colorID:51, colorName:'NIGHT BLUE'},
    {colorID:52, colorName:'NIGHT SKY'},
    {colorID:53, colorName:'OLIVE'},
    {colorID:54, colorName:'OLIVE GREEN'},
    {colorID:54, colorName:'PINK SKY'},
  ]
  constructor() {
   
  }

  ngOnInit(): void { 
   
    this.valueChangeColor();
 
  }
  valueChangeColor(){
    this.filteredColor = this.colorCtrl.valueChanges
    .pipe(
      startWith(''),
      map(item => item ? this.filterColor(item) : this.colorList.slice())
    );

  }
  private filterColor(value: string): ColorInfo[] {
    const filterValue = value.toString().toLowerCase();   
    return this.colorList.filter(option => option.colorName.toLowerCase().includes(filterValue));
  }
  displayColor(item: ColorInfo): string {  
   
    return item ? item.colorName : '';    
  
  }

  
}