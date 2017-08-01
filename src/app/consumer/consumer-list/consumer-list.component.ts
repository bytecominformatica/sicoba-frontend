import {Component, OnInit} from '@angular/core';
import {ConsumerService} from '../consumer.service';

@Component({
  selector: 'app-consumer-list',
  templateUrl: './consumer-list.component.html',
  styleUrls: ['./consumer-list.component.css']
})
export class ConsumerListComponent implements OnInit {
  consumers: any;

  constructor(private consumerService: ConsumerService) {
  }

  ngOnInit() {
    this.getConsumers();
  }

  getConsumers() {
    this.consumerService.query()
      .subscribe(consumers => {
        console.log(consumers);
        this.consumers = consumers;
      });
  }

}
