let age: number = 20;
 if (age < 50)
    age += 10;
console.log(age);

//types of variable in typescreipt:
                    //number
let sales: number = 345                    //type of number with anotation
let sales2 = 345                           //type of number without anotation


                   //string
let course: string = 'Typescript'          //type of string without anotation
let course2 = 'Typescript'                  //type of string without anotation


                   //boolean
let is_published: boolean = true             // type of boolean with anotation
let is_published2 = true                    // type of boolean without anotation


                    //any
let level;                                  //type of any which can be assign to any typescript type
level = 1                                   //example of how to assign the any type to the level, and here it's change to number
level = 'String'                            //example of how to assign the any type to the level, and here it's changed to string

function render(document) {                  //this is wrong, always need to specify the type in a function including 'any type'
    console.log(document)
}
function render2(document: any) {             //this is wright, always need to specify the type in a function including 'any type'
    console.log(document)
}

                        //array
let typescreiptArray: number[] = [1, 2, 3]  //type of array with notation because the value inside the array are numbers
let typescreiptArray2 = [1, 2, 3]           //type of array without notation because the value inside the array are numbers
let typescreiptArray3 = []                  //type of array with any array like string, number, boolean e.t.c, becasue the value inside array is empty


                          //tuple
let user: [number, string, boolean] = [2, '4', true, 6]  //this is wrong, the type is tuple which means that the value must be exactly what is inside the 'type' which consist 3 values: number, string, boolean 
let user2: [number, string, boolean] = [2, '4', true]    //this is wright, the value is 3 with correct 'type' respectfully 


                            //enum
//enum 'type' is use to set a const/constant variable values which cannot be change, just like in javascript => const name = 'Eze'
const enum Size {Small = 30, Medium, Large}            //this is how enum looks with a 'type' of number, the rest values can be assign autamaticallly if the first value has been asigned by adding +1 to the first value
let mySize: Size = Size.Large                           //this is how we use the enum
console.log(mySize)

enum Size2 {Small = 's', Medium = 'm', Large = 'l'}      //enum with string value needs to have values in all the variables to avoid error


                            //function
const calculateTax = (income: number) =>{}                      //in as much that the params return the number 'type', the function itself when hovered is void which means it can return any 'type'
const calculateTax2 = (income: number) : number => {return 0}   //this shows that the params and return of this function is number
const calculateTax3 = (income: string) : number => {return 0}   //this shows that the params is string and return of this function is number e.t.c
const calculateTax4 = (income: number) : number =>{             //solving all the decleared and unsed params, variables and types  
    if(income > 100)
        return income + 2;
    return income + 1
    } 
const calculateTax5 = (income: number, taxYear?: number) : number =>{   //more than 1 params can also be passed inside function, 
if(taxYear > 100)                                                       // ? can be add infront of the params to avoid params not used error, 
    return income + 2;                                                  //but the ? in front of the params can also give error if not asign a value as shown on line 63,
return income + 1                                                       // to stop this, a value can be asign to the params direct inside the params bracket
} 
calculateTax5(10_000, 2022)

const calculateTax6 = (income: number, taxYear = 2023) : number =>{      //more than 1 params can also be passed inside function, 
    if(taxYear > 2022)                                                       // ? can be add infront of the params to avoid params not used error, 
        return income + 2;                                                 //but the ? in front of the params can also give error if not asign a value  as shown on line 63,
    return income + 1                                                      // to stop this, a value can be asign to the params direct inside the params bracket
    } 
calculateTax6(5000)



                           //object
let employee: {readonly id: number, name: string} = {id: 1, name: 'Eze'}     //this 'type' is an object
                                                                             // the id value can been mistakenly change which is not good
                                                                             // in order to prevent this, add 'readonly' in front of the id inside the type

              
type Employee = {                      //defining object type allies in order to be reuse everywhere
    readonly id: number,            
     name: string,                  
    retire: (date: Date) => void
}

 let employee2: Employee = {
    id: 1,
     name: 'Eze',
    retire: (date: Date) => {
        console.log(date)
    }
    }    

    

    // union type
const kgWeight = (weight: number | string) => {
    //narrowing down the weight in order to determine if it's number or string
    if(typeof weight === 'number')
        return weight + 10
    else
        return parseInt(weight) + 20   //parseInt converted the string into number
}
kgWeight(4)
kgWeight('30kg')



//intersection type
type Count = {
    all: () => void
}

type Sum = {
    together: () => void
}

type Join = Count &  Sum

let calculations: Join = {
    all: () => {},
    together: () => {}
}



//literal type, asigning exact value to a variable without able to change it
type name = 'Eze' | 'Anthony'
let fullName: name = 'Eze'         // play around by editing the 'Eze' on line 134

type Option = true | false
let isTrue: Option = false         //play around by editing the 30 on line 137

type Age = 30 | 35
let correctAge: Age = 35          //play around by editing the 30 on line 137



//how to use null or undefined with the help of union value
let mix = (name: string | null | undefined) =>{
    if(name)
        console.log(name.toUpperCase())
    else
        console.log('hello')
}
mix(null)



// optional chaining
type Customer ={
    birthday: Date
}

const getCustomer = (id: number) : null | Customer =>{
    return id === 0 ? null : {birthday: new Date()}
}

const customer = getCustomer(0)
    console.log(customer?.birthday)
