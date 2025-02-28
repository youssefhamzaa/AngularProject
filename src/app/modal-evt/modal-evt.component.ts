import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-evt',
  templateUrl: './modal-evt.component.html',
  styleUrls: ['./modal-evt.component.css']
})
export class ModalEvtComponent {
  ngOnInit()
  {
    this.form = new FormGroup({
      title: new FormControl(null),
      dateDebut: new FormControl(null),
      dateFin: new FormControl(null),
      lieu: new FormControl(null)
    })
  }
  //forcage de type boite
  constructor(public dialogRef: MatDialogRef<ModalEvtComponent>) { }
  form!: FormGroup;
  save() {
    this.dialogRef.close(this.form.value);
}




  close() {
      this.dialogRef.close();
  }


  //declarer form
  //intialiser form


}
