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
    this.mascotasService.deleteMascota(id).subscribe();
    this.mascotas = this.mascotas.filter( mascota =>  mascota.id != id);

    console.log("borrado " + id);

  }
}