import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroeslist: any[] = [];
constructor (private heroservice: HeroService){}

ngOnInit():void{
  this.obtenerhero();
 }
obtenerhero(): void{
    this.heroservice.getlisHeroes().subscribe(data => this.heroeslist = data.slice(1, 6)
      //console.log(data);
     // this.heroeslist = data;
    , error =>{
      console.log(error);
    } )
}

}


