import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { EditComponent } from "./edit/edit.component";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { User } from "app/models/user";
import { AuthService } from "app/services/auth.service";
@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  listUsers!: User[];
  closeResult = "";

  constructor(private service: AuthService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.service.fetchUsers().subscribe((d) => {
      console.log(d);

      this.listUsers = d;
    });
  }

  open() {
    this.modalService
      .open(EditComponent, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
