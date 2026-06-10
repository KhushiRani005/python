def find(arr):
    minn, maxx = arr[0], arr[0]
    for num in arr[1:]:
        if num < minn:
            minn = num
        elif num> maxx:
            maxx = num
    return minn, maxx

array = [3, 4,5,7,10,50,4,7,9]
minn , maxx = find(array)
print(minn,maxx)