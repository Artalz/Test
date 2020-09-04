// var brojac = 0;
// var t1 = setTimeout(prikazivreme, 1000, brojac);
// console.log(t1);

// function prikazivreme (primljenoOd){
//     console.log("Primljeno: " + primljenoOd);
//     var vreme = new Date();
//     vreme.getTime();
//     console.log(vreme.getHours() + ":" + vreme.getMinutes() + ":" + vreme.getSeconds());
//     if (brojac++ < 5)
//         t1 = setTimeout(prikazivreme, 1000, brojac);
//     else
//         clearTimeout(t1);
// }

// let brojac = 0;
// let t1 = setInterval(prikaziVreme, 1000, "Vreme:");
// console.log(t1);

// function prikaziVreme(poruka){
//     let vreme = new Date();
//     vreme.getTime();
//     console.log(poruka + vreme.getHours() + ":" + vreme.getMinutes() + ":" + vreme.getSeconds());
//     if(brojac++ > 10){
//         clearInterval(t1);
//     }
// }


// var events = require('events');
// var emitter = new events.EventEmitter();
// emitter.emit("myEvent");

const Events = require('events');
const em = new Events();

em.addListener('event1', function(data){
    console.log("Evidentiran event1, data=: " + data);
});

em.on('event2', function(data){
    console.log('Evidentiran event2, data=: ' + data);
});

em.once('event3', function(data){
    console.log('Evidentiran event3, data=: ' + data);
});

for (let i = 0; i < 3; i++){
    em.emit('event1', 'Emitujem prvi dogadjaj.', i);
    em.emit('event2', 'Emitujem drugi dogadjaj.', i);
    em.emit('event3', 'Emitujem treci dogadjaj.', i);
}