import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MascotasService } from "../shared/mascotas.service";
import { Mascota } from "../shared/mascota";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-mascotas-editar",
  templateUrl: "./mascotas-editar.component.html",
  styleUrls: ["./mascotas-editar.component.css"]
})
export class MascotasEditarComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private mascotaService: MascotasService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public mascotaForm = this.fb.group({
    id: [""],
    nombre: ["", Validators.required],
    tipo: ["", Validators.required],
    edad: ["", Validators.required, Validators.pattern("[0-9]+")],
    descripcion: ["", Validators.required]
  });

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.mascotaService.getMascota(id).subscribe(data => {
      console.log(data);
      this.mascotaForm.setValue(data);
    });
  }

  onSubmit() {
    this.mascotaService
      .updateMascota(this.mascotaForm.value)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/mascotas-listar']);
      });
  }
}
