import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-fire',
    templateUrl: './fire.component.html',
    styleUrls: ['./fire.component.scss']
})


export class FireComponent implements OnInit{
   

    constructor(private router: Router){}


    public ngOnInit(): void{
    }

}