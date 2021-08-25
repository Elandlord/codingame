# Solution 1
p=map(int,input().split())
h=map(int,input().split())
print(sum(h)-sum(p))

# Solution 2
f=lambda:sum(map(int,input().split()))
print(-f()+f())