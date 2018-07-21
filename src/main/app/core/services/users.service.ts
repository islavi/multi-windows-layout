
import { Injectable } from '@angular/core';
import { Const } from '../const';
import { User } from '../models/users.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';

@Injectable()
export class UsersService extends BaseService {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  getUsers = (): Promise<User[]> => {
    const promise = new Promise<User[]>((resolve, reject) => {
      const apiURL = `${Const.serverURL}/v1/users`;
      this.loading = true;

      this.httpClient.get(apiURL, { observe: 'response', headers:  new HttpHeaders().set('Authorization', this.fullUserToken)})
          .toPromise()
          .then(
            res => { // Success
                  this.loading = false;
                  resolve(<User[]>res.body);
              }
          )
          .catch(err => {
              reject(err.error || 'Server error');
          });

    })
    return promise;
  }

  createUser = (user: User): Promise<User> => {
    const promise = new Promise<User>((resolve, reject) => {
      const apiURL = `${Const.serverURL}/v1/auth/create`;
      this.loading = true;

      this.httpClient.post(apiURL, user, { observe: 'response' })
          .toPromise()
          .then(
            res => { // Success
                  this.loading = false;
                  resolve(<User>res.body);
              }
          )
          .catch(err => {
              reject(err.error || 'Server error');
          });

    })
    return promise;
  }

  updateUser = (user: User): Promise<User> => {
    const promise = new Promise<User>((resolve, reject) => {
      const apiURL = `${Const.serverURL}/v1/users/update`;
      this.loading = true;

      this.httpClient.put(apiURL, user, { observe: 'response', headers:  new HttpHeaders().set('Authorization', this.fullUserToken)})
          .toPromise()
          .then(
            res => { // Success
                  this.loading = false;
                  resolve(<User>res.body);
              }
          )
          .catch(err => {
              reject(err.error || 'Server error');
          });

    })
    return promise;
  }

}
