// export class LikesComponent{
//     private _likeCnt: number;
//     private _isClicked: boolean;

//     constructor(likeCnt: number, clickState: boolean){
//         this._likeCnt = likeCnt;
//         this._isClicked = clickState;
//     }

//     onClick(){
//         if(this._isClicked == false){
//             this._isClicked = true;
//             this._likeCnt += 1;
//         }else{
//             this._isClicked = false;
//             this._likeCnt -= 1;
//         }
//     }

//     get likeCnt(){
//         return this._likeCnt;
//     }

//     get isClicked(){
//         return this._isClicked;
//     }
// }

// pro users
class LikesComponent{
    constructor(private _likeCnt: number, private _isClicked: boolean){
    }
    onClick = ()=>{
        this._likeCnt += (this._isClicked) ? -1 :+1;
        this._isClicked = !this._isClicked;
    }

    get likeCnt(){
        return this._likeCnt;
    }
    get isClicked(){
        return this._isClicked;
    }
}


// calling
let comp = new LikesComponent(10, true);
comp.onClick();
console.log(`current likes= ${comp.likeCnt}`)
console.log(`current state= ${comp.isClicked}`)

