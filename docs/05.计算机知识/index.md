# 计算机知识

## 怎么样算一个数的二进制？比如说，36的二进制是多少？怎么算的？

首先思考一下是十进制，比如365=3*10^2+6*10^1+5*10^0  
这样你会发现一个规律，十进制转换=当前位的数*10^（位数-1）之和  
这样你再去理解二进制，其实二进制就是将10这个量值换成2，去计算得出最终的结果，为什么称为二进制，当然是由于 每个位的数最大只能是1，逢二进一，就像十进制，逢十进一。

- 首先算一下2的1-10次方为多少  

 ```note
 2^0=1    2^1=2    2^2=4    2^3=8    2^4=16    2^5=32 2^6=64    2^7=128    2^8=256    2^9=512    2^10=1024
 ```

- 第二步

`36=32+4=2^5*1+2^4*0+2^3*0+2^2*1+2^1*0+2^0*0`
所以转化为2进制 就是100100（取指数）
