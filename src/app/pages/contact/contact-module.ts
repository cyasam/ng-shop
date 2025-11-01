import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Contact } from './contact';
import { Map } from '../../components/map/map';

@NgModule({
  declarations: [Contact, Map],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: Contact }])],
})
export class ContactModule {}
