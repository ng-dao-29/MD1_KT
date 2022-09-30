let str1 = "mot,hai,ba,bon";
let str2 = "1,2,3,4";

function checkInclude(str1,str2){

    let check = false;

    let len1 = str1.length;
    let len2 = str2.length;

    for (let i = 0; i < len2 - len1 + 1; i++){

        let str2slice = str2.slice(i,i + len1);

        if (str1 == str2slice) {
            check = true;
            break;
        }
    }
    return check;
}

console.log(checkInclude(str1,str2));