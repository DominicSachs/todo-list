import { NgModule } from '@angular/core';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatButtonModule } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule
    ]
})
export class MaterialModule { }
