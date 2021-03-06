import { NgModule } from '@angular/core';
// tslint:disable-next-line:max-line-length
import {MatToolbarModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatAccordion, MatExpansionModule, MatGridListModule, MatSelectModule, MatMenuModule, MatTooltipModule, MatRadioModule, MatCheckboxModule} from '@angular/material';

const modules = [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    MatSelectModule,
    MatMenuModule,
    MatTooltipModule,
    MatRadioModule,
    MatCheckboxModule
];

@NgModule({
    imports: modules,
    exports: modules
})

export class MaterialModule { }
