import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Typead} from '../../enumeration/Typead';
import {TypeBatiment} from '../../enumeration/TypeBatiment';
import {NgForm} from '@angular/forms';
import {AppointmentService} from '../../services/appointment.service';
import {Appointment} from '../../models/Appointment';

@Component({
  selector: 'app-appointmentupdate',
  templateUrl: './appointmentupdate.component.html',
  styleUrls: ['./appointmentupdate.component.scss']
})
export class AppointmentupdateComponent implements OnInit {

  constructor(private matdialogref: MatDialogRef<AppointmentupdateComponent>, private appser: AppointmentService){ this.keysBat = Object.keys(this.symbolsBat);
      this.keysTyp = Object.keys(this.symbols); }
  hide = true;
  App: Appointment = new Appointment();
  type = '';
  keysBat = [];
  keysTyp = [];
  symbols = Typead;
  symbolsBat = TypeBatiment;

  ngOnInit(): void {
    if (this.appser.appointmentId != 0){
      this.appser.GetAppById(this.appser.appointmentId).subscribe(data  => {
        this.App = data as Appointment;
        console.log(this.App);
      });
    }
  }

  onsubmit(f: NgForm) {
    /*if (this.AdServ.idAd === 0){
      console.log(f.value);
      const returnedTarget: Ad = Object.assign(this.Ad, f.value); // convert the form to object in p
      console.log(this.Ad);
      this.AdServ.postAd(this.Ad).subscribe(data => console.log(data));
    }
    else{*/

    console.log(f.value);
    const returnedTarget: Appointment = Object.assign(this.App, f.value); // convert the form to object in p
    console.log(this.App);
    console.log(this.App.dateAppdeb);
    console.log(new Date(this.App.dateAppdeb.toString().split('GMT')[0]+' UTC').toISOString());
    new Date(this.App.dateAppdeb.toString().split('GMT')[0]+' UTC').toISOString();
    console.log(this.App.dateAppdeb);
    console.log(Date.prototype);
    console.log(Date.parse(new Date(this.App.dateAppdeb.toString().split('GMT')[0]+' UTC').toISOString()));

    this.appser.updateapp(this.App).subscribe(data => console.log(data));

    this.appser.appointmentId = 0;
    this.App = new Appointment();
  }

  onclose(){
    this.matdialogref.close();
    this.appser.appointmentId = 0;
    this.App = new Appointment();
  }


}
