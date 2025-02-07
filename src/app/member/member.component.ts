import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit{
  dataSource: any[] = [];


  // injection de dependances
  constructor(private MS:MemberService){}

  ngOnInit(){
    this.MS.GetAllMembers().subscribe((a)=>{
      this.dataSource=a
    })
  }
  displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'createdDate','icon'];
}
