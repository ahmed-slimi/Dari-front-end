import {Component, enableProdMode, NgModule, OnInit, ViewChild} from '@angular/core';
import {AppointmentService} from '../../services/appointment.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, NgForm, Validators} from '@angular/forms';

import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { Marker, ServiceService} from 'src/app/services/service.service';//Appointment,
import {DxSchedulerModule} from 'devextreme-angular';

if ( !/localhost/.test(document.location.host)) {
  enableProdMode();
}


/// import {zooEventsData} from 'src/app/models/date';
import { Appointment } from 'src/app/models/Appointment';
import {AdService} from '../../services/ad.service';
import {Ad} from "../../models/Ad";
import {Observable, of, Timestamp} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {privateDecrypt} from "node:crypto";
import array from 'devextreme/ui/file_manager/file_provider/array';
import {forEach} from "@mobiscroll/angular/dist/js/core/util/dom";
import {any} from "codelyzer/util/function";
import DevExpress from "devextreme";
import data = DevExpress.data;
import { NotifAppService } from 'src/app/services/notif-app.service';
// import { Appointment } from 'src/app/models/Appointment.type';
/// import {extend} from '@syncfusion/ej2-base';

// import {Ad} from "../../models/Ad";

@Component({
  selector: 'app-post-appointment',
  templateUrl: './post-appointment.component.html',
  styleUrls: ['./post-appointment.component.scss'],
  // providers: [ServiceService]
  //providers: [Notifications]
 /// providers: [DayService, WeekService, WorkWeekService, MonthService, ResizeService, DragAndDropService]
})
export class PostAppointmentComponent implements OnInit  {// implements OnInit
 /* nameApp = new FormControl('', [Validators.required]);*/
  appointmentsDay: string;
  Id: number;
  Satistics: string;
  dt: Date ; // Timestamp<any>;
  situation: boolean = false ;
  dindex: Date;
  dts: Date;
  situation1: boolean = false ;
  situation2: boolean = false ;
  situation3: boolean = false ;
  fin: boolean = false ;






  ///pour geolocalisation

  customMarkerUrl: string;
  mapMarkerUrl: string;
  originalMarkers = new  Array();// Marker[] = [];
  markers = new  Array(); //Marker[] = Array[{}];



  /*checkCustomMarker(data) {
    this.mapMarkerUrl = data.value ? this.customMarkerUrl : null;
    this.markers = this.originalMarkers;
  }*/
  //////fin geolocalisation


   App: Appointment = new Appointment();

  //appointmentsData: Appointment[][] ;//= []
   appointmentsData = new  Array(); //= []
  /*dataSource = new MatTableDataSource(this.appointmentsData);*/
  currentDate: Date = new Date;//(2021, 5, 8)

  //ad: Ad = new Ad() ;// = this.adser.getAdById(this.activ.snapshot.params['id']);
  /*isNew = null;
  appointmentDetail: Appointment;
  appointments: Appointment[]
    {
      id: new Date().getTime().toString(),
      title: 'event1',
      start: new Date()
    }
  ];*/
 /* @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
*/
  constructor(private appser: AppointmentService, private activ: ActivatedRoute , private adser: AdService, private service: ServiceService, private notifyService: NotifAppService)
 {



   /* {this.customMarkerUrl = this.mapMarkerUrl = service.getMarkerUrl();
      service.getMarkers(this.activ.snapshot.params['id']).subscribe((a) => {
       this.originalMarkers = this.markers = a;
       console.log(this.markers);
       console.log(this.originalMarkers);
       console.log(a);
      });*/
  this.customMarkerUrl = this.mapMarkerUrl = service.getMarkerUrl();

    /*  appser.GetAppByLandlord().subscribe((date) => {
      this.appointmentsData = date;
      console.log(this.appointmentsData);
      console.log(date);
        /!*this.dataSource.data = this.appointmentsData;
        console.log(this.dataSource.data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        return this.appointmentsData;*!/
      });*/
  }


  ngOnInit(): void {
    console.log(this.activ.snapshot.params['id']);
    // this.appointmentsData = this.service.getAppointments();
    this.appointmentsData = this.service.apps;

    console.log('appointment' + this.appointmentsData );
    console.log('appointment11111111111111111111' + this.appointmentsData );

    // this.originalMarkers = this.markers = this.service.markers;
    this.originalMarkers = this.markers = this.service.mr;
    console.log('array' + this.service.markers);

    console.log('arraymr' + this.service.mr);
    console.log('arraymarkers' +  this.markers );
    console.log('array originalMarkers' +  this.originalMarkers);
  }


  save(f: NgForm) {
    /*if (f.value['dateAppFin'].getHours() < 9 || f.value['dateAppFin'].getHours() > 19){
      console.log("date not available") ;

    }*/
  }


  PostAd(f: NgForm){
    // this.ad = this.adser.getAdById(this.activ.snapshot.params['id']).subscribe();
    const p = {} as Appointment;
    console.log(this.App);
    console.log(f.value);
    const returnedTarget: Appointment = Object.assign(p, f.value); // convert the form to object in p
    console.log(p);
    /*this.appser.addapp( p , this.activ.snapshot.params['id']).subscribe(data => console.log(data));
    this.fin = true ;*/


    //console.log(returnedTarget);

    console.log(p);
    console.log(returnedTarget);
    console.log(p.dateAppdeb);
    this.dt = new Date( p.dateAppdeb);
    this.dts = new Date( p.dateAppFin);
    for (let index of this.appointmentsData) {
      this.dindex = new Date(index.startDate);
      console.log(this.dindex);
      console.log(index.startDate);
      console.log(this.dt + "p.datedeb");
      //if (this.dt == this.dindex ){//index.startDate
      if (this.dt.getFullYear() == this.dindex.getFullYear() && this.dt.getMonth() == this.dindex.getMonth() && this.dt.getDay() == this.dindex.getDay() && this.dt.getHours() == (this.dindex.getHours() )) {
        //this.notifyService.showError("date not available", "ItSolutionStuff.com");
        // console.log(this.notifyService.showError("date not available", "ItSolutionStuff.com"));
        this.situation = true;

        console.log(this.situation);
      }
    }

      //return console.log("date not available");}
    if (this.dt.getHours() < 9 || this.dt.getHours() > 19) {
        // this.notifyService.showError("startdate must be <9h and >19h", "ItSolutionStuff.com");
        this.situation1 = true;



      }
      //return console.log("date not available");}
    if (this.dts.getHours() < 9 || this.dts.getHours() > 19) {
        //this.notifyService.showError("enddate must be <9h and >19h", "ItSolutionStuff.com");
        this.situation2 = true;


      }
      //return console.log("date not available");}
    if (this.dts.getHours() - this.dt.getHours() > 1) {
        //this.notifyService.showError("the deffirent bettwin startDate and endDate must be < 1h", "ItSolutionStuff.com");
        this.situation3 = true;
      window.location.reload();
      }
      // return console.log("the deffirent bettwin startDate and endDate must be < 1h");}*/
    this.situation == false;  this.situation1 == false ; this.situation2;  this.situation3 == false ;
      console.log(this.situation , this.situation1 , this.situation2 , this.situation3 );
      console.log(p);
    if ( this.situation == false && this.situation1 == false && this.situation2 == false && this.situation3 == false ){
      console.log(this.situation , this.situation1 , this.situation2 , this.situation3 );
      this.appser.addapp( p , this.activ.snapshot.params['id']).subscribe(data => console.log(data));
      this.fin = true ;
    }


    console.log("dt="+ this.dt);
    console.log("dt="+ this.dt.getDay());
    if(this.dt.getDay()==0)
      this.appointmentsDay = "Sunday";
    else if(this.dt.getDay()==1)
      this.appointmentsDay ="Monday";
    else if(this.dt.getDay()==2)
      this.appointmentsDay ="Tuesday";
    else if(this.dt.getDay()==3)
      this.appointmentsDay ="Wednesday";
    else if(this.dt.getDay()==4)
      this.appointmentsDay ="Thursday";
    else if(this.dt.getDay()==5)
      this.appointmentsDay ="Friday";
    else if(this.dt.getDay()==6)
      this.appointmentsDay ="Saturday";
    console.log("Day" +this.appointmentsDay);
   /* this.appser.GetDay(p.dateAppdeb).subscribe((date) => {
      this.appointmentsDay = date;
    });*/
    console.log(this.appointmentsDay);
    this.Id = this.appser.id;
   /* this.appser.GetAdUser(this.activ.snapshot.params['id']).subscribe((date) => {
      this.Id = date;

    });*/



    /*console.log(this.Id);
    this.appser.GetStatistics( this.Id , this.appointmentsDay).subscribe((date) => {
      this.Satistics = date;
    });
    console.log(this.Satistics);*/
  }




  // tslint:disable-next-line:typedef
 /* getErrorMessage() {
    if (this.nameApp.hasError('required')) {
      return 'You must enter a value';
    }}*/
 /* errorts(f: NgForm){
    const p = {} as Appointment;
    const returnedTarget: Appointment = Object.assign(p, f.value);
    if (p.dateAppFin.getHours() < 9 || p.dateAppFin.getHours() > 19){
      return "date not available";
    }
  };*/

}
