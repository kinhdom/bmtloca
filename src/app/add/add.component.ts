import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private db: AngularFireDatabase,private router: Router) { }

  ngOnInit() {
  }
  onFormSubmit(form) {
    this.db.list('bmtcogi').push(form.value)
    this.router.navigate(['/'])
  }

}
