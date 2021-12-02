def subString(str,length):
    for i in range(0,length+1):
        for j in range(i+1,length+1):
            print(str[i:j])



str = "abcd"

subString(str,len(str))