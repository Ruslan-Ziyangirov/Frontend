
//Задача №1
function money(n) {

    let arr = [1000,500,200,100,50];
    let a = 0;
    let b = 0;
    for (let i = 0; i < 5; ++i) {
        a = arr[i];

        b += n / a;

        n %= a;
    }

    if (n > 0) {
        b = -1;
    }

    return Math.floor(b);
}

//Задача №3
function zero(number) {
    let a = 0

    for (let i = 0; i < number.length - 1; i++) {
        if (number[i] === 0) {
            a = number.splice(i, 1);
            number.push(a[0]);
        }
    }
    return number;
}
