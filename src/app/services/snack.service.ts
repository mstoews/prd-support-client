import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SnackService {
  constructor(private snackBar: MatSnackBar, private router: Router) {}

  httpMessageSent(partyRef: string) {
    this.snackBar.open('Message Sent to GLOSS: ' + partyRef, '', {
      duration: 3000,
    });

    const rc = this.snackBar._openedSnackBarRef

    if ( rc != null ) {
        return rc.onAction().subscribe();
    }
    else {
        return null;
    }

  }

  authError() {
    this.snackBar.open('You must be logged in!', 'OK', {
      duration: 3000,
    });
    const rc = this.snackBar._openedSnackBarRef
    if ( rc != null ) {
      return rc.onAction().pipe(tap((_) => this.router.navigate(['/user/login']))).subscribe();
    }
    else {
      return null;
    }
  }


  showMessage(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000,
    });
  }
}
