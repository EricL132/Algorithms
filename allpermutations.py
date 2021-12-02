s = "ABCD"
n = len(s)-1
s = list(s)


def permutate(arr,left,right):
    if left == right:
        print("".join(arr))
    for i in range(left,right+1):
        arr[left],arr[i] = arr[i],arr[left]
        permutate(arr,left+1,right)
        arr[left],arr[i] = arr[i],arr[left]


permutate(s,0,n)
