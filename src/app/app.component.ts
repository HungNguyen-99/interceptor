import { Component } from '@angular/core';
import { ServiceJsonService } from './service-json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private dataService: ServiceJsonService){}

  ngOnInit(): void {
    this.dataService.getMovies().subscribe((data)=>{
      console.log('appComponent', data);
    });
  }
}
