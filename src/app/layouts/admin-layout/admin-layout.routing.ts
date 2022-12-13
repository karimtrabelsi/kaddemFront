import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { UsersComponent } from "app/pages/users/users.component";
import { ContractComponent } from "app/pages/contract/contract.component";
import { UniversiteComponent } from "app/pages/universite/universite.component";
import { ReclamationComponent } from "app/pages/reclamation/reclamation.component";
import { DepartmentComponent } from "app/pages/department/department.component";
import { CourseComponent } from "app/pages/course/course.component";
import { TrainingComponent } from "app/pages/training/training.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "tables", component: TablesComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapsComponent },
  { path: "users", component: UsersComponent },
  { path: "contracts", component: ContractComponent },
  { path: "reclamations", component: ReclamationComponent },
  { path: "universities", component: UniversiteComponent },
  { path: "departments", component: DepartmentComponent },
  { path: "courses", component: CourseComponent },
  { path: "trainings", component: TrainingComponent },
];
