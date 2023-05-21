import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
public cities: any = ["--select--", "Amritsar", "Faridabad", "Jaipur", "Chennai", "Mumbai", "Ludhiyana", "Mohali", "Banglore", "Delhi NCR", "Kolkata", "Noida", "Gurgaon" ]


public languages:any =["English", "Hindi", "Punjabi", "Marathi", "Kannada", "Bengali", "Tamil"]

public hospitals: any = ["Hospitals"]

public Specialities: any = ["Specialities"]

constructor(){}

onAmbulance(){
    prompt(
            
    )
}

onSearchBar(){
  prompt(
            
    )
}
}

