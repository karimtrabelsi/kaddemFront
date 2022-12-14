import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { EditComponent } from "./edit/edit.component";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { User } from "app/models/user";
import { AuthService } from "app/services/auth.service";
import { DeleteComponent } from "./delete/delete.component";
import { StorageService } from "app/services/storage.service";
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

  openDelete(user: any) {
    const modalRef = this.modalService.open(DeleteComponent);
    modalRef.componentInstance.user = user;
  }

  delete(id: number) {
    console.log(id);
    this.service.deleteUser(id).subscribe((d) => {
      //console.log(d);
    });
    //return this.service.deleteUser(id);
  }
}
