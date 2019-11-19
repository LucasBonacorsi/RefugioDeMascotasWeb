import { AbstractControl } from "@angular/forms";

export class CustomValidator {
  static ageValidator: any;
  ageValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (
      control.value !== null &&
      (isNaN(control.value) || control.value < 0 || control.value > 120)
    ) {
      return { ageValidator: true };
    }
    return null;
  }
}
