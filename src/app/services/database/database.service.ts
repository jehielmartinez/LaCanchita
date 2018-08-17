import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from '../../../../node_modules/angularfire2/storage';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private angularFireStore: AngularFirestore, private storage: AngularFireStorage) { }
  complexRef = this.angularFireStore.collection('Complex');

  public uploadComplex(complex) {
    this.uploadFile(complex);
    complex.imageName = `complexImages/${complex.imageURL.files[0].name}`;
    complex.imageURL = '';
    this.complexRef.doc(complex.createdAt).set(complex)
      .then(function () {
        console.log('Complex succesfully stored on DB');
      })
      .catch(function (error) {
        console.error('Error Creating Complex: ', error);
      });
  }
  uploadFile(complex) {
    const file = complex.imageURL.files[0];
    const filePath = `complexImages/${complex.imageURL.files[0].name}`;
    const fileRef = this.storage.ref(filePath);
    this.storage.upload(filePath, file).then(() => this.getImageURL(fileRef, complex.createdAt));
  }
  getImageURL(fileRef, complexID) {
    let downloadURL: string;
    const t = this;
    fileRef.getDownloadURL().toPromise().then(function (url) {
      downloadURL = url;
      t.complexRef.doc(complexID).update({
        'imageURL': downloadURL
      });
      console.log(downloadURL);
    }).catch(function (error) {
      console.log(error);
    });
  }
}
