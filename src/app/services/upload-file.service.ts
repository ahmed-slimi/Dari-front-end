import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ad} from "../models/Ad";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  private url = environment.serverURL;

  constructor(private http: HttpClient) { }

  upload(file: File, type: string, Ad: Ad): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('imageFile', file);
    formData.append('ad', JSON.stringify(Ad));

    const req = new HttpRequest('POST', `${this.url}dari/imgads/upload/` + type, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
  getFiles(): Observable<any> {
    return this.http.get<Ad>(`${this.url}dari/imgads/all`);}
}
