import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {ConsumerService} from '../consumer.service';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {
  consumers: any;

  constructor(private route: ActivatedRoute, private consumerService: ConsumerService) {
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.consumerService.get(+params.get('id')))
      .subscribe(consumers => {
        this.consumers = consumers;
      });
  }

  private getConsumer(id: number): Promise<number> {
    return Promise.resolve(id);
  }
}
