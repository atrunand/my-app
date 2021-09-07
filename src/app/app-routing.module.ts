import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //นำเข้าไฟล์RouterModuleและRoutesเพื่อให้แอปพลิเคชันมีฟังก์ชันการกำหนดเส้นทาง

const route: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(route)], //เนื่องจากคุณกำหนดค่า  router at the application's root level.
  exports: [RouterModule]
})
export class AppRoutingModule { }


