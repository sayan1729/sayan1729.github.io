---
title: On topoi
---

## Historical motivation
One of Grothendieck's most profound ideas (even according to himself) is the notion of *topos*; equivalently, the categories of sheaves on a site. Artin and Grothendieck famously defined the &eacute;tale site $X_\text{\'et}$ of a scheme, and used the resulting cohomology theory $H^i(X_\text{\'et},\mathbb{Z}/\ell^n\mathbb{Z})$ to attack the Weil, resulting in Deligne's full proof. There was always one minor technical point in the theory: one would really like to take coefficients in the field $\mathbb{Q}_\ell$ of characteristic $0,$ but &eacute;tale cohomology only works well with torsion coefficients, so one makes the ad hoc definition

$$H^i(X_\text{\'et},\mathbb{Q}_\ell):=\left(\lim_{\underset{n}{\longleftarrow}}H^i(X_\text{\'et},\mathbb{Z}/\ell^n\mathbb{Z})\right)\otimes_{\mathbb{Z}_\ell}\mathbb{Q}_\ell.$$

In practice, any abstract result on $\ell$-adic cohomology can be proved using torsion coefficients and then formally passed on to $\mathbb{Q}_\ell$-coefficients, so this remained a well-known but largely supressed technical nuisance.

However, Scholze's work in $p$-adic Hodge theory made it necessary for him to improve the foundations. In particular, Bhatt and Scholze introduced the pro-&eacute;tale site $X_\text{pro\'et}$ of a scheme. To any topological ring, for example $\mathbb{Q}_\ell,$ one can associate a sheaf (of abstract rings) on $X_\text{pro\'et},$ which one still denotes $\mathbb{Q}_\ell.$ Using this definition, $H^i(X_\text{pro\'et},\mathbb{Q}_\ell)$ recovers the cohomology groups introduced above, and the foundational problems disappear.

But now something profound happens. Namely, when $X$ is just a (geometric) point $*,$ sheaves on $*_\text{pro\'et}$ are no longer sets, as happens in all standard settings. In fact, any topological space $\mathcal{T}$ defines a sheaf on $*_\text{pro\'et}.$ Here, $*_\text{pro\'et}$ can be defined as the site of profinite sets $S,$ with covers given by finite collections of jointly surjective maps; and a topological space $\mathcal{T}$ is sent to the sheaf taking $S$ to the set of continuous maps from $S$ to $\mathcal{T}.$ The resulting functor from topological spaces to sheaves on $*_\text{pro\'et}$ is fully faithful when restricted to compactly generated topological spaces.

Scholze regarded this feature of the pro-&eacute;tale site - that one cannot really understand sheaves on a point - as a pathology, until Clausen convinced him that this was really a feature, and that in fact one should replace topological spaces $\tau$ with sheaves on $*_\text{pro\'et},$ and use this as a new foundation for topology, in particular also for topological vector spaces, topological rings, etc. Clausen and Scholze termed this *condensed mathematics*: a **condensed set** is a sheaf on $*_\text{pro\'et},$ giving rise to condensed groups, condensed rings, etc.

In the algebraic topology literature, it had long been realised that the category of topological spaces is not very well-behaved, and in particular lacks internal $\text{Hom}$-objects. This led to various "convenient categories of topological spaces" like compactly generated Hausdorff spaces, but also work of Johnstone trying to find such a category that forms a topos, and the work of Spanier using a definition closely related to condensed sets. According to Scholze himself, condensed sets are, in a sense, the ultimate "convenient category of topological spaces", and come with the added bonus that they form a topos (*suppressing some mild set-theoretic subtleties*).

## Topoi as a replacement of 'sets'
Traditional mathematics is based on the notion of a 'set.' Grothendieck observed that there were different notions, very closely related to set, but somewhat stranger, and that one could essentially do all of usual mathematics but using these strange sets instead of usual sets. A **topos** is just a "class of objects which can replace sets." There are some precise axioms for what this class of objects should obey (called *Giraud's axioms*), and one can redo much of traditional mathematics using one's topos: there is a version of group theory inside any topos, there is a version of vector spaces inside any topos, a version of ring theory inside any topos, etc. At first this might seem strange or silly: group theory is already very hard, why make it even harder by forcing oneself to do it in a topos instead of using usual sets ! To better understand Grothendieck's original motivation for topoi, one may also consider the next viewpoint: *topoi as a generalisation of topological vector spaces*.

## Topoi as a generalisation of topological vector spaces
Grothendieck studied algebraic geometry; this is the mathematics of shapes defined by graphs of polynomial equations: for example, the polynomial $y = x^2$ defines a parabola, and so algebraic geometers are interested in the parabola, but the graph of $y = e^x$ involves this operation "$e^x$", and so algebraic geometers do not study it, since you cannot express that graph in terms of a polynomial.

At first glance, this seems strange: what makes shapes defined by polynomial equations so special? But one nice thing about an equation like $y = x^2$ is that *it makes sense in any number system*: you can ask about the solutions to this equation over the real numbers (where you get the usual parabola), the solutions over the complex numbers, or even the solutions in *modular arithmetic*: that is, asking for pairs of $(x, y)$ such that $y = x^2\pmod{5}$ or something.

This on its own is perhaps not that interesting. But the great mathematician Andre Weil realized something really spectacular:

If you graph an equation like $y = x^2$ over the complex numbers, it is some shape.

If you solve an equation like $y = x^2$ in modular arithmetic, it is some finite set of points.

Weil, by looking at many examples, noticed: the shape of the graph over the complex numbers is related to **how many points** the graph has in modular arithmetic!

To illustrate this point, let me say a simple example, called the "Hasse-Weil bound." When you graph a polynomial equation in two variables $x, y$ over the complex numbers (and add appropriate 'points at infinity' which I will ignore for this discussion), you get a **$2$-d shape in $4$-d space**. This is because the complex plane is $2$-dimensional, so instead of graphs being $1$-d shapes inside of $2$-d space, everything is doubled: graphs are now $2$-d shapes inside of $4$-d space.

The great mathematician Poincare actually classified all possible $2$-d shapes; they are classified (ignoring something called 'non-orientable' shapes) by a single number called the **genus**. The genus of a surface is the number of holes: a sphere has genus $0$ (no holes), but a torus (the surface of a donut) has genus $1$ (because it has $1$ hole, the donut-hole).

Weil proved a really remarkable thing: if we set $C = \#$ of solutions to your equation in $\mod{p}$ arithmetic, and $g =$ genus of the graph of the equation over complex numbers, then you always have

$$p - 2g\sqrt{p}\leq C\leq p + 2g\sqrt{p}.$$

This is really strange! Somehow the genus, which depends only on the *complex numbers incarnation of your equation*, controls the point count $C,$ which depends only on the *modular arithmetic incarnation of your equation*.

Weil conjectured that this would hold in general; that is, there'd be some similar relationship between the complex number incarnation of a polynomial equation, and the modular arithmetic incarnation, even when you have more than two variables (so maybe something like $xy = z^2$ instead of only $x and y$), and even when you have systems of polynomial equations.

It is not an exaggeration to say that much of modern algebraic geometry was invented by Grothendieck and his school in their various attempts to understand Weil's conjecture. In Grothendieck's attempt to understand this, he realized that one needed a new definition of "topological space," which allowed something like "the graph of $y = x^2$ in $\mod{17}$ arithmetic" to have an interesting 'topology.' This led Grothendieck to the notion of the **Grothendieck topology**, a generalization of the usual notion of topological space.

But while studying Grothendieck topologies more closely, Grothendieck noticed something interesting. In most of the applications of topology or Grothendieck topology to algebraic geometry, somehow the points of your topological space, and its open sets, were not the important thing; the important thing was something called the **sheaves** on the topological space (or the sheaves on the Grothendieck topology). This led Grothendieck to think that, *instead of the topological space or the Grothendieck topology, the important thing is the sheaves*. Sheaves, it turns out, behave a lot like sets. The class of all sheaves is called the **topos** of that topological space or Grothendieck topology; and it turns out that, at least in algebraic geometry, this topos is somehow the morally correct object, and is better behaved than the Grothendieck topology.
