import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'ui-alert',
  templateUrl: './ui-alert.component.html',
  styleUrls: ['./ui-alert.component.scss'],
})
export class UiAlertComponent implements OnInit {
  /* This component is meant to be used in a modal context for now. Future refactor could expand the use case */
  @Input() title = '';
  constructor(
    private matDialogRef: MatDialogRef<UiAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.title = this.data.title;
  }

  close(): void {
    this.matDialogRef.close();
  }
}
