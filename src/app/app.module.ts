import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const firebaseConfig = {
  apiKey: 'AIzaSyBZFZPoGkivwmfNon6RSsqdArc014CctEg',
  authDomain: 'loginapp-44c39.firebaseapp.com',
  projectId: 'loginapp-44c39',
  storageBucket: 'loginapp-44c39.appspot.com',
  messagingSenderId: '861836385546',
  appId: '1:861836385546:web:3315c151693ea111de6ef3',
  measurementId: 'G-ESY32YTDE5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
