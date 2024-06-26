import { Component, OnInit } from '@angular/core';
import { BreedsService } from 'src/app/services/breeds.service';
import { Breed, Image } from 'src/app/interfaces/breed.interface';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
})
export class DashboardComponent implements OnInit {
  public breeds: Breed[] = [];
  public breedImages: Image[] = [];
  public selectedBreed: Breed | undefined;
  public errorMessage: string = '';

  constructor(private breedsService: BreedsService) {}

  ngOnInit(): void {
    this.loadBreeds();
  }

  public loadBreeds(): void {
    this.breedsService.getAllBreeds().subscribe((data: Breed[]) => {
      this.breeds = data;
      console.log(this.breeds.length);
    });
  }

  public onSelectBreed(id: string): void {
    Swal.showLoading();
    this.selectedBreed = this.breeds.find((breed) => breed.id === id);

    this.breedsService.getImagesByBreed(id).subscribe(
      (data: Image[]) => {
        this.breedImages = data;
        Swal.close();
      },
      (error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
    );
  }
}
