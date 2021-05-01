import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {Appointment} from "../../models/Appointment";
import {MatTableDataSource} from "@angular/material/table";
import {AppointmentService} from "../../services/appointment.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {HttpErrorResponse} from "@angular/common/http";
import {AppointmentupdateComponent} from "../appointmentupdate/appointmentupdate.component";

@Component({
  selector: 'app-myappointments',
  templateUrl: './myappointments.component.html',
  styleUrls: ['./myappointments.component.scss']
})
export class MyappointmentsComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  appointment: Appointment [] = [];
  displayedColumns: string[] = ['appointmentId', 'dateAppdeb', 'dateAppFin', 'nameApp', 'placeApp', 'accepted' , 'refused', 'Check me' , 'clear'];
  dataSource = new MatTableDataSource(this.appointment);
  constructor(private appser: AppointmentService, private elementRef: ElementRef, private dialog: MatDialog ) { }


  ngOnInit(): void {

    this.appser.GetAppByLandlord().subscribe((date) => {
        this.appointment = date;
        this.dataSource.data = this.appointment;
        console.log(this.dataSource.data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        return this.appointment;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

 /* deleteAppointment(appointmentId: any) {
    console.log('mmmmmmmmmmm');
    this.appser.DeleteApp(appointmentId).subscribe();
    this.appointment = [];
    console.log(appointmentId);
    console.log('mmmmmmmmmmm');
    this.dataSource = new MatTableDataSource(this.appointment);
    window.location.reload();

  }*/
  Acceptapp(appointmentId: any){
    this.appser.AcceptAppointment(appointmentId).subscribe();
    window.location.reload();
  }
  refuseapp(appointmentId: any){
    this.appser.RefuseAppointment(appointmentId).subscribe();
    window.location.reload();
  }

}
