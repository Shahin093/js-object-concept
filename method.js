const student = {
    id: 101,
    balance: 15000,
    name: 'kibri',
    major: 'methmetics',
    subjects: ['english', 'economic', 'math 101', 'calbulus'],
    isRish: false,
    bestFriend: {
        name: 'kundu',
        major: 'mathmetics',
        mejorWise: function () {
            console.log(this.major);
        }
    },
    takeExam: function () {
        console.log(this.name, 'Taking exam');
    },
    treatDey: function (expense, boksis) {
        this.balance = (this.balance - expense - boksis);
        return this.balance;
    }
}
student.takeExam();
console.log(student.treatDey(900, 100));
console.log(student.treatDey(500, 50));
student.bestFriend.mejorWise();