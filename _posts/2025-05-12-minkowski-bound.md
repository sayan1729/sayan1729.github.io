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
    - name: References
---

$\renewcommand{\Re}{\operatorname{Re}}\renewcommand{\Im}{\operatorname{Im}}\newcommand{\abs}[1]{|#1|}$ 

$\newcommand{\IA}{\mathbb{A}}\newcommand{\IB}{\mathbb{B}}\newcommand{\IC}{\mathbb{C}}\newcommand{\ID}{\mathbb{D}}\newcommand{\IE}{\mathbb{E}}\newcommand{\IF}{\mathbb{F}}\newcommand{\IG}{\mathbb{G}}\newcommand{\IH}{\mathbb{H}}\newcommand{\IK}{\mathbb{K}}\newcommand{\IL}{\mathbb{L}}\newcommand{\IM}{\mathbb{M}}\newcommand{\IN}{\mathbb{N}}\newcommand{\IO}{\mathbb{O}}\newcommand{\IP}{\mathbb{P}}\newcommand{\IQ}{\mathbb{Q}}\newcommand{\IR}{\mathbb{R}}\newcommand{\IS}{\mathbb{S}}\newcommand{\IT}{\mathbb{T}}\newcommand{\IU}{\mathbb{U}}\newcommand{\IV}{\mathbb{V}}\newcommand{\IW}{\mathbb{W}}\newcommand{\IX}{\mathbb{X}}\newcommand{\IY}{\mathbb{Y}}\newcommand{\IZ}{\mathbb{Z}}$

$\renewcommand{\aa}{\mathfrak{a}}\newcommand{\bb}{\mathfrak{b}}\newcommand{\cc}{\mathfrak{c}}\newcommand{\dd}{\mathfrak{d}}\newcommand{\ee}{\mathfrak{e}}\newcommand{\ff}{\mathfrak{f}}\let\gge\gg\renewcommand{\gg}{\mathfrak{g}}\newcommand{\hh}{\mathfrak{h}}\newcommand{\ii}{\mathfrak{i}}\newcommand{\jj}{\mathfrak{j}}\newcommand{\kk}{\mathfrak{k}}\let\lle\ll\renewcommand{\ll}{\mathfrak{l}}\newcommand{\mm}{\mathfrak{m}}\newcommand{\nn}{\mathfrak{n}}\newcommand{\oo}{\mathfrak{o}}\newcommand{\pp}{\mathfrak{p}}\newcommand{\qq}{\mathfrak{q}}\newcommand{\rr}{\mathfrak{r}}\newcommand{\uu}{\mathfrak{u}}\newcommand{\vv}{\mathfrak{v}}\newcommand{\ww}{\mathfrak{w}}\newcommand{\xx}{\mathfrak{x}}\newcommand{\yy}{\mathfrak{y}}\newcommand{\zz}{\mathfrak{z}}$

$\newcommand{\Ann}{\operatorname{Ann}}\newcommand{\Ass}{\operatorname{Ass}}\newcommand{\Aut}{\operatorname{Aut}}\newcommand{\cha}{\operatorname{char}}\newcommand{\codim}{\operatorname{codim}}\newcommand{\End}{\operatorname{End}}\newcommand{\Gal}{\operatorname{Gal}}\newcommand{\Hom}{\operatorname{Hom}}\newcommand{\Hhom}{\operatorname{\Hh om}\nolimits}\newcommand{\Eext}{\operatorname{\Ee xt}\nolimits}\newcommand{\hoehe}{\operatorname{ht}}\newcommand{\id}{\operatorname{id}}\newcommand{\lcm}{\operatorname{lcm}}\newcommand{\im}{\operatorname{im}}\newcommand{\coim}{\operatorname{coim}}\newcommand{\mSpec}{\mm\operatorname{-Spec}}\newcommand{\Ob}{\operatorname{Ob}}\newcommand{\GL}{\operatorname{GL}}\newcommand{\SL}{\operatorname{SL}}\newcommand{\Sym}{\operatorname{Sym}}\newcommand{\Min}{\operatorname{Min}}\newcommand{\Sheaf}{\operatorname{Sheaf}}\renewcommand{\sh}{\mathrm{sh}}\newcommand{\Sh}{\mathrm{Sh}}\newcommand{\h}{\mathrm{h}}\renewcommand{\red}{\mathrm{red}}\newcommand{\alt}{\mathrm{alt}}\newcommand{\spn}{\mathrm{span}}\newcommand{\interior}{\mathrm{int}}\newcommand{\closure}{\mathrm{cl}}\newcommand{\diam}{\mathrm{diam}}\newcommand{\Cl}{\operatorname{Cl}}\newcommand{\Pic}{\operatorname{Pic}}\newcommand{\Div}{\operatorname{Div}}\newcommand{\pr}{\operatorname{pr}}\newcommand{\ran}{\operatorname{ran}}\newcommand{\dom}{\operatorname{dom}}\newcommand{\rank}{\operatorname{rank}}\newcommand{\diag}{\operatorname{diag}}\newcommand{\nullity}{\operatorname{nullity}}\renewcommand{\det}{\operatorname{det}}\newcommand{\Mat}{\operatorname{Mat}}\newcommand{\Tr}{\operatorname{Tr}}\newcommand{\Norm}{\operatorname{N}}\newcommand\norm[1]{\| #1 \|}\newcommand\inner[2]{\left\langle #1, #2 \right\rangle}\newcommand{\op}{\mathrm{op}}\newcommand{\sep}{\mathrm{sep}}\newcommand{\rad}{\operatorname{rad}}\newcommand{\inv}{\operatorname{inv}}\newcommand{\Cov}{\operatorname{Cov}}\newcommand{\Con}{\operatorname{Con}}\newcommand{\Der}{\operatorname{Der}}\newcommand{\Fun}{\operatorname{Fun}}\newcommand{\Coeq}{\operatorname{Coeq}}\newcommand{\Fib}{\operatorname{Fib}}\newcommand{\Eq}{\operatorname{Eq}}\newcommand{\Bil}{\operatorname{Bil}}\newcommand{\Frob}{\operatorname{Frob}}\newcommand{\Cone}{\operatorname{Cone}}\newcommand{\coker}{\operatorname{coker}}\newcommand{\supp}{\operatorname{supp}}\newcommand{\length}{\operatorname{length}}\newcommand{\depth}{\operatorname{depth}}\newcommand{\trdeg}{\operatorname{tr.deg}}\newcommand{\idim}{\operatorname{inj.dim}}\newcommand{\pdim}{\operatorname{pr.dim}}\newcommand{\gdim}{\operatorname{gl.dim}}\newcommand{\fdim}{\operatorname{fl.dim}}\newcommand{\gr}{\operatorname{gr}}\renewcommand{\div}{\operatorname{div}}\newcommand{\Tor}{\operatorname{Tor}\newcommand{\Tot}\operatorname{Tot}\newcommand{\Ext}\operatorname{Ext}}\newcommand{\sgn}{\operatorname{sgn}}\newcommand{\nil}{\operatorname{nil}}\newcommand{\Spec}{\operatorname{Spec}}\newcommand{\Proj}{\operatorname{Proj}}\newcommand{\res}{\operatorname{res}}\newcommand{\Reg}{\operatorname{Reg}}\newcommand{\hor}{\mathrm{hor}}\newcommand{\ver}{\mathrm{vert}}\newcommand{\Zar}{\mathrm{Zar}}\newcommand{\fppf}{\mathrm{fppf}}\newcommand{\fpqc}{\mathrm{fpqc}}\newcommand{\et}{\mathrm{\acute{e}t}}\newcommand{\Et}{\mathrm{\acute{E}t}}\newcommand{\proet}{\mathrm{pro\acute{e}t}}\newcommand{\cris}{\mathrm{cris}}\newcommand{\HT}{\mathrm{HT}}\newcommand{\dR}{\mathrm{dR}}\newcommand{\tr}{\operatorname{tr}}$

## Introduction

### Motivation

The finiteness of the ideal class group of a number field $K$ can be shown via elementary geometric arguments involving lattices. Explicit computation of classgroups isn't easy for most number fields $K.$ Showing that any ideal class of $K$ is represented by some $\oo_K$-ideal whose norm is less than some bound is fundamental in such calculations. The geometric methods of lattices in $\IR^n$ allow us to obtain a powerful bound, called **Minkowski's bound**, for classgroup calculations.

### Lattices in Euclidean space

We let $V$ be an $n$-dimensional $\IR$-vector space, fix once and for all an $\IR$-basis $\{e_1,\dots,e_n\}$ of $V,$ and given any element $x\in V$ write $x=\sum\limits_{h=1}^ne_hx_h$ where $x_h\in\IR.$

<ins>**Definition**</ins>. $\Lambda$ is a discrete subgroup of $V$ iff $\Lambda$ is freely generated over $\IZ$ by $r$ vectors which are linearly independent over $\IR$ (hence $r\leq n$).

<ins>**Definition**</ins>. *Lattices* are discrete subgroups of maximal rank i.e. $r=n.$

<ins>**Theorem**</ins>. Every bounded convex set in $V$ is Jordan measurable.

## References

<a name="erdos-turan"></a> [1] P. Erdős and P. Turán, [On some problems of a statistical group-theory](https://users.renyi.hu/~p_erdos/1968-11.pdf), IV, Acta Math. Acad. Sci. Hung., 19 (1968) 413-435.
