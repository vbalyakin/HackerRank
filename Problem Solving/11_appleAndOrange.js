// Задачка про то, сколько яблок и апельсинов упадёт в "интервал дома" (s,t) по оси Х,
// если заданы координаты деревьев (a,b) и массивы с координатами падения фруктов (apples, oranges)

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleTree = 0,
        orangeTree = 0;
    for (const item of apples) {
        appleTree = (a + item >= s) && (a + item <= t) ? ++appleTree : appleTree; 
    }
    for (const unit of oranges) {
        orangeTree = (b + unit >= s) && (b + unit <= t) ? ++orangeTree : orangeTree;
    }
    console.log(appleTree);
    console.log(orangeTree);
}
