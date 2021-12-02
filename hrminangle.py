def calc(hr,minute):
    if hr>12 or hr<0 or minute >60 or minute <0:
        return print("Invalid hr/minute")
    if hr==12:
        hr=0
    if minute==60:
        hr +=1
        minute = 0
        if hr>=12:
            hr -= 12
    hour_angle = .5 * (hr*60+minute)
    minute_angle = 6*minute
    angle = abs(hour_angle-minute_angle)
    angle = min(360-angle,angle)
    return angle

if __name__ == '__main__':
    hr = 9  
    minute=60
    print(calc(hr,minute))