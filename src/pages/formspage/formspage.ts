import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DetailsPage } from '../details/details'

/**
 * Generated class for the FormspagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formspage',
  templateUrl: 'formspage.html',
})
export class FormspagePage {

  private todo : FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private formBuilder: FormBuilder ) {

      this.todo = this.formBuilder.group({
        title: ['', Validators.required],
        email: ['', Validators.required],
      });
  }

  logForm() {
    console.log(this.todo.value)
    this.navCtrl.push('DetailsPage',{'val':this.todo.value});
  }

  

}
