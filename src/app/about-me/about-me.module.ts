import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyInfoComponent } from './my-info/my-info.component';
import { MatCardModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [MyInfoComponent],
  imports: [CommonModule, MatCardModule, ReactiveFormsModule, MatInputModule],
})
export class AboutMeModule {}
