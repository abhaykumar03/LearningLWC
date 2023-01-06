import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isVisible = false;
    name;
    array =[];  
    handleClick(){
        this.isVisible = true;
    }
    changeHandler(e){
        this.name = e.target.value;
    }
    get vamosMethod(){
        return this.name === "vamos";
    }
}