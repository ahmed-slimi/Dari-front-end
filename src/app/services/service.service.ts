import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostAppointmentComponent} from "../components/post-appointment/post-appointment.component";
import {Appointment} from '../models/Appointment';
/*export class Appointment {
  text: string;
  startDate: Date;
  endDate: Date;
  allDay?: boolean;
}*/
/*export class Appointment {
  nameApp: string;
  dateAppdeb: Date;
  dateAppFin: Date;
}*/


/*let appointments: Appointment[] = [
  {
    nameApp: "Website Re-Design Plan",
    dateAppdeb: new Date("2021-05-24T16:30:00.000Z"),
    dateAppFin: new Date("2021-05-24T18:30:00.000Z")
  }, {
    nameApp: "Book Flights to San Fran for Sales Trip",
    dateAppdeb: new Date("2021-05-24T19:00:00.000Z"),
    dateAppFin: new Date("2021-05-24T20:00:00.000Z"),
    //allDay: true
  }, {
    nameApp: "Install New Router in Dev Room",
    dateAppdeb: new Date("2021-05-24T21:30:00.000Z"),
    dateAppFin: new Date("2021-05-24T22:30:00.000Z")
  }, {
    nameApp: "Approve Personal Computer Upgrade Plan",
    dateAppdeb: new Date("2021-05-25T17:00:00.000Z"),
    dateAppFin: new Date("2021-05-25T18:00:00.000Z")
  }, {
    nameApp: "Final Budget Review",
    dateAppdeb: new Date("2021-05-25T19:00:00.000Z"),
    dateAppFin: new Date('2021-05-25T20:35:00.000Z')
  }, {
    nameApp: 'New Brochures',
    dateAppdeb: new Date('2021-05-25T21:30:00.000Z'),
    dateAppFin: new Date('2021-05-25T22:45:00.000Z')
  }, {
    nameApp: 'Install New Database',
    dateAppdeb: new Date('2021-05-26T16:45:00.000Z'),
    dateAppFin: new Date('2021-05-26T18:15:00.000Z')
  }, {
    nameApp: "Approve New Online Marketing Strategy",
    dateAppdeb: new Date("2021-05-26T19:00:00.000Z"),
    dateAppFin: new Date("2021-05-26T21:00:00.000Z")
  }, {
    nameApp: "Upgrade Personal Computers",
    dateAppdeb: new Date("2021-05-26T22:15:00.000Z"),
    dateAppFin: new Date("2021-05-26T23:30:00.000Z")
  }, {
    nameApp: 'Customer Workshop',
    dateAppdeb: new Date('2021-05-27T18:00:00.000Z'),
    dateAppFin: new Date('2021-05-27T19:00:00.000Z'),
    // allDay: true
  }, {
    nameApp: 'Prepare 2021 Marketing Plan',
    dateAppdeb: new Date('2021-05-27T18:00:00.000Z'),
    dateAppFin: new Date('2021-05-27T20:30:00.000Z')
  }, {
    nameApp: 'Brochure Design Review',
    dateAppdeb: new Date('2021-05-27T21:00:00.000Z'),
    dateAppFin: new Date('2021-05-27T22:30:00.000Z')
  }, {
    nameApp: 'Create Icons for Website',
    dateAppdeb: new Date('2021-05-28T17:00:00.000Z'),
    dateAppFin: new Date('2021-05-28T18:30:00.000Z')
  }, {
    nameApp: 'Upgrade Server Hardware',
    dateAppdeb: new Date('2021-05-28T21:30:00.000Z'),
    dateAppFin: new Date('2021-05-28T23:00:00.000Z')
  }, {
    nameApp: 'Submit New Website Design',
    dateAppdeb: new Date('2021-05-28T23:30:00.000Z'),
    dateAppFin: new Date('2021-05-29T01:00:00.000Z')
  }, {
    nameApp: 'Launch New Website',
    dateAppdeb: new Date('2021-05-28T19:20:00.000Z'),
    dateAppFin: new Date('2021-05-28T21:00:00.000Z')
  }
];*/
/*let appointments: Appointment[]   = [
  {
    text: "Website Re-Design Plan",
    startDate: new Date("2021-05-24T16:30:00.000Z"),
    endDate: new Date("2021-05-24T18:30:00.000Z")
  }, {
    text: "Book Flights to San Fran for Sales Trip",
    startDate: new Date("2021-05-24T19:00:00.000Z"),
    endDate: new Date("2021-05-24T20:00:00.000Z"),
    allDay: true
  }, {
    text: "Install New Router in Dev Room",
    startDate: new Date("2021-05-24T21:30:00.000Z"),
    endDate: new Date("2021-05-24T22:30:00.000Z")
  }, {
    text: "Approve Personal Computer Upgrade Plan",
    startDate: new Date("2021-05-25T17:00:00.000Z"),
    endDate: new Date("2021-05-25T18:00:00.000Z")
  }, {
    text: "Final Budget Review",
    startDate: new Date("2021-05-25T19:00:00.000Z"),
    endDate: new Date("2021-05-25T20:35:00.000Z")
  }, {
    text: "New Brochures",
    startDate: new Date("2021-05-25T21:30:00.000Z"),
    endDate: new Date("2021-05-25T22:45:00.000Z")
  }, {
    text: "Install New Database",
    startDate: new Date("2021-05-26T16:45:00.000Z"),
    endDate: new Date("2021-05-26T18:15:00.000Z")
  }, {
    text: "Approve New Online Marketing Strategy",
    startDate: new Date("2021-05-26T19:00:00.000Z"),
    endDate: new Date("2021-05-26T21:00:00.000Z")
  }, {
    text: "Upgrade Personal Computers",
    startDate: new Date("2021-05-26T22:15:00.000Z"),
    endDate: new Date("2021-05-26T23:30:00.000Z")
  }, {
    text: "Customer Workshop",
    startDate: new Date("2021-05-27T18:00:00.000Z"),
    endDate: new Date("2021-05-27T19:00:00.000Z"),
    allDay: true
  }, {
    text: "Prepare 2021 Marketing Plan",
    startDate: new Date("2021-05-27T18:00:00.000Z"),
    endDate: new Date("2021-05-27T20:30:00.000Z")
  }, {
    text: "Brochure Design Review",
    startDate: new Date("2021-05-27T21:00:00.000Z"),
    endDate: new Date("2021-05-27T22:30:00.000Z")
  }, {
    text: "Create Icons for Website",
    startDate: new Date("2021-05-28T17:00:00.000Z"),
    endDate: new Date("2021-05-28T18:30:00.000Z")
  }, {
    text: "Upgrade Server Hardware",
    startDate: new Date("2021-05-28T21:30:00.000Z"),
    endDate: new Date("2021-05-28T23:00:00.000Z")
  }, {
    text: "Submit New Website Design",
    startDate: new Date("2021-05-28T23:30:00.000Z"),
    endDate: new Date("2021-05-29T01:00:00.000Z")
  }, {
    text: "Launch New Website",
    startDate: new Date("2021-05-28T19:20:00.000Z"),
    endDate: new Date("2021-05-28T21:00:00.000Z")
  }
];*/
export class Marker {

  location: any;
  locationId: number;
}
let markerUrl = 'https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png';
export class Appointment1 {
  text: string;
  startDate: Date;
  endDate: Date;
  allDay?: boolean;
}


@Injectable({
  providedIn: 'root'
})


export class ServiceService {
  markers: Marker[] = []; //Marker[] = Array[{}];]
  mr: Marker[][] = [];
  appointments: Appointment[] = [];
  apps: Appointment1[] = [];


  //appointments: Appointment[] = this.getAppointments();

 /* getAppointments(): Appointment[][] {
    return this.appointments;
  }*/
  GetAppByLandlordAd( idad: number){
    return this.http.get<Appointment[]>('http://localhost:8082/dari/Appointment/find/LandlordAd/' + idad ).subscribe(data =>
    {
      this.appointments =  data ;
      for (let index of this.appointments) {
        console.log(index);
        console.log({startDate: index.dateAppdeb , endDate: index.dateAppFin, text: index.nameApp });
        this.apps.push({text: index.nameApp, startDate: index.dateAppdeb , endDate: index.dateAppFin,  });
        console.log(this.apps);
      }
      console.log(data+'data');
    });
  }
  constructor(private http: HttpClient) { }
  getMarkerUrl() : string {
    return markerUrl;
  }
  getMarkers1(idad: number) {
       this.http.get<Marker[]>('http://localhost:8082/dari/Marker/findByIdAd/' + idad).subscribe(data =>
       {
         this.mr =  [data] ;
         console.log(data+'data');
       });

  }
  getallLocation(){
     this.http.get<Marker[]>('http://localhost:8082/dari/Marker/all').subscribe(data =>
     {
       this.markers = data;
     console.log(data+'data')});
  }




}
