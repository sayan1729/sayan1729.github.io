---
title: "Boolean Inverse Semigroup"
date: 2026-08-11
description: "Notes from a seminar at Jadavpur University by Sujit Kumar Sardar."
summary: "On Boolean Inverse Semigroups and their connections with topology and graph theory."
tags: ["geometric-group-theory", "free-groups", "growth-of-groups", "virtual-freeness"]
---
{{< katex >}}

## Inverse semigroup

Let \((S,\cdot)\) be a semigroup[^1]. We say that \(S\) is an *inverse semigroup* if every element of \(S\) has a unique inverse, say, \(a^*.\)
\[
    \begin{aligned}
    S&\longrightarrow S\\
    a&\longmapsto a^*\text{ (or } a^{-1})\\
    \text{s.t. }& aa^*a=a,\; a^*aa^*=a^*\\
    \text{i.e. }& (a^*)^*=a,\; (ab)^*=b^*a^*
    \end{aligned}
\]
and moreover \(a^*a\) & \(aa^*\) are idempotents,
\[
    \begin{aligned}
    (a^*a)^2=(a^*a)(a^*a)=a^*(aa^*a)=a^*a\\
    (aa^*)^2=(aa^*)(aa^*)=(aa^*a)a^*=aa^*
    \end{aligned}
\] and in fact, all the idempotents of \(S\) are in \[E(S)=\left\{aa^*\mid a\in S\right\}=\left\{a^*a\mid a\in S\right\}\] which is a commutative semigroup, called the *commutative idempotent semigroup*. If we define \(e\land f=ef\) then \(E(S)\) becomes a semilattice. Thus we refer to \(E(S)\) as the *semilattice of idempotents* of \(S.\)

**Example.** Let \(X\) be a set. We know that \(\mathrm{Sym}(X),\) the set of all bijections on \(X,\) forms a group. Instead of bijections, consider *partial bijections* \(f:A\to B,\) \(g:C\to D\) (with \(A,B,C,D\subset X\))

## Notes & References

[^1]: A *semigroup* is an algebraic structure consisting of a set together with an associative binary operation on it.
