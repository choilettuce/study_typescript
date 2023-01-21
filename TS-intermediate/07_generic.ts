// function printType(params:any) {
//     console.log(typeof params)
// }

// printType("random");
// printType(23);
// printType({})
interface IGene<T> {
    data :T;
}

function prt(params: IGene<string>) {
    console.log(typeof params.data);
}