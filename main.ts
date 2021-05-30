// to check whetther js works or not

// function log(message){
//     console.log(message);
// }

// var a = "hello-dude"
// log(a);


// let vs var

// function doSomething(){
//     for(var i=0; i<5; i++){
//         console.log(i);
//     }
//     console.log("Finally:", i);
// }
// doSomething();

// function doSomething2(){
//     for(let i=0; i<5; i++){
//         console.log(i);
//     }
// }
// doSomething2();


// types

// let b: number;
// let c: boolean;
// let d: string;
// let e: any;
// let f: number[] = [1,3,4,2];
// let g: any[] = [1, true,'a'];

// enum Color {Red =0 , Green= 1, Blue= 2, purple=3};
// let backgroundColor = Color.Green;

//Type Assertion
// let message= 'abc';
// let endWithC = (<string>message).endsWith('c');
// let alterWay = (message as string).endsWith('c');

// console.log(endWithC);
// console.log(alterWay);

// Arrow function

// let doLog = (message) => {
//     console.log(message);
// }

// Interfaces
// interface Point{
//     x: number,
//     y: number
// }
// var p:Point ={
//     x: 2,
//     y: 4
// }

// let drawPoints = (point: Point) => {
//     console.log(point.x);
//     console.log(point.y);
// }

// class

// class Point{ 
//  x: number;
//  y: number;

//  draw(){
//     console.log("X:"+ this.x + ", Y:" + this.y);
//  }
//  getDistance(){

//  }
// }

// // object
// let point =  new Point();
// point.x = 2;
// point.y = 3;
// point.draw();


// Constructor

// class Point{ 
//     x: number;
//     y: number;

//     constructor(x?: number, y?: number){
//         this.x= x;
//         this.y= y;
//     }

//     draw(){
//        console.log("X:"+ this.x + ", Y:" + this.y);
//     }
// }

// let point  = new Point(2, 3);
// point.x = 3 //can access this
// point.draw();


// Access Modifier

// class Point{ 
//     private x: number;
//     private y: number;

//     constructor(x?: number, y?: number){
//         this.x= x;
//         this.y= y;
//     }

//     draw(){
//        console.log("X:"+ this.x + ", Y:" + this.y);
//     }
// }

// let point  = new Point(2, 3);
// point.x = 3; // cant accsess this due to private
// point.draw();

// Access modifier in constructor parameter

//  class Point{ 
//     //we dont need to define fields here
//         constructor(private x?: number,private y?: number){
//         }

//         draw(){
//            console.log("X:"+ this.x + ", Y:" + this.y);
//         }
//     }

// properties

class Point{ 
    //we dont need to define fields here
        constructor(private _x?: number,private y?: number){
        }

        draw(){
           console.log("X:"+ this._x + ", Y:" + this.y);
        }

        // getter
        get x(){
            return this._x  
        }

        // setter
        set x(val){
            if(val<0){
                throw new Error('val')
            }
            this._x = val;
        }
    }
 let point  = new Point(2, 3);
 point.x = 3; // cant accsess this due to private
 point.draw();
