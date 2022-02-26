const Kibria = {
    id: 101,
    money: 15000,
    name: 'kibri',
    treatDey: function (expense) {
        this.money = (this.money - expense);
        console.log(this);
    }
}
const herobalam = {
    id: 102,
    money: 6000,
    name: "hero Balam",
}
const heroTreatDay = Kibria.treatDey.bind(herobalam);
heroTreatDay(1000);

