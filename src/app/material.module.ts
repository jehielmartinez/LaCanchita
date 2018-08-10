import { NgModule } from '@angular/core';
// tslint:disable-next-line:max-line-length
import {MatToolbarModule, MatIconModule, MatButtonModule} from '@angular/material';

const modules = [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
];

@NgModule({
    imports: modules,
    exports: modules
})

export class MaterialModule { }
