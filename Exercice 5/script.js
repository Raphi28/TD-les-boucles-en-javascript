let tableau = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"]
let index = 0;

for (let value of tableau){
    console.log(value);
    console.log(tableau[tableau.length - 1 - index]);
    index++;
}