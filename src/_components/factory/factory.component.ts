import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/_shared/_models/user';
import  *  as  user  from '../../_files/user.json'; 
import  *  as  siradakiIsEmri  from '../../_files/siradaki-is-emri.json'; 
import  *  as  gerceklesenIsEmri  from '../../_files/gerceklesen-is-emri.json'; 
import { SiradakiIsEmri } from 'src/_shared/_models/siradaki-is-emri';
import { GerceklesenIsEmri } from 'src/_shared/_models/gerceklesen-is-emri';
import { RouterModule, Router } from '@angular/router';

@Component({
    selector: 'app-factory',
    templateUrl: './factory.component.html',
    styleUrls: ['./factory.component.scss']
})


export class FactoryComponent implements OnInit{
    userData: User[];
    userOperation: User[];
    nextJobData: SiradakiIsEmri[];
    nextRealizedData: GerceklesenIsEmri[];

    constructor(private router: Router){}


    public ngOnInit(): void{
    let products: User[] = (user as any).default;
    let nextJobs: SiradakiIsEmri[] = (siradakiIsEmri as any).default;
    let realizedJobs: GerceklesenIsEmri[] = (gerceklesenIsEmri as any).default;

    this.userData = products.filter(x => x.ID == 1);
    this.userOperation = products.filter(x=> x.ID == 2);
    this.nextJobData = nextJobs.filter(x=> x.ID == x.ID);
    this.nextRealizedData = realizedJobs.filter(x=> x.ID == x.ID);
    }

}