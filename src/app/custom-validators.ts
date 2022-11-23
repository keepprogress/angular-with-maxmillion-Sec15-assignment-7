import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

export class CustomValidators {
  static forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Test') {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  static asyncForbiddenProjectNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Testproject') {
          resolve({'nameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
