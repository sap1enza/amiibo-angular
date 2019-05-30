import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Amiibo } from '../../models/Amiibo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AmiiboService {

  url: string = 'https://www.amiiboapi.com/api/amiibo';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(this.url)
      .pipe(map(datas =>
        datas.amiibo.map((amiibo) => new Amiibo(
          amiibo.name,
          amiibo.character,
          amiibo.amiiboSeries,
          amiibo.gameSeries,
          amiibo.image,
          amiibo.release,
        ))
      )
    );
  }
} 
