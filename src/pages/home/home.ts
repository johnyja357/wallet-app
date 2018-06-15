import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  balanceInputA:any;
  balanceInputB:any;
  walletA:number=100;
  walletB:number=0;
  history=[];

  constructor(public navCtrl: NavController) {
    
  }

  transfer(){
    if(this.balanceInputA<=this.walletA && this.balanceInputA !== "0"){
      this.walletA -= parseInt(this.balanceInputA.toString());
      this.walletB += parseInt(this.balanceInputA.toString());

      this.history.push({
        amount:this.balanceInputA,
        type:"Transfer",
        source:"A",
        destination:"B"
      });

    }
    else{
      alert("You can't transfer $" + this.balanceInputA + ".");
    }

    //Reset Input Boxes
    this.reset();
  }

  refund(){
    if(this.balanceInputB<=this.walletB && this.balanceInputB !== "0"){
      this.walletB -= parseInt(this.balanceInputB.toString());
      this.walletA += parseInt(this.balanceInputB.toString());

      this.history.push({
        amount:this.balanceInputB,
        type:"Refund",
        source:"B",
        destination:"A"
      });
        
    }
    else{
      alert("You can't transfer $" + this.balanceInputB + ".");
    }

    //Reset Input Boxes
    this.reset();
  }

  reset(){
    this.balanceInputA = "";
    this.balanceInputB = "";
  }

  onlyNumbers(event){
    var key;  
    key = event.charCode;
    return(key >= 48 && key <= 57);
  }
}
