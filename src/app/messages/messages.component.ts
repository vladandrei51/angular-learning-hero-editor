import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  public length: Number = 0;
  constructor(public messageService: MessageService) { }

  ngOnInit() {
    length = this.messageService.messages.length;
  }

}