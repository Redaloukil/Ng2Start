import {CanActivate} from '@angular/router';

import { Observable , pipe} from 'rxjs';

export class Authenticated implements CanActivate {
    canActivate(): Observable<boolean> | boolean {
        return false;
    }
}