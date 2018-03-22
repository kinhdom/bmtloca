import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';

import { Router, ActivatedRoute } from '@angular/router';
import { Loca } from '../loca';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage, private router: Router, private route: ActivatedRoute) { }
  selectedItem: any;
  selectedImage: any;
  downloadUrl: Observable<string>;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedItem = params;
    })
  }
  onFormSubmit(form) {
    if (this.selectedImage) {
      console.log('run function uploadimage')
      // Upload image
      let pathName = Math.random().toString()
      const taskUpload = this.storage.upload(pathName, this.selectedImage)
      taskUpload.downloadURL().subscribe(urlImg => {
        form.value.img = urlImg
        if (this.selectedItem.key) {
          // Update
          this.db.list('bmtcogi').update(this.selectedItem.key, form.value)
          this.router.navigate(['/'])
        } else {
          // Push
          this.db.list('bmtcogi').push(form.value)
          this.router.navigate(['/'])
        }
      })
    }
  }
  onfileselected(event) {
    this.selectedImage = event.target.files[0]
  }
}
