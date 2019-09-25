Run `npm start` and test the es5 build. This will internally run `ng build` and then start a `http-server` to deliver the dist folder 



Instead if an array of numbers, it contains an empty object


The ES2015 build shows: 
```
 {
  "shouldContain1234": [
    1,
    2,
    3,
    4
  ],
  "shouldContain567": [
    5,
    6,
    7
  ]
} 
```

Ths ES5 build shows: 
```
 {
  "shouldContainer1234": [
    {}
  ],
  "shouldContainen567": [
    {}
  ]
} 
```
