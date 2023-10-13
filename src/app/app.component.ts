import { Component } from '@angular/core';
import { faker  } from '@faker-js/faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
randomText= faker.lorem.sentence();
enteredText='';
tugce="correct"


getInputValue(value : string){
  console.log(this.randomText.split(''));
this.enteredText=value;//Bravo yazısı güncellmek için
}
compore(randomLetter: string,enteredLetter: string){
if(!enteredLetter){
  return 'pending';
}
return randomLetter === enteredLetter  ? 'correct': 'incorrect'; 
}
}
