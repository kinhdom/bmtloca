import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';
import { Loca } from '../loca';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  constructor(private db: AngularFireDatabase, private router: Router, private route: ActivatedRoute) { }
  selectedItem: any;
  selectedImage:any;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedItem = params;
    })
  }
  onFormSubmit(form) {
    if(this.selectedImage){
      console.log('run function uploadimage')
    }
    if (this.selectedItem.key) {
      // Update
      this.db.list('bmtcogi').update(this.selectedItem.key, form.value)
      this.router.navigate(['/'])
    } else {
      // Push
      this.db.list('bmtcogi').push(form.value)
      this.router.navigate(['/'])
    }
  }
  onfileselected(event){
    this.selectedImage = event.target.files[0]
    console.log(event.target.files[0])
  }
}
