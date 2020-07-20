import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
    RouterModule.forChild([])
	],
  declarations: [],
  exports: [RouterModule]
})
export class UtilSharedModule {

}
