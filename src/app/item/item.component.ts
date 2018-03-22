import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Loca } from '../loca';
import { LocaService } from '../loca.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() name: string;
  @Input() address: string;
  @Input() key: string;
  @Input() img: string;
  @Input() item: Loca
  constructor(private db: AngularFireDatabase, private router: Router, private locaservice: LocaService) { }

  ngOnInit() {
  }
  delete(key: string) {
    this.db.list('bmtcogi').remove(key)
  }
  edit(selectedItem) {
    this.locaservice.edit(selectedItem)

      this.router.navigate(['submit'])
  }

}
