import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiEndpoints } from 'src/app/core/constants/api-endpoints.constants';
import { ODataValue } from 'src/app/core/models/odata-value';
import { IShelf } from '../../models/shelf';

@Injectable({
  providedIn: 'root'
})
export class ShelfsService {

  constructor(private readonly http: HttpClient) { }

  public getAllByVerticalSectionId(id: number): Observable<IShelf[]> {
    return this.http.get<ODataValue<IShelf>>(`${ApiEndpoints.Shelfs}?$filter=VerticalSectionId eq ${id}&$expand=Address`)
      .pipe(map((odataValue: ODataValue<IShelf>) => odataValue.value));
  }
}
