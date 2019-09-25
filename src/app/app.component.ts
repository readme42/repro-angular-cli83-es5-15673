import {Component} from '@angular/core';

interface TestData {
  [day: string]: number[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  public data: TestData;

  constructor() {
    const testData: TestData = {
      shouldContain1234: [1, 1, 2, 2, 3, 3, 4, 4],
      shouldContain567: [5, 6, 7]
    };

    // this basically removes duplicates ... just for demonstration purposes
    for (const key in testData) {
      if (testData.hasOwnProperty(key)) {
        testData[key] = [...new Set(testData[key])];
      }
    }

    this.data = testData;

  }

}
