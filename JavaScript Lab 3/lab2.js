function gcd(x, y) {
    while (x && y) {
        x > y ? x %= y : y %= x;
    }

    return x + y;
}

console.log(gcd(7, -2));