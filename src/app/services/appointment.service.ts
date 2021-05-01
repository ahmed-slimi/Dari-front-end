import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Appointment} from '../models/Appointment';
import {Ad} from '../models/Ad';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  get appointmentId(): number {
    return this._appointmentId;
  }

  set appointmentId(value: number) {
    this._appointmentId = value;
  }
  private _appointmentId = 0;
  appointmentsUrl = 'http://localhost:8082/dari/Appointment/all';
  constructor(private http: HttpClient) { }
  GetAllAppointment(): Observable<Appointment[]> {

    return this.http.get<Appointment[]>(this.appointmentsUrl);
  }
  GetAppById(appointmentId: number): Observable<Appointment>{
    return this.http.get<Appointment>('http://localhost:8082/dari/Appointment/find/' + appointmentId);
  }
  GetAppByLandlord(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>('http://localhost:8082/dari/Appointment/find/landlord');
  }
  GetAppByUser(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>('http://localhost:8082/dari/Appointment/find/User');
  }
  DeleteApp(appointmentId: number){
    return this.http.delete('http://localhost:8082/dari/Appointment/delete/' + appointmentId);
  }
  /*
  // tslint:disable-next-line:typedef
  addapp(app: Appointment){
    return this.http.post<Appointment>('http://localhost:8082/dari/Appointment/add/' + Ad.adId , app);
  }*/
  // tslint:disable-next-line:typedef
  updateapp(app: Appointment){
    return this.http.put('http://localhost:8082/dari/Appointment/update' , app);
  }
  AcceptAppointment(appointmentId: number){
    return this.http.put('http://localhost:8082/dari/Appointment/update/isAcceptandSendEmail/' + appointmentId , Appointment);
  }
  RefuseAppointment(appointmentId: number){
    return this.http.put('http://localhost:8082/dari/Appointment/update/isRefuseandSendEmail/' + appointmentId , Appointment)
  }
}
