import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Breed, Image } from '../interfaces/breed.interface';
import { environment } from 'src/environments/environment';

const base_url = `${environment.base_url}/breeds`;

@Injectable({
  providedIn: 'root',
})
export class BreedsService {
  // private apiUrl = 'https://api.thecatapi.com/v1';

  constructor(private http: HttpClient) {}

  public getAllBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(base_url);
  }

  // https://api.thecatapi.com/v1/images/search?breed_ids=beng&limit=10
  public getImagesByBreed(breedId: string): Observable<Image[]> {
    return this.http.post<Image[]>(`${base_url}/images`, { breedId });
  }

  // https://api.thecatapi.com/v1/breeds/search?q=American%20Shorthair&limit=10&page=1
  public getBreedsBySearch(search: string): Observable<Breed[]> {
    return this.http.post<Breed[]>(`${base_url}/search`, { search });
  }
}
