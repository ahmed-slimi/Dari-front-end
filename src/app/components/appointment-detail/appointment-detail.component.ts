import { Component, SimpleChanges, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Appointment } from 'src/app/models/Appointment.type';
@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppointmentDetailComponent  implements OnChanges {
  @Input() appointment: Appointment;
  @Input() isNew: boolean;
  @Output() close = new EventEmitter();
  @Output() add = new EventEmitter<Appointment>();
  @Output() update = new EventEmitter<Appointment>();
  form = this.formBuilder.group({
    title: [null, Validators.required],
    allDay: [null],
    start: [],
    end: []
  })
  constructor(private formBuilder: FormBuilder) { }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges.appointment && simpleChanges.appointment.currentValue) {
      this.form.patchValue({ ...this.appointment });
    }
  }

  onAdd(): void {
    const { end, start, title, allDay } = this.form.value;
    this.add.emit({ end: end && new Date(end), start: start && new Date(start), title, allDay });
  }

  onUpdate(): void {
    const { end, start, title, allDay, id } = this.form.value;
    this.update.emit({ id: this.appointment.id, end: end && new Date(end), start: start && new Date(start), title, allDay });
  }
}


