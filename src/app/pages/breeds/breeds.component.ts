import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Breed } from 'src/app/interfaces/breed.interface';
import { BreedsService } from 'src/app/services/breeds.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styles: [],
})
export class BreedsComponent implements OnInit {
  constructor(private breedsService: BreedsService) {}

  @ViewChild('txtTagInput')
  public txtTagInput!: ElementRef<HTMLInputElement>;
  public listBreeds: Breed[] = [];

  ngOnInit(): void {}

  public searchBreed(): void {
    Swal.showLoading();
    const searchValues = this.txtTagInput.nativeElement.value;
    this.breedsService.getBreedsBySearch(searchValues).subscribe(
      (data) => {
        this.listBreeds = data;
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
