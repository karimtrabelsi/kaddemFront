import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"],
})
export class EditComponent implements OnInit {
  constructor(private _NgbActiveModal: NgbActiveModal) {}

  ngOnInit(): void {}
  get activeModal() {
    return this._NgbActiveModal;
  }
}
