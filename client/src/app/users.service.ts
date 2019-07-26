// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UsersService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'http://localhost:3000/user';
  constructor(private http: HttpClient) { }
  addData(name,address,city,password,email,starting, Destination) {
      const obj = {name,address,starting,Destination,city,password,email};
      this
          .http
          .post(`${this.url}/add`, obj)
          .subscribe(res => console.log(res));
  }
  
  getData() {
      return(
      this
          .http
          .get(`${this.url}`)
      );
  }



  
  up_DataS(work,contact,Starting, Destination) {
    const obj = {work,contact,Starting,Destination};
    this
        .http
        .post(`${this.url}/add`, obj)
        .subscribe(res => console.log(res));
}

up_DataR(work,contact,Starting, Destination) {
  const obj = {work,contact,Starting,Destination};
  this
      .http
      .post(`${this.url}/add`, obj)
      .subscribe(res => console.log(res));
}

  delData(id) {
      return this.http.get(`${this.url}/delete/${id}`).subscribe();
  }
  editData(id) {
    return this
            .http
            .get(`${this.url}/edit/${id}`);
    }


    up_data(work,contact, Starting,Destination, id) {

      const obj = {
          contact: contact,
          work: work,
          Starting: Starting,
          Destination: Destination
          
        };
      this
        .http
        .post(`${this.url}/update/${id}`, obj)
        .subscribe(res => console.log('res'));
    }
}
