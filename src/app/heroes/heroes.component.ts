import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{

heroeslist: any[] = [];


formgrup: FormGroup;

constructor (private heroservice: HeroService,
    private hg: FormBuilder){
      this.formgrup = this.hg.group({
          name: ['',Validators.required,Validators.maxLength(25),Validators.minLength(5)]
      })
    }

 ngOnInit():void{
  this.obtenerhero();
 }
obtenerhero(): void{
    this.heroservice.getlisHeroes().subscribe(data =>{
      console.log(data);
      this.heroeslist = data;
    }, error =>{
      console.log(error);
    } )
}

agregar(){
  const Herocon: any = {
   
    name: this.formgrup.get('name')?.value
       }
  this.heroservice.savehero(Herocon).subscribe(data =>{
  this.obtenerhero();
  this.formgrup.reset();  
  })
}

delete(id: number){
   this.heroservice.deletehero(id).subscribe(data =>{
    this.obtenerhero();
    }, error =>{
        console.log(error);
    })
}

}


