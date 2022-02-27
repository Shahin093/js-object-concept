const Kibria = {
    id: 101,
    money: 15000,
    name: 'kibri',
    treatDey: function (expense, boksis, tax) {
        this.money = (this.money - expense - boksis - tax);
        console.log(this);
    }
}
const herobalam = {
    id: 102,
    money: 6000,
    name: "hero Balam",
}
Kibria.treatDey.apply(herobalam, [500, 100, 50]);
Kibria.treatDey.apply(herobalam, [1000, 200, 100]);



// Kibria.treatDey.call(herobalam, 500, 100, 50);
// Kibria.treatDey.call(herobalam, 300, 50, 30);


