import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { User } from './model/user';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  //http: any;
  //public httpClient: HttpClient
 
  constructor( private http:HttpClient) { }

  getTops(): Observable<any>{
    return this.http.get('http://localhost:3000/tops')
  }

  public searchResults(query:String):Observable<any>{
    console.log("Inside all Artists");
    return this.http.get("http://api.napster.com/v2.2/search?apikey=OTE4ZGU3ZDktY2VhYi00MmQxLTk1MTgtZWJjNGI0OWIyODFj&per_type_limit=5&query="+query+"&format=json");
  }
  public getimageobj(link:string):Observable<any>{
    return this.http.get(link+"?apikey=OTE4ZGU3ZDktY2VhYi00MmQxLTk1MTgtZWJjNGI0OWIyODFj");
  }

  public loginUserFromRemote(user:User):Observable<any>{
    return this.http.post<any>("http://localhost:8090/login", user);

  }
  public registerUserFromRemote(user:User):Observable<any>{
    return this.http.post<any>("http://localhost:8090/registeruser", user);

  }
  /*public searchResults(query:String):Observable<any>{
    console.log("Inside all Artists");
    return this.http.get("http://api.napster.com/v2.2/search?apikey=OTE4ZGU3ZDktY2VhYi00MmQxLTk1MTgtZWJjNGI0OWIyODFj&per_type_limit=5&query="+query+"&format=json");
  console.log("returning api");
  }*/

  
}

