import {Component, OnInit} from '@angular/core';
import {ConsumerService} from '../consumer.service';
import {Consumer} from "../consumer";

@Component({
  selector: 'app-consumer-list',
  templateUrl: './consumer-list.component.html',
  styleUrls: ['./consumer-list.component.css']
})
export class ConsumerListComponent implements OnInit {
  consumers: Consumer[];
  name?: string;

  constructor(private consumerService: ConsumerService) {
  }

  ngOnInit() {
    this.getConsumers();
  }

  getByName(name: any) {
    this.consumerService.query({name: name})
      .subscribe(consumers => {
        this.consumers = consumers;
      });
  }

  getConsumers() {
    this.consumerService.lastChanged()
      .subscribe(consumers => {
        this.consumers = consumers;
      });
  }

}
