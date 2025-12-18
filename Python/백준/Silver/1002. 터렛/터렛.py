n = int(input())
case =[]
answer =[]

def dis(x):
    dis1 = ((x[0]-x[3])**2+(x[1]-x[4])**2)**0.5
    return dis1

for i in range(n):
    case = list(map(int,input().split()))
    if dis(case) == 0 and case[2]-case[5] == 0:
        answer.append(-1)
    elif dis(case) > case[2]+case[5] or dis(case) < abs(case[2]-case[5]):
        answer.append(0)
    elif dis(case)== case[2]+case[5] or dis(case) == abs(case[2]- case[5]):
        answer.append(1)
    elif abs(case[2]-case[5]) < dis(case) < case[2]+case[5]:
        answer.append(2)
for m in answer:
    print(m)
