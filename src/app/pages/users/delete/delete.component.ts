import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { AuthService } from "app/services/auth.service";
import { UserService } from "app/services/user.service";

@Component({
  selector: "app-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["./delete.component.scss"],
})
export class DeleteComponent implements OnInit {
  constructor(public modal: NgbActiveModal, private service: AuthService) {}
  @Input() user: any;
  ngOnInit(): void {}

  delete(id: number) {
    console.log(id);
    this.service.deleteUser(id).subscribe((d) => {
      this.modal.close;
      //console.log(d);
    });
    //return this.service.deleteUser(id);
  }
}
