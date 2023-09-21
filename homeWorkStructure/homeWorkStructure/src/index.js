// Вам необхідно написати функцію, яка приймає на вхід масив чисел і повертає новий масив, що містить тільки ті числа, які є простими числами.

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function filter(numbers) {
    return numbers.filter(isPrime);
}

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filter(numbers))




