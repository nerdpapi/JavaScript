let input = prompt();
let scores = input.split(" ").map(Number);
function distributeGrade(scores) {
    let gradeCount = { A: 0, B: 0, C: 0, D: 0, F: 0 };
    for (let score of scores) {
        score >= 90 ? gradeCount.A++ : score >= 80 ? gradeCount.B++ : score >= 70 ? gradeCount.C++ : score >= 60 ? gradeCount.D++ : gradeCount.F++
    }
    return gradeCount;
}
console.log(distributeGrade(scores));
