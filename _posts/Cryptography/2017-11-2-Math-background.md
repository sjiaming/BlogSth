---
layout: article
title: Math Background for Public Key Cryptography
description:
imgsrc: assets/pics/crypto/math.jpg
banner: assets/pics/crypto/math_banner.jpg
date: 2017-11-02
category: Cryptography
tags: [Math,Cryptography]
author: Song Jiaming
---

This blog is my study note for CS4236 Cryptography, Chapter 8.

### 1 Prime Numbers

#### Notation
- **a** divides **b** (notation: a\|b), if there exists an integer __c__ s.t. __b = ac__
- For any 2 integers **a** and **b**, there exists 2 unique integers **r** and **q** such that:
    - __0 ≤ r < q__ and
    -  __a = qb + r__. 
    - Note that: __a mod b = r__
- 2 integers __a__ and __b__ are relatively prime or co-prime if __gcd(a,b)=1__
    + __gcd(a,b)__: greatest common divisor of a and b
- (Congruence) Let __a__,__b__ and __n__ be integers (\\(n \not = 0\\)): if __(a mod n) = (b mod n)__, then __a ≡ b  (mod n)__

---



#### Properties
Suppose __a ≡ x  (mod n)__ and __b ≡ y  (mod n)__, then:
- (a+b) ≡ (x+y) (mod n)
- (a-b) ≡ (x-y) (mod n)
- (ab) ≡ (xy) (mod n)
- Caution: \\(2^{a} \not \equiv 2^{x}\\)(mod n)

---


#### Extended Euclidean Algorithm
Purpose: to find the gcd d.
Input: 2 integers __a__ and __b__<br>
Output: __d=gcd(a,b)__ and 2 integer __s__ and __t__ such that:
- __as+bt=d__ and __0 ≤ s < b__

```python
if b = 0:
    d = a, s = 1, t = 0
else:
    set s2 = 1, s1 = 0, t2 = 0, t1 = 1
    while b > 0:
        set q = floor(a/b), r = a - q*b
            s = s2 - q*s1, t = t2 -q*t1
        set a = b, b = r,
            s2 = s1, s1 = s, t2 = t1, t1 = t
    set d = a, s = s2, t = t2
return (d,s,t)            
```

If __a__ and __b__ are at most m-bit long, running time is O(\\(m^{2}\\))
If gcd(x,n) = 1, we can find __s,t__ such that:
- __xs+nt = 1__
- That is, __xs = 1 (mod n)__
<br>


Mathematically, suppose __b < \|a\|__, to find gcd(a,b):

| Step   | Equation  | Condition |
| :----: | :------: | :--------:    |
| 1      | \\(a=b\times q_{1}+r\\)  | 0 ≤ \\(r_{1}\\) < b       |
| 2      | \\( b=r_{1}\times q_{2}+r_{2} \\)   |   0 ≤ \\(r_{2}\\) < \\(r_{1}\\)       |
| 3      | \\(r_{1}=r_{2}\times q_{3}+r_{3} \\)  |    0 ≤ \\(r_{3}\\) < \\(r_{2}\\)       |
| ...    | ...   |    ...       |
| k      | \\(r_{k−2}=r_{k−1}\times q_{k}+r_{k} \\)  |   0 ≤ \\(r_{k}\\) < \\(r_{k−1}\\)      |

The process continues until we obtain in Step n, a remainder \\(r_{n}\\)= 0.<br>
In that case, the last non-zero remainder \\(r_{n-1}\\)= gcd(a,b).<br>
By applying backward substitutions, we can obtain integers s and t such that gcd(a,b) = as + bt
<br>

Example.Find gcd(33,93).
1. 93 = 33×2 + 27 and r1= 27
2. 33 = 27×1 + 6 and r2= 6
3. 27 = 6×4 + 3 and r3= 3
4. 6 = 3×2 and r4= 0

Therefore, gcd(33,93) = 3.

<br>

### 2 Arithmetic in the real field R
Infinite, every element (except zero) has a multiplicative inverse

- In the set __R__ of real numbers, we have binary operation: R x R \\(\rightarrow\\) R, 'x' denotes an operator, not 'times'
- Close under an operation: if __a,b__ ∈ R, then a x b ∈ R
- 2 operators:
    - +: addition, 0: additive identity
    - •: multiplication, 1: multiplicative identity
- Inverse:
    + additive inverse: for __a__ ∈ R, __b__ is its inverse iff a+b=0. b=-a
    + multiplicative inverse: for __a__ ∈ R \ {0}, b is its inverse iff a • b = 1. b = \\(a^{-1}\\)
- (R , + , • ) is an infinite field.

<br>

### 3 Arithmetic in the integer ring Z
Infinite. Only “1” and “-1” have multiplicative inverse
- Z is not a field
- Given int x, to determine whether its square root exists, and what is the squre root:
    + Find the integer y s.t. \\(y^{2}\\) = y • y = x   
- Given int x, g, to determine whether ∃ an integer y s.t. \\(g^{y}\\) = x
    - __y = \\(\log_{g}\\) x__
- The above 2 algorithems are efficient in the sense that, suppose x, g, y are m-bit integers, the running time is polynomial w.r.t. m





### 4 Arithmetic in the Finite field \\(Z_{p}\\)
- \\(Z_{p}\\) = {0, 1, 2, ..., p-1} where p is prime
For any __a,b ∈ \\(Z_{p}\\):
- a + b = c where c = (a + b) mod p
- a • b = d where d = (a b) mod p

Any x ∈ \\(Z_{p}\\), except 0, has a multiplicative inverse,
- ∃ a y s.t. xy ≡ 1 (mod p)
- These elements are included in a group \\(Z_{p}^{*}\\) = {1, 2, ..., p-1}

- Given __x, p__, we can compute its multiplication inverse
    - using the Extended Euclidean Algorithm
-  Given __x, d, p__, we want to compute \\(x^{d}\\)__mod p__ efficiently.

### 5 Arithmetic in Modulo Composite (finite ring) \\(Z_{n}\\)

### 6 More on \\(Z_{p}\\)

### 7 More on \\(Z_{n}\\)