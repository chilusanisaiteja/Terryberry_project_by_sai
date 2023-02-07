/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { MyInfoRepositoryService } from 'src/app/Repositories/my-info.repository.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css'],
})
export class MyInfoComponent implements OnInit {
  text1 =
    'The greatest glory in living lies not in never falling, but in rising every time we fall.';
  text2 = 'The way to get started is to quit talking and begin doing.';
  text3 =
    "Keep smiling, because life is a beautiful thing and there's so much to smile about.";
  myInfo: any;
  myData: any;
  isLoading = true;
  hideRequiredControl = new FormControl(true);
  profileForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    college: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    pincode: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    intrests: new FormControl('', Validators.required),
  });
  constructor(private information: MyInfoRepositoryService) {}

  async ngOnInit() {
    (await this.information.getMyInfo()).subscribe((response) => {
      this.myInfo = response;
      this.myData = this.myInfo[0];
      this.profileForm.patchValue({
        name: this.myData.name,
        dob: this.myData.dob,
        city: this.myData.city,
        state: this.myData.state,
        pincode: this.myData.pincode,
        college: this.myData.college,
        mobile: this.myData.mobile,
        email: this.myData.email,
        intrests: this.myData.intrests,
      });
    });
    this.isLoading = false;
  }
}
