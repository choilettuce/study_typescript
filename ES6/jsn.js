const ob = {
    name : "lettuce",
    age : 30,
    uni : "sch",
    major : "sw"

};

console.log(ob?.country ?.hi);
console.log(ob.country ?? "seoul");
console.log(ob.country ? ob.country : "seoul");