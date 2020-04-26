//post

let drink = 0;

function shoot(arrow) {
    console.log('вы сделали выстрел...');
    let promise = new Promise(function(resolve,reject) {
        setTimeout(function(){
        Math.random() > .5 ? resolve({}) : reject('Вы промахнулись');
        }, 3000);
    });
   
    return promise;
}

function win() {
    console.log("вы победили" );
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer() {
    console.log("вам купили пиво");
}

function giveMoney() {
    Console.log("вам дали денег");
}

function loose() {
    console.log("вы Проиграли" );
}

shoot({})
        .then(merk => console.log('вы попали'))
        .then(win)
        .catch(loose)



    


/*before

let drink = 1;

function shoot(arrow, headshot, fail) {
    console.log('вы сделали выстрел...');
    
    setTimeout(function(){
        Math.random() > .5 ? headshot({}) : fail('Вы промахнулись');
    }, 3000);
}

function win() {
    console.log("вы победили" );
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer() {
    console.log("вам купили пиво");
}

function giveMoney() {
    Console.log("вам дали денег");
}

function loose() {
    console.log("вы Проиграли" );
}

shoot({},
        function(mark) {
            console.log('вы папали в цель');
            win(mark, buyBeer, giveMoney);
        },
        function(miss) {
            console.error(miss);
            loose();
        } 
    )*/