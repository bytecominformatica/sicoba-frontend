import {Component, OnInit} from '@angular/core';
import {ChargeService} from '../../charge/charge.service';
import {Charge} from "../../charge/charge";

@Component({
  selector: 'app-late-charges',
  templateUrl: './late-charges.component.html',
  styleUrls: ['./late-charges.component.css'],
  providers: [ChargeService]
})
export class LateChargesComponent implements OnInit {
  charges: Charge[];

  constructor(private chargeService: ChargeService) {
  }

  ngOnInit() {
    this.overdue();
  }

  private overdue() {
    this.chargeService.overdue().subscribe(charges => {
      this.charges = charges;
    });
  }

}
