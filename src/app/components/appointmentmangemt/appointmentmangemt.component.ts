import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AppointmentService } from '../../services/appointment.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';
import {Appointment} from '../../models/Appointment';
import {AppointmentupdateComponent} from '../appointmentupdate/appointmentupdate.component';

@Component({
  selector: 'app-appointmentmangemt',
  templateUrl: './appointmentmangemt.component.html',
  styleUrls: ['./appointmentmangemt.component.scss']
})
export class AppointmentmangemtComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  appointment: Appointment [] = [];
  displayedColumns: string[] = ['appointmentId', 'dateAppdeb', 'dateAppFin', 'nameApp', 'placeApp', 'accepted' , 'refused' , 'Edit', 'Delete' ];
  dataSource = new MatTableDataSource(this.appointment);
  constructor(private appser: AppointmentService, private elementRef: ElementRef, private dialog: MatDialog ) { }
  public successMsg: string;
  public errorMsg: string;

  ngOnInit(): void {

    this.appser.GetAllAppointment().subscribe((date) => {
      this.appointment = date;
      this.dataSource.data = this.appointment;
      console.log(this.dataSource.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      return this.appointment;

    },
      (error: HttpErrorResponse) => {//ErrorEvent
      //this.errorMsg = error.error.message;
        alert(error.message);
      }
    );
  }
  // tslint:disable-next-line:typedef
  /*deleteAppointment(appointmentId: number){
    console.log('mmmmmmmmmmm');
    this.appser.DeleteApp(appointmentId).subscribe();
    this.appointment = [];
    console.log(appointmentId);
    console.log('mmmmmmmmmmm');
    this.dataSource = new MatTableDataSource(this.appointment);
    window.location.reload();
  }*/
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteAppointment(appointmentId: any) {
    console.log('mmmmmmmmmmm');
    this.appser.DeleteApp(appointmentId).subscribe();
    this.appointment = [];
    console.log(appointmentId);
    console.log('mmmmmmmmmmm');
    this.dataSource = new MatTableDataSource(this.appointment);
    // this.successMsg = 'Successfully cancelled the appointement';
    window.location.reload();

  }
  onEdit(appointmentId: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '30%';
    dialogConfig.autoFocus = true;
    this.dialog.open( AppointmentupdateComponent, dialogConfig);
    this.appser.appointmentId = appointmentId;
  }
    SendSms(){
    this.appser.Appointmentreminde().subscribe();
  }
  n: boolean = false;
  Tips(){
    this.appser.SomeTips().subscribe();
    this.n = true;
  }
}
