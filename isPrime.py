n=33
def isPrime(num):
    if num<=1:
        return False
    for i in range(2,num):
        if num%i == 0:
            return False
    return True

def allPrime(num):
    for i in range(2,num+1):
        if isPrime(i):
            print(i)


if __name__ == '__main__':
    allPrime(n)