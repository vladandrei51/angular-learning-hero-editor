import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HEROES } from './heroes/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  getHeroes(): Observable<Hero[]>{
    this.messageService.addMessage('Heroes successfully fetched');
    return of(HEROES);
  }

  constructor(private messageService: MessageService) { }

}