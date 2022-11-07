import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UiAlertConfig } from '../../model';

@Component({
  selector: 'ui-alert',
  templateUrl: './ui-alert.component.html',
  styleUrls: ['./ui-alert.component.scss'],
})
export class UiAlertComponent implements OnInit {
  /* This component is meant to be used in a modal context for now. Future refactor could expand the use case */
  config: UiAlertConfig = new UiAlertConfig();

  constructor(
    private matDialogRef: MatDialogRef<UiAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UiAlertConfig
  ) {}

  ngOnInit(): void {
    this.config = { ...this.config, ...this.data };
  }

  close(): void {
    this.matDialogRef.close();
  }
}
