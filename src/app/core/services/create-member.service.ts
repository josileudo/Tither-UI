import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import * as uuid from 'uuid';

import {
  CreateMemberModel,
  CreateMemberRequiredProps
} from '../models/interface/create-member.interface';

const BASE_URL = 'http://localhost:3000';
const HEADER = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CreateMemberService {
  private httpClient = inject(HttpClient);

  createMember(
    registerProps: CreateMemberRequiredProps
  ): Observable<CreateMemberModel> {
    const register: CreateMemberModel = {
      id: uuid.v4(),
      ...registerProps
    };

    return this.httpClient.post<CreateMemberModel>(
      `${BASE_URL}/register`,
      JSON.stringify(register),
      HEADER
    );
  }
}
