import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { ObservableComponent } from './observable/observable.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'observable',component:ObservableComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'update',component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
