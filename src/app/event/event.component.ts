import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Evt } from 'src/Modeles/Evt';
import { EventService } from 'src/Services/event.service';
import { ModalEvtComponent } from '../modal-evt/modal-evt.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit,AfterViewInit{
  constructor(private ES:EventService, private dialog:MatDialog){}
  dataSource: MatTableDataSource<Evt>= new MatTableDataSource<Evt>();
  displayedColumns: string[] = ['id', 'title', 'dateDebut', 'dateFin', 'lieu'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(){
    this.fetchData()
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  fetchData():void{
      this.ES.GetAllEvent().subscribe((data)=>{
        this.dataSource.data = data;
      })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  open():void{
    let dialogRef = this.dialog.open(ModalEvtComponent, {
      height: '600px',
      width: '500px',
    });
  }




}
