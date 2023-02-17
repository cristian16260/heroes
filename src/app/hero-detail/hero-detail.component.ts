import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{

  hero: any | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroservice: HeroService,
    private location: Location
  ) {}

  ngOnInit():void{
    this.gethero();
   }
  gethero(): void{
    const id: any = Number(('id'));
      this.heroservice.detailhero(id).subscribe(hero => {
        console.log(hero)
      });
      
  }

  goBack(): void {
    this.location.back();
  }

}
