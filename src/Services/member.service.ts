import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Decorateur qui permet d'indiquer que le service accepte d'etre injecté (utilisé) dans autre
// service ou dans un composant
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http:HttpClient){ }


  // fonction qui envoie une requete en mode GET vers le backend
  GetAllMembers():Observable<any[]>
  {
    return this.http.get<any[]>("http://localhost:3000/member")
  }
  addMember(member:any): Observable<void> {
    return this.http.post<void>("http://localhost:3000/member", member);
  }
  deleteMemberById(memberId: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/member/${memberId}`);
  }
  getMemberByID(memberId:string):Observable<any>
  {
    return this.http.get<any>(`http://localhost:3000/member/${memberId}`)
  }
  
}
