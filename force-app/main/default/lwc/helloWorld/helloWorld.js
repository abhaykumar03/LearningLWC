import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement 
{
    fullName = 'Abhay Kumar'
    role='Salesforce devloper'
    userList = ['Abhay','Rishi','Hemantha']
    //*@track Example Explained
    // @track address={
    //     city:'Noida',
    //     pincode: 201301,
    //     state:'Uttar Pradesh'
    // }
    address={    //avoiding data mutation by using spread operator in the trackHandler method
        city:'Noida',
        pincode: 201301,
        state:'Uttar Pradesh'
    }
    @track userList = ["Akki","Avi","Sai"]
           //userList = ['Akki','Avi','Sai']

    changeHandler(e)
    {
        console.log('validating event data type'+typeof(e));  //cheking the datatype of event e
        this.role = e.target.value;
    }
    trackHandler(e)
    {
        //this.address.city = e.target.value; //we r updating the property(city) of the address object
        this.address = {...this.address, "city":e.target.value}
        this.userList[1] = "Ankita"; 
        //this.userList = {...this.userList, "userList[1]":"The Animal"};  tried using the spread operator but output is [object object] research it

    }

    //Getter Example
    num1 = 10; num2=20;
    get firstUser(){
       return this.userList[1].toUpperCase();  //getter method always returns something.....it's very important line
    }
    get multiplyNos(){
        return this.num1 * this.num2;
    }


}