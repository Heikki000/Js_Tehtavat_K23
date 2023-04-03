const integer = prompt('Give me an integer and I will tell you if it is a prime number:');


luku = int(luku)
        total = 0

        for n in range(1, luku):
            if luku % n == 0:
                total = total + 1

        if total <= 1:
            vastaus = {
                "Number": luku,
                "isPrime": True
            }
        else:
            vastaus = {
                "Number": luku,
                "isPrime": False
            }

document.querySelector('#target').innerHTML='The given number, ' + integer + 'is a prime number.'
document.querySelector('#target').innerHTML='The given number, ' + integer + 'is not a prime number.'