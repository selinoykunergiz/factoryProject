import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-causes',
    templateUrl: './causes.component.html',
    styleUrls: ['./causes.component.scss']
})


export class CausesComponent implements OnInit{
   

    constructor(private router: Router){}


    public ngOnInit(): void{
    }

}