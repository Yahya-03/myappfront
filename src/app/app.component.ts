import { Component } from '@angular/core';
import { HelloWorldService } from './HelloWorldService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private helloWorldService: HelloWorldService) { }
  title = 'myapp';
  
  ngOnInit() {
    this.helloWorldService.executeHelloWorldService().subscribe((res) => {
      this.title = res.content;
    });

  
}
}

