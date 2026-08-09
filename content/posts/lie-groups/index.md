---
title: "Lie Groups and Representation Theory"
date: 2024-06-12
description: "Notes from a seminar at Jadavpur University by Irfan Habib."
summary: "Lie groups, lie algebras and representation theory."
tags: ["lie-group", "representation-theory", "lie-algebra", "semi-simple-lie-algebra"]
---
{{< katex >}}

## Structure of finite-dimensional semisimple Lie algebras

Let \(\mathbb{F}\) be a field. A vector space \(\mathfrak{g}\) over \(\mathbb{F}\) is called a *Lie algebra* if there exists an \(\mathbb{F}\)-bilinear map \(\mathfrak{g\times g\to g}\) \((x,y)\mapsto [x,y]\) (called the *commutator/Lie bracket*) such that

- \([x,x]=0\) (alternating)
- \([x,[y,z]]+[y,[z,x]]+[z,[x,y]]=0\) (Jacobi identity)

for all \(x,y,z\in\mathfrak{g}.\) Lie algebras are a class of non-associative algebras - the Jacobi identity controls how non-associative the Lie bracket is.

Note: if \(\text{char}(\mathbb F)\neq2\) then \([x,x]=0\;\forall x\in\mathfrak g\) is equivalent to \([x,y]=-[y,x]\;\forall x,y\in\mathfrak g.\) This is because
            $$[x,y]=[x,y]+0=[x,y]-[y+x,y+x]$$ $$=[x,y]-[y,x]-[y,y]-[x,x]-[x,y]=-[y,x].$$
On the other hand, \([x,y]=-[y,x]\implies[x,x]=-[x,x]\implies 2[x,x]=0\implies\text{char}(\mathbb F)=2\) or \([x,x]=0.\)

**Definition.** A vector subspace \(s\) of \(\mathfrak{g}\) is called a

- *subalgebra* if \([x,y]\in s\) for all \(x,y\in s,\) and
- *ideal* if \(x\in\mathfrak{g},\) \(y\in s\implies [x,y]\in s.\)

A Lie algebra \(\mathfrak{g}\) is called

- *abelian* if \([x,y]=0\) for all \(x,y\in s,\)
- *simple* if \(\{0\}\) and \(\mathfrak{g}\) are the only ideals of \(\mathfrak{g},\) and
- *semisimple* if \(\mathfrak{g}\) is a direct sum of its simple ideals.

**Example.**

1. Any vector space \(V\) is an abelian Lie algebra.
2. \(\mathbb{R}^3\) is a Lie algebra with \([x,y]=\vec{x}\times \vec{y}.\)
3. Any associative algebra \(A\) can be made into a Lie algebra by defining \([a,b]=ab-ba.\)

## The affine Lie algebras

{{< alert "logo" >}}
**Theorem.** *Root generated subalgebras are in bijective correspondence with closed subroot systems.*
{{< /alert >}}

**Proof.** cf. Biswas-Habib-Venkatesh[^1].

[^1]: D. Biswas, I. Habib, R. Venkatesh, [On symmetric closed subsets of real affine root systems](https://www.sciencedirect.com/science/article/abs/pii/S0021869323001229), Journal of Algebra, 628 (2023) 212-240.
