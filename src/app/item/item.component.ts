import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Loca } from '../loca';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() name: string;
  @Input() address: string;
  @Input() key: string;
  @Input() item: Loca
  constructor(private db: AngularFireDatabase, private router: Router) { }

  ngOnInit() {
  }
  delete(key: string) {
    this.db.list('bmtcogi').remove(key)
  }
  edit(selectedItem) {
    this.router.navigate(['submit'], { queryParams: selectedItem })
  }

}
