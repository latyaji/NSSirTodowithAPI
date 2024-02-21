// console.log("first")
// console.log("second")
// console.log("third")
// setTimeout(()=>{
//     console.log("I will come sfter 3333 second")
// },2000)
// console.log("fourth")
// console.log("fifth")

// function getData(did){
//     console.log("Id===>>"did)
// }
// getData(3)

// function getData(dataId, getCallback) {
//   setTimeout(() => {
//     console.log('data1===>>', dataId);
//     if (getCallback) {
//       getCallback();
//     }
//   }, [2000]);
// }

// getData(
//   1,
//   () => {
//     getData(2);
//   },
//   () => {
//     getData(3);
//   },
// );

// function callbacks1(c) {
//   console.log('yes i am callback here', c);
// }

// function sum(a, b, ...callbackfun) {
//     console.log("thhhhh", ...callbackfun)
//   setTimeout(() => {
//     // if (callbackfun) {
//     //   callbackfun();
//     // }
//     if (callbackfun.length > 0) {
//         callbackfun.forEach(callbackfun => callbackfun());
//       }
//   }, [2000]);
//   console.log(a, b);
// }

// sum(1, 2, () => {
//   callbacks1(15);
// },() => {
//     callbacks1(3);
//   }
//   );

// function asyncfunction2(){
//     return new Promise(function(resolved,reject){
//         setTimeout(()=>{
//             console.log("2nd wala function") //5
//             resolved("result aayyy3333333")
//         },[2000])
//     })
// }

// function asyncfunction(){
//     return new Promise(function (resolved, reject) {
//         setTimeout(()=>{
//             console.log("dat1111") // 5
//             resolved("result aayyy000000")
//         },[2000])

//     });
// }
// console.log("fetching data ------") // 1
// const p1 = asyncfunction()
// p1.then((res)=>console.log("responseee000",res))
// console.log("p1@@@@",p1) // 2

// console.log("fecthging data ==== >>>> asyncfunction2") // 3
// const p2 = asyncfunction2()
// console.log("p22222",p2) // 4

// let a = ['shiv', 'gol', 'ten', 'men', 'ff'];

// for (let el in a) {
//   console.log('el@@@@', el);
// }

// const checkdiffrence = () => {
//   for (let i = 0; i < a.length; i++) {
//     let diff = 1;
//     // console.log("yhhh",a[i]+1 - a[i])
//     const mising = []
//     if (a[i]+1 - a[i] !== diff) {

//         console.log(mising.push(a[i]))
//      //return a[i];
//     }
//     else{
//         console.log(a[i])
//     }
//   }
// };

// const data = checkdiffrence();
// console.log('dat@@@@', data);

// # Duplicate array element

// let arr = [1,2,2,1,3]

// const duplicatedarr = arr.filter((element,index,arr)=>
// arr.indexOf(element) !== index
// )
// console.log("duplicatedarr",duplicatedarr)

// # max & min value

// let arr = [2, 34, 71, 3, 5, 96, 1];

// let minvalue = arr.reduce((prev, next) =>
//   //   console.log('prev', prev, 'next', next),
//   prev < next ? prev : next,
// );
// console.log("minvalue====",minvalue)

// let arr = [2, 34, 71, 3, 5, 96, 1];

// let maxfirstmaxvalue = arr.reduce((prev, next) => prev > next ? prev : next);
// let index = arr.indexOf(maxfirstmaxvalue)
//  arr.splice(index,1)
//  console.log(arr)

//second largest
// let arr = [2, 34, 71, 3, 5, 96, 1];

// const removesecondlarget = arr => {
//   let firstmaxvalue = arr.reduce((prev, next) => (prev > next ? prev : next));
//   index = arr.indexOf(firstmaxvalue);
//   arr.splice(index, 1);
//   let secondlargetedvalue = arr.reduce((prev, next) =>
//     prev > next ? prev : next,
//   );
//   return secondlargetedvalue;
// };

// console.log('data1@@@@@', removesecondlarget(arr));

// let arr = [2, 34, 71, 3, 5, 96, 1];

// let maxValue = arr.reduce((prev, next) => prev > next ? prev : next);
// let index = arr.indexOf(maxValue);
// arr.splice(index, 1);

// console.log("Original Array:", arr);


// missing elements from array

// let arr = [1,2,3,4,5,7,9,10]
// let minValue = Math.max(...arr)
// console.log("min===",minValue)


// duplicated element by array

// let arr = [1,2,2,3,4,5,1]
// // let duplicated = arr.filter((item,index,arr)=>arr.indexOf(item) !== index)
// // duplicated = arr
// // console.log("duplcated=====?>>>",arr)

// let duplicatedValue = []
// let count = 0



// const duplicatedValuefunc = () => {
//     for(let i = 0 ; i < arr.length ; i++){
//         for(let j = i+1 ; j < arr.length ; j++){
//             if(arr[i] == arr[j]){
//                 count++
//                 duplicatedValue.push(arr[i])
//             }
           
                
            
//         }
//     }
//     console.log("countttt@@",count)
// }

// const t1 =  duplicatedValuefunc()
//  console.log("duplicatedValue@@@",duplicatedValue)



// updated array value

let arr = ['shivani','sapna','meena','sonu','nilesh']

let checkindex = arr.indexOf('meena')
if(checkindex > -1)
{
    arr[checkindex]  = 'updated meena'
}
console.log("arr---",arr)