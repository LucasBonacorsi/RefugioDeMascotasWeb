import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MascotasService } from "../shared/mascotas.service";
import { Router } from "@angular/router";
import { CustomValidator } from 'src/app/validator/custom-validator';

@Component({
  selector: "app-mascotas-agregar",
  templateUrl: "./mascotas-agregar.component.html",
  styleUrls: ["./mascotas-agregar.component.css"]
})
export class MascotasAgregarComponent implements OnInit {
  
  constructor(
    private fb: FormBuilder,
    private mascotasService: MascotasService,
    private router: Router
  ) {}

  onSubmit() {
      this.mascotasService.addMascota(this.mascotaForm.value).subscribe(() => {
      this.router.navigate(["/mascotas-listar"]);
      });
  }

  reset() {
    this.mascotaForm.reset();
  }

  public mascotaForm = this.fb.group({
    nombre: ["", Validators.required],
    tipo: ["", Validators.required],
    edad: ["", [Validators.required, Validators.pattern("[0-9]+"), CustomValidator.ageValidator]],
    descripcion: ["", Validators.required]
  });

  ngOnInit() {}
}
