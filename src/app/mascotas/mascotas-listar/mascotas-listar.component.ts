import { Component, OnInit } from "@angular/core";
import { MascotasService } from "../shared/mascotas.service";
import { Mascota } from "../shared/mascota";
import { Router } from '@angular/router';

@Component({
  selector: "app-mascotas-listar",
  templateUrl: "./mascotas-listar.component.html",
  styleUrls: ["./mascotas-listar.component.css"]
})
export class MascotasListarComponent implements OnInit {
  public mascotas: Mascota[] = [];

  constructor(private mascotasService: MascotasService, private router: Router) {}

  ngOnInit() {
    this.mascotasService.getMascotas().subscribe(data => {
      this.mascotas = data;
    });
  }

  public delete(id: number){
    this.mascotasService.deleteMascota(id).subscribe( () => this.router.navigate(['/mascotas-listar']));
    console.log("borrado " + id);
  }
}