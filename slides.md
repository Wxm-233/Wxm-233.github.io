---
theme: default
background: /card762_after.png
title: Online Algo
class: text-center
highlighter: shiki
drawings:
    persist: false
transition: slide-left
mdc: true
---

# Online Algo

Tianyu Li, 2024/6/7

---

# Differences from the classic algo

- 离线算法在问题求解前获取完全信息
  
- 在线算法在求解过程中获得信息
  
- 在线算法无法给出整体最优解，只能给出局部最优解

---

# K-server problem

- 给定一个有$n$个顶点的图$G$，其$n$个顶点均为服务对象，随时会提出服务要求。
  
- 现有$k$辆服务车按提出要求的先后顺序来往服务于$n$个顶点之间。
  
- 服务要求是在服务过程中一个一个给出的，每一时刻只知道之前的服务要求序列。
  
- 问如何调度$k$辆服务车使他们在服务过程中移动的距离最短？

---

# Analyze

- 没有完全信息，无法保证给出最优解，只能给出近似解
  
- 考虑贪心算法
  
- 分析贪心算法与离线最优算法效率

---

# Greedy Algo

- 策略一：当顶点$i$提出服务要求时，找出据顶点$i$最近的服务车$j$，派$j$前往$i$处。
  
- 策略二：设第$i$辆车已经移动的距离为$d[i]$，当顶点$j$提出服务要求时选择第$t$辆车\
  使得$d[t] + dist(t, j) = \min{\{d[i] + dist(i, j)\}}$，其中$1≤i≤k$，$dist$表示两点间的距离。

---

# Strat 1

- 考虑$k=2$
  
- $G$为三个顶点一条路的简单实例，其中顶点从左到右依次为$A$、$B$、$C$
  
- $|AB|=1$，$|BC|=2$，服务车开始停在$B$，$C$上，服务序列为$ABABABAB\dots$
  
- 策略一的结果是停在B处的服务车在AB两处来回移动
  
- 若服务序列长为$m$，则移动总距离为$m=O(m)$
  
- $m>2$时，最优的调度方案显然是将$B$处的车移到$A$处，再将$C$处的车移到$B$处\
  此时移动距离仅为$3 = O(1)$。

- 可见贪心策略一与最优算法距离的比值可达到$m/3$，比值可随$m$增大取得任意大的值

---

# Strat 2

- $m>2$时，停在$B$处的服务车经过$A$、$B$，在第三个请求时或者$C$处的服务车移动至$A$，\
  或者$B$处的服务车移动至$A$，下一次$C$处服务车移动至$B$

- 至多移动距离为$5$

---

# Competitive Ratio

- 设在线算法$A$的输入序列为$\sigma$，代价为$C_A(\sigma)$，最优离线算法$OPT$的代价为$C_{OPT}(\sigma )$，如果存在非负整数$\alpha$和$c$，使得$C_A(\sigma)≤\alpha C_{OPT}(\sigma )+c$对任何输入序列$\sigma$都成立，则称算法$A$是$\alpha$-竞争的，常数$\alpha$称为算法$A$的竞争比。
  
- 当算法$A$的竞争比不可能再改进时，称算法$A$是最优在线算法。
  
- 若$\exist \sigma$，$\nexists\alpha\geq0$，$s.t.~C_A(\sigma)\leq\alpha C_{OPT}(\sigma)$，说明$A$算法找不到竞争比，这样的算法是不好的。
  
- 应该找一个尽量小的竞争比$\alpha$使得$C_A(\sigma)\leq\alpha C_{OPT}(\sigma)$成立

---

# Page Replacing Problem

- 内存按存取速度分为高速的片上缓存和相对低速的片外内存。
  
- 高速缓存可分为$k$个页面，其余页面在内存中。
  
- 页调度问题的输入是内存访问请求序列$\sigma = \sigma(1)\sigma(2)\sigma(3)\dots \sigma(m)$
  
- 当页面$\sigma(i)$不在缓存中时，需将其调入缓存中，同时缓存中的某一页面调回内存
  
- 设计算法使调换的总次数最小（某一时刻不知道后续的访问序列）。

---

# Common Page Replacement Algorithms

- Last in First Out ($LIFO$):
  - $\sigma(i)$发生缺失时，将最近调入缓存的页面与$\sigma(i)$交换。
- First In First Out ($FIFO$):
  - 将最早调入缓存的页面与$\sigma(i)$交换。
- Least Recently Used ($LRU$):
  - 将上一次访问时间最早的页面与$\sigma(i)$交换。
- Least Frequently Used ($LFU$):
  - 将访问次数最少的页面与$\sigma(i)$交换。
- Furthest in Future ($FF$):
  - 最优的离线调度算法。

---

# Competitive Ratio Analysis

- 记：高速缓存可容纳$k$个页面，请求序列为$\sigma$，$LRU$代价为$C_{LRU}(\sigma)$。
- 结论：$\forall \sigma = \sigma(1),\dots,\sigma(m)$,$~C_{LRU}(\sigma)\leq k C_{OPT}(\sigma)$。

## Proof

- 根据$LRU$算法的结果将$\sigma$分为若干阶段$P(0), P(1), \dots$，使得$P(0)$最多有$k$个页面缺失，\
  而对其余的$P(i)$，每个都有$k$个页面缺失。划分方法：从尾部向前扫描。
- 结论：最优离线算法$OPT$在每个阶段$P(i)$至少产生$1$个页面缺失。<br/>
  &nbsp;


### Proof2

- 不失一般性，假设初始状态下两种算法都有相同的高速缓存。记$\sigma(t_i)$为$P(i)$第一个请求。
- $LRU$在$P(0)$阶段产生第$1$个页面缺失时，因为初始状态相同，算法$OPT$也产生$1$个页面缺失。
- 结论：$i\geq 1$，$P(i)$中有$k$个不同于$\sigma(t_i-1)$的页面访问请求，$OPT$必然产生$1$个页面缺失。

---

#### Proof3

- 分情况讨论
  
  - $P(i)$缺失页面互不相同，且包含$\sigma(t_i-1)$。
    - 记$t\geq t_i$的请求$\sigma(t)$导致$\sigma(t_i-1)$被调出缓存。
    - 考虑子序列$\sigma(t_i-1)\dots\sigma(t)$，在$t$时刻$\sigma(t_i-1)$是$LRU$。
    - 则其余$k-1$个页面在该序列中均被访问，加上$\sigma(t)$构成所得。
  
  - $P(i)$缺失页面互不相同，且不含$\sigma(t_i-1)$。
    - $k$个不同的缺失页面即为所得。
  
  - $P(i)$存在某页面产生了两次缺失。
    - 与情况$1$相同，考虑两次缺失之间的子序列即可。

$\blacksquare$

---

# Optimality Analysis

- $LRU$是最优在线算法，即$\forall$页调度在线算法，其竞争比$\alpha\geq k$。

## Proof

- 设$S=\{p_1, p_2, p_3, \dots, p_{k+1}\}$是$k+1$个访问页面的集合，初始状态下算法$A$与$OPT$有相同高速缓存。
  
- 考虑访问序列$\sigma$使算法$A$每次都产生页面缺失。
  
- 而$OPT$在$k$次连续访问中最多产生$1$次页面缺失。
  
- 可见$C_A(\sigma)\geq k C_{OPT}(\sigma)$，根据竞争比定义，$\alpha\geq k$。

---

# General Cases of K-server Problem

- 定义距离空间$V$为一个点集与定义在其上的距离函数$d:(V\times V)\rightarrow R$，满足如下性质：
  - $d(u,v)\geq0,\forall u,v \in V$；
  - $d(u,v)=0\Leftrightarrow u=v$；
  - $d(u,v) = d(v, u), \forall u,v \in V$；
  - $d(u,w) + d(w, v) \geq d(u,v), \forall u, v, w \in V$；
  - 其余条件同开头
  
- 页调度问题是$K$-服务问题的特殊情形:
  - 高速缓存中的$k$个页面是$k$个服务。
  - 页面缺失时，缓存中页面与内存中页面的交换看成是$1$次移动服务，其代价为$1$。
  - 因此，页调度问题是$k$服务问题中所有不同点对间距离均为$1$的特殊情形。
    - $i.e.$，边距离均为$1$的完全图上的$k$服务问题

---

# Lower Bound of Competitive Ratio

- 结论: $k$服务问题的竞争比$\alpha\geq k$。

- 证明:针对在线算法$A$，构造一个特殊的服务请求序列$\sigma$以及另外$k$个算法\
  $A_1,A_2,\dots,A_k,~s.t.~C_A(\sigma)\geq\sum C_{A_i}(\sigma)$.\
  $\therefore \exists A_i,~s.t.~C_A(\sigma)\geq kC_{A_i}(\sigma)\geq kC_{OPT}(\sigma)$，$\alpha\geq k$。
  
- 构造$|V|=k+1$，初始$k$个服务位于不同位置，另有$1$空位置
  
- 构造服务序列$\sigma = \sigma(1)\sigma(2),\dots,\sigma(m)$，其每个服务请求$\sigma(i)$均发生于$A$的空位置$h$处。
  
- 对于$1\leq t\leq m$，记$x_t=\sigma(t)$，$x_{m+1}$记为算法$A$最终空位置，有
  
$$C_A(\sigma)=\sum_{t=1}^m d(x_{t+1}, x_t)$$

---

- 记算法$A$初始$k$个服务的位置为$y_1, y_2, \dots, y_k$，构造算法$A_i$如下，$1\leq i\leq k$
  
  - $A_i$初始状态的$k$个服务在$V-y_i$的$k$个位置上。
  - 对于服务请求$\sigma(t) = x_t$，如果没有服务处于位置$x_t$，则算法就将位于$x_{t-1}$处的服务移动到$x_t$处；\
    否则不做任何事情。
  - 记$V_i$为算法$A_i$的$k$个服务占据的点的集合。
  - 结论：在响应服务请求$\sigma = \sigma(1)\sigma(2),\dots,\sigma(m)$的整个过程中，每个$V_i$互不相同。

- 证明：利用数学归纳法
  
  - 初始时结论显然成立。
  - 设在请求$\sigma(t-1)$时成立，考察$\sigma(t)=x_t$。
  - $\forall V_j \neq V_l, 1\leq j,l\leq k$，$x_t$至少属于其中一个集合。
    - $x_t\in V_j \And x_t\in V_l$，响应后两集合均未改变，仍有$V_j \neq V_l$。
    - 否则，假设$x_t\in V_l$，响应后$x_{t-1}\notin V_j$，$x_{t-1}\in V_l$，$V_j \neq V_l$。

---

- 由于每个$V_i$互不相同，因而对于任何服务请求$x_t$，只有$1$个算法$A_i$需要响应服务请求，因此有

$$\sum_{i=1}^k C_{A_i}(\sigma)=\sum_{t=2}^m d(x_{t-1}, x_t)$$
$$C_A(\sigma)=\sum_{t=1}^m d(x_{t+1}, x_t)\geq \sum_{i=1}^k C_{A_i}(\sigma)$$

$\blacksquare$

---

# K-server Conjecture

- 目前对于$k$服务问题的一些特殊情形找到了竞争比为$k$的在线算法。

- 一般情况下，很难找到竞争比为$k$的在线算法。

- 计算机普遍猜测距离空间中的$k$服务问题存在竞争比为$k$的在线算法。

- 这个猜测称为$k$服务猜测。

---

# 对称移动算法

- 竞争比为$k$，适用于直线上的$k$服务问题。

- 响应服务请求$σ(t) = x_t$时，对称移动算法A采用如下策略：

- 当$x_t$位于$2$个服务$s_i$和$s_j$之间时，$s_i$和$s_j$同时向$x_t$移动距离$d=\min\{|s_i-x_t|,|s_j-x_t|\}$。

- 当所有$k$个服务位于$x_t$同一侧时，选取距$x_t$最近的服务$s_i$向$x_t$移动距离$|s_i – x_t|$。

- 证明：
  - 设对称移动算法$A$的$k$个服务在直线$L$上的位置（从左到右）为$s_1,s_2,s_3,\dots,s_k$，\
    最优离线算法的$k$个服务在直线$L$上的位置为$t_1,t_2,t_3,\dots,t_k$，不妨认为两个序列均升序排列。
  
  - 对请求序列$\sigma$，$A$的代价为$C_A(i)$,$~OPT$的代价为$C_{OPT}(\sigma)$。

  - 对具体的服务请求$\sigma(i)$，$A$的代价为$C_A(i)$，$OPT$的代价为$C_{OPT}(i)$。

---

- 定义势函数：
  $$\Phi = k\sum_{i=1}^k |t_i-s_i|+\sum_{i<j}(s_j-s_i) = \Omega + \Theta$$
  $$\Omega = k\sum_{i=1}^k |t_i-s_i|$$
  $$\Theta = \sum_{i<j}(s_j-s_i)$$

  - 不失一般性，对任意服务请求$\sigma(i)$，$OPT$先响应，算法$A$后响应。
  
  - 记$OPT$响应后势函数增量为$\alpha_i$，算法$A$响应后势函数减量为$\beta_i$。

  - $OPT$与算法$A$每步响应后，势函数增量为$\alpha_i - \beta_i$。

  - 下证$\forall 1\leq i\leq m, \alpha_i \leq kC_{OPT}(i), \beta_i\geq C_A(i)$。

---

- 考虑$OPT$，其响应请求$\sigma(i)=y_i$时，服务$t_j$移动到$y_i$，其代价$C_{OPT}(i) = |y_i - t_j|$。

  - 根据三角不等式，
    $$|y_i-s_j|-|t_j-s_j|\leq|y_i-t_j|=C_{OPT}(i) \Rightarrow \Delta_\Omega\leq kC_{OPT}(i)$$
    $\Omega$的值最多增加$kC_{OPT}(i)$，而$\Theta$的值不变，$\alpha\leq kC_{OPT}(i)$

- 考虑算法$A$，其响应请求$\sigma(i) = y_i$，分为以下两种情况：

  - 情况$1$：算法$A$的所有服务在$y_i$的同一侧，不失一般性设为右侧，距离$y_i$最近的服务是$s_i$。
    - $\exist 1\leq j\leq m, s_1\geq y_i = t_j \geq t_1$，$\Omega$的值减少$kC_A(i)$，$\Theta$的值增加了$(k-1)C_A(i)$。$\beta_i=C_A(i)$
  - 情况$2$：$s_r < y_i < s_{r+1}$，不妨设$s_r$距$y_i$较近。
    - 画图分析易知$~\Omega$不增（分$j\leq r$和$j > r$两种情况）。
    - 考察$\Theta$，发现两者关于外界的距离变化恰抵消，$\Theta$减少了$C_A(i)$。$\beta_i\geq C_A(i)$
  - 综上$\beta_i\geq C_A(i)$。

---

$$\Phi_m - \Phi_0 = \sum_{i = 1}^m(\Phi_i-\Phi_{i-1}) = \sum_{i = 1}^m(\alpha_i - \beta_i) \leq k\sum_{i=1}^mC_{OPT}(i)-\sum_{i=1}^mC_A(i), \Phi_m \geq 0$$
$$\Rightarrow \sum_{i=1}^mC_A(i) \leq k\sum_{i=1}^mC_{OPT}(i) + \Phi_0, k,\Phi_0 \geq 0$$

- 由服务请求序列的任意性可知，算法$A$的竞争比为$k$。
  
$\blacksquare$

---

# 对称移动算法的推广

- 距离空间为树，任意两点$x$，$y$间的距离是树中连接$x$和$y$的简单路的长度，记为$d(x,y)$。

- 用$s_1s_2s_3\dots s_k$表示$k$个服务在树$T$中的位置。在相应服务请求$σ(t) = x_t$时，\
  如果连接服务$s_i$和$x_t$的简单路上没有别的服务，则称服务$s_i$为有效服务；否则称为无效服务。

- 移动策略：
  
  - 所有有效服务$s_i$以相同速度向$x_t$移动，直至自身变为无效服务或已有服务到达$x_t$。

- 证明思路：

  - 设$k$个服务在树$T$中的位置为$s_1s_2s_3\dots s_k$。
  - 最优离线算法$OPT$的$k$个服务的位置为$t_1t_2t_3\dots t_k$。
  - 定义带权二分图$G$，满足$s_1s_2s_3\dots s_k$对应图中顶点$v_1v_2v_3\dots v_k$；\
    $t_1t_2t_3\dots t_k$对应图中顶点$u_1u_2u_3\dots u_k$。
  - 边$(v_i,u_j)$的权为$d(s_i,t_j), 1\leq i,j\leq k$。
  - 设$M_{min}$是图$G$的$1$个最小权匹配，$|M_{min}|$为其权值。

---

- 定义势函数：
  
  $$\Phi = k|M_{min}| + \sum_{i<j}d(s_i,s_j)$$

- 与直线情形类似，可证$\alpha_i\leq kC_{OPT}(i)$，$\beta_i\geq C_A(i)$。
- 该算法的竞争比也为$k$。

---

# 其他在线算法

- 在线$Steiner$树问题
  
- 在线任务调度问题
  
- 负载平衡问题

---
layout: center
class: text-center
---

<div style="text-align: center">
  <h1>Thanks!</h1>
  <img src="/ichika11.png" width=100% height=auto />
</div>
