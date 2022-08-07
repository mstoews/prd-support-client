import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { DndComponent } from '../loaddnd/dnd.component';
import { traceUntilFirst } from '@angular/fire/performance';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { ScrollService } from 'app/services/scroll.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements OnInit {

  public testDocValue$: Observable<any> | undefined;

  constructor(
    private  router: Router,
    private matDialog: MatDialog,
    private firestore: Firestore,
    private scrollTo: ScrollService) {}

  ngOnInit(): void {}

  onProducts() {
    console.log('Products');
    this.router.navigate(['products']);
  }

  scrollToId(id: string) {
    console.log("element id : ", id);
    this.scrollTo.scrollToElementById(id);
    if (id === 'hero') {
      window.scrollTo(0, 0)
    }
  }

  navigateTo(path: string) {
    console.log('Navigate to ', path);
    this.router.navigate([path]);
  }

  onEvent(){
    console.log('Event');
    const dialogRef = this.matDialog.open(DndComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      //  console.log ('Just before update', result.data);
      if (result === undefined) {
        result = { event: 'Cancel' };
      }
      switch (result.event) {
        case 'Create':
          // private matDialog: MatDialog,this.create(result.data);
          break;
        case 'Cancel':
          break;
      }
    });
  }

  login() {
    //this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    //this.auth.signOut();
  }

  getData() {
     const ref = doc(this.firestore, 'test/1');
     this.testDocValue$ = docData(ref).pipe(
       traceUntilFirst('firestore')
     );
  }

}
