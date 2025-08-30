---
layout: distill
title: Minkowski's bound
date: 2025-05-12
description: An upper bound on the norm of ideals in the ideal class group of a number field.
tags: number-theory algebraic-number-theory
authors:
  - name: Sayan Das
    url: "https://sayan1729.github.io"
    affiliations:
      name: Jadavpur University

bibliography: 2025-05-12-minkowski-bound.bib
toc:
    - name: Introduction
      subsections:
            - name: Motivation
            - name: Lattices in Euclidean space
    - name: Minkowski's bound
---

*This post assumes some familiarity with basic algebraic number theory i.e. the definition of a number field, ideal class group etc.*

$\renewcommand{\Re}{\operatorname{Re}}\renewcommand{\Im}{\operatorname{Im}}$

$\newcommand{\IA}{\mathbb{A}}\newcommand{\IB}{\mathbb{B}}\newcommand{\IC}{\mathbb{C}}\newcommand{\ID}{\mathbb{D}}\newcommand{\IE}{\mathbb{E}}\newcommand{\IF}{\mathbb{F}}\newcommand{\IG}{\mathbb{G}}\newcommand{\IH}{\mathbb{H}}\newcommand{\IK}{\mathbb{K}}\newcommand{\IL}{\mathbb{L}}\newcommand{\IM}{\mathbb{M}}\newcommand{\IN}{\mathbb{N}}\newcommand{\IO}{\mathbb{O}}\newcommand{\IP}{\mathbb{P}}\newcommand{\IQ}{\mathbb{Q}}\newcommand{\IR}{\mathbb{R}}\newcommand{\IS}{\mathbb{S}}\newcommand{\IT}{\mathbb{T}}\newcommand{\IU}{\mathbb{U}}\newcommand{\IV}{\mathbb{V}}\newcommand{\IW}{\mathbb{W}}\newcommand{\IX}{\mathbb{X}}\newcommand{\IY}{\mathbb{Y}}\newcommand{\IZ}{\mathbb{Z}}$

$\renewcommand{\aa}{\mathfrak{a}}\newcommand{\bb}{\mathfrak{b}}\newcommand{\cc}{\mathfrak{c}}\newcommand{\dd}{\mathfrak{d}}\newcommand{\ee}{\mathfrak{e}}\newcommand{\ff}{\mathfrak{f}}\let\gge\gg\renewcommand{\gg}{\mathfrak{g}}\newcommand{\hh}{\mathfrak{h}}\newcommand{\ii}{\mathfrak{i}}\newcommand{\jj}{\mathfrak{j}}\newcommand{\kk}{\mathfrak{k}}\let\lle\ll\renewcommand{\ll}{\mathfrak{l}}\newcommand{\mm}{\mathfrak{m}}\newcommand{\nn}{\mathfrak{n}}\newcommand{\oo}{\mathfrak{o}}\newcommand{\pp}{\mathfrak{p}}\newcommand{\qq}{\mathfrak{q}}\newcommand{\rr}{\mathfrak{r}}\newcommand{\uu}{\mathfrak{u}}\newcommand{\vv}{\mathfrak{v}}\newcommand{\ww}{\mathfrak{w}}\newcommand{\xx}{\mathfrak{x}}\newcommand{\yy}{\mathfrak{y}}\newcommand{\zz}{\mathfrak{z}}$

$\newcommand{\Ann}{\operatorname{Ann}}\newcommand{\Ass}{\operatorname{Ass}}\newcommand{\Aut}{\operatorname{Aut}}\newcommand{\cha}{\operatorname{char}}\newcommand{\codim}{\operatorname{codim}}\newcommand{\End}{\operatorname{End}}\newcommand{\Gal}{\operatorname{Gal}}\newcommand{\Hom}{\operatorname{Hom}}\newcommand{\Hhom}{\operatorname{\Hh om}\nolimits}\newcommand{\Eext}{\operatorname{\Ee xt}\nolimits}\newcommand{\hoehe}{\operatorname{ht}}\newcommand{\id}{\operatorname{id}}\newcommand{\lcm}{\operatorname{lcm}}\newcommand{\im}{\operatorname{im}}\newcommand{\coim}{\operatorname{coim}}\newcommand{\mSpec}{\mm\operatorname{-Spec}}\newcommand{\Ob}{\operatorname{Ob}}\newcommand{\GL}{\operatorname{GL}}\newcommand{\SL}{\operatorname{SL}}\newcommand{\Sym}{\operatorname{Sym}}\newcommand{\Min}{\operatorname{Min}}\newcommand{\Sheaf}{\operatorname{Sheaf}}\renewcommand{\sh}{\mathrm{sh}}\newcommand{\Sh}{\mathrm{Sh}}\newcommand{\h}{\mathrm{h}}\renewcommand{\red}{\mathrm{red}}\newcommand{\alt}{\mathrm{alt}}\newcommand{\spn}{\mathrm{span}}\newcommand{\interior}{\mathrm{int}}\newcommand{\closure}{\mathrm{cl}}\newcommand{\diam}{\mathrm{diam}}\newcommand{\Cl}{\operatorname{Cl}}\newcommand{\Pic}{\operatorname{Pic}}\newcommand{\Div}{\operatorname{Div}}\newcommand{\pr}{\operatorname{pr}}\newcommand{\ran}{\operatorname{ran}}\newcommand{\dom}{\operatorname{dom}}\newcommand{\rank}{\operatorname{rank}}\newcommand{\diag}{\operatorname{diag}}\newcommand{\nullity}{\operatorname{nullity}}\renewcommand{\det}{\operatorname{det}}\newcommand{\Mat}{\operatorname{Mat}}\newcommand{\Tr}{\operatorname{Tr}}\newcommand{\Norm}{\operatorname{N}}\newcommand\norm[1]{\| #1 \|}\newcommand\inner[2]{\left\langle #1, #2 \right\rangle}\newcommand{\op}{\mathrm{op}}\newcommand{\sep}{\mathrm{sep}}\newcommand{\rad}{\operatorname{rad}}\newcommand{\inv}{\operatorname{inv}}\newcommand{\Cov}{\operatorname{Cov}}\newcommand{\Con}{\operatorname{Con}}\newcommand{\Der}{\operatorname{Der}}\newcommand{\Fun}{\operatorname{Fun}}\newcommand{\Coeq}{\operatorname{Coeq}}\newcommand{\Fib}{\operatorname{Fib}}\newcommand{\Eq}{\operatorname{Eq}}\newcommand{\Bil}{\operatorname{Bil}}\newcommand{\Frob}{\operatorname{Frob}}\newcommand{\Cone}{\operatorname{Cone}}\newcommand{\coker}{\operatorname{coker}}\newcommand{\supp}{\operatorname{supp}}\newcommand{\length}{\operatorname{length}}\newcommand{\depth}{\operatorname{depth}}\newcommand{\trdeg}{\operatorname{tr.deg}}\newcommand{\idim}{\operatorname{inj.dim}}\newcommand{\pdim}{\operatorname{pr.dim}}\newcommand{\gdim}{\operatorname{gl.dim}}\newcommand{\fdim}{\operatorname{fl.dim}}\newcommand{\gr}{\operatorname{gr}}\renewcommand{\div}{\operatorname{div}}\newcommand{\Tor}{\operatorname{Tor}\newcommand{\Tot}\operatorname{Tot}\newcommand{\Ext}\operatorname{Ext}}\newcommand{\sgn}{\operatorname{sgn}}\newcommand{\nil}{\operatorname{nil}}\newcommand{\Spec}{\operatorname{Spec}}\newcommand{\Proj}{\operatorname{Proj}}\newcommand{\res}{\operatorname{res}}\newcommand{\Reg}{\operatorname{Reg}}\newcommand{\hor}{\mathrm{hor}}\newcommand{\ver}{\mathrm{vert}}\newcommand{\Zar}{\mathrm{Zar}}\newcommand{\fppf}{\mathrm{fppf}}\newcommand{\fpqc}{\mathrm{fpqc}}\newcommand{\et}{\mathrm{\acute{e}t}}\newcommand{\Et}{\mathrm{\acute{E}t}}\newcommand{\proet}{\mathrm{pro\acute{e}t}}\newcommand{\cris}{\mathrm{cris}}\newcommand{\HT}{\mathrm{HT}}\newcommand{\dR}{\mathrm{dR}}\newcommand{\tr}{\operatorname{tr}}$

The discussion here largely follows *Chapter IV* of <d-cite key="FrohlichTaylor"></d-cite>.

## Introduction

### Motivation

The finiteness of the ideal class group of a number field $K$ can be shown via elementary geometric arguments involving lattices. Explicit computation of classgroups isn't easy for most number fields $K.$ Showing that any ideal class of $K$ is represented by some $\oo_K$-ideal whose norm is less than some bound is fundamental in such calculations. The geometric methods of lattices in $\IR^n$ allow us to obtain a powerful bound, called *Minkowski's bound*, for classgroup calculations.

<ins>**Theorem**</ins>. An Euclidean domain is a principal ideal domain.
{% details Proof. %}
Recall that an integral domain $\oo$ is *Euclidean* if there exists a norm $N:\oo\setminus0\to\IN\cup\{0\}$ s.t.

1. $N(b)\leq N(a,b)$
2. We can write $a=qb+r$ with $q,r,b\in\oo$ and either $N(r)<N(b)$ or $r=0.$

Let $\aa$ denote a nonzero $\oo$-ideal and choose $a\in\oo\setminus0$ with $N(a)$ minimal. Then clearly $\aa\supset a\oo,$ and further for any $b\in\aa$ we may write $b=qa+r$ where either $r=0$ or $N(r)<N(a).$ Since $r\in\aa,$ by the minimality condition on $a,$ it follows that $r=0,$ so $b\in a\oo.$

Hence, $\aa=a\oo.\quad\blacksquare$
{% enddetails %}

The advantage of Euclidean domains is that their defintion is highly constructive: $\IZ$ is an Euclidean domain as the map $a \mapsto |a|_{\IR}$ defines an Euclidean norm.

Similarly, the map $f \mapsto \deg(f)$ defines an Euclidean norm on the polynomial ring $K[X]$ where $K$ is a field. As a consequence, $\IZ$ and $K[X]$ are both principal ideal domains. The case of the Gaussian integers $\IZ[i]$ is a tad more involved.

<ins>**Theorem**</ins>. $\IZ[i]$ is an Euclidean domain.
{% details Proof. %}
For $a\in\IZ[i],$ define $N(a)=|a|_{\IC}.$

We claim that $N$ is an Euclidean norm. From $N(ab)=N(a)N(b)$ we clearly have $N(a)\leq N(ab).$

Now suppose $b\in\IZ[i]:b\neq0$ and let $q$ be a nearest point in $\IZ[i]$ to the complex number $a/b$ in the Argand diagram.

{% include figure.liquid loading="eager" path="assets/img/Zi_is_ED.jpg" class="img-fluid rounded z-depth-1" %}

Then, by geometric considerations, we have
$$
\left|q-\frac{a}{b}\right|_\IC\leq\frac{\sqrt{2}}{2}\implies N(a-qb)<N(b)
$$

whence $a=qb+(a-qb)$ gives a representation of $a$ satisfying the second condition of an Euclidean domain. $\blacksquare$
{% enddetails %}

### Lattices in Euclidean space

We let $V$ be an $n$-dimensional $\IR$-vector space, fix once and for all an $\IR$-basis $\{e_1,\dots,e_n\}$ of $V,$ and given any element $x\in V$ write $x=\sum\limits_{h=1}^ne_hx_h$ where $x_h\in\IR.$

<ins>**Lemma**</ins>. $\Lambda$ is a discrete subgroup of $V$ iff $\Lambda$ is freely generated over $\IZ$ by $r$ vectors which are linearly independent over $\IR$ (hence $r\leq n$).

<ins>**Definition**</ins>. *Lattices* are discrete subgroups of maximal rank i.e. $r=n.$

<ins>**Theorem**</ins>. Every bounded convex set in $V$ is Jordan measurable.

## Minkowski's bound
