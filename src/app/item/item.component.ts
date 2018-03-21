import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() name: string;
  @Input() address: string;
  @Input() key: string;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
  }
  delete(key: string) {
    this.db.list('bmtcogi').remove(key)
  }

}
