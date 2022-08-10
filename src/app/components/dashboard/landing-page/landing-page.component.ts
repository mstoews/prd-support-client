import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable} from 'rxjs';
import { ScrollService } from 'app/services/scroll.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements OnInit {

  public testDocValue$: Observable<any> | undefined;

  constructor(
    private matDialog: MatDialog,
    private scrollTo: ScrollService) {}

  ngOnInit(): void {}

  onProducts() {
    console.log('Products');
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
  }

  // onEvent(){
  //   console.log('Event');
  //   const dialogRef = this.matDialog.open(DndComponent, {
  //     width: '500px',
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     //  console.log ('Just before update', result.data);
  //     if (result === undefined) {
  //       result = { event: 'Cancel' };
  //     }
  //     switch (result.event) {
  //       case 'Create':
  //         // private matDialog: MatDialog,this.create(result.data);
  //         break;
  //       case 'Cancel':
  //         break;
  //     }
  //   });
  // }

  login() {
    //this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    //this.auth.signOut();
  }

  // getData() {
  //    const ref = doc(this.firestore, 'test/1');
  //    this.testDocValue$ = docData(ref).pipe(
  //      traceUntilFirst('firestore')
  //    );
  // }

}
