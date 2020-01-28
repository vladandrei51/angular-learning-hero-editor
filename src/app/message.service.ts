import { Injectable } from '@angular/core';


@Injectable()
export class MessageService {
  
  public messages: String[] = [];

  addMessage(msj: String){
    this.messages.push(msj);
  }

  clearMessages(){
    this.messages=[];
  }

  constructor() { }

}