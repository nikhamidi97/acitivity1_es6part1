const readline = require('readline');

const rl = readline.createInterface({

input: process.stdin,

output: process.stdout

});

class Bmi{
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }
};

var person1 = new Bmi();

rl.question('Please enter your Height(cm):', (answer1) => {
    rl.question('PLease enter your Weight(kg):', (answer2) =>{
        person1.height=answer1;
        person1.weight=answer2;
        x(person1.height,person1.weight);
        rl.close();
    });
    
} );
function x(h,w){
    let cal = (w/h/h)*10000;
    
    if (cal<18.5){
        cater = 'Underweight';
    }
    else if (cal>18.5 && cal<25) {
        cater= 'Normal';
    } else {
        cater = 'Overweight';
    };
    console.log('BMI: ' + cal.toFixed(2));
    console.log('Category: ' + cater);
};