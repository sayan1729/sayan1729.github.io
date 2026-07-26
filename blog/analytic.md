# Analytic Number Theory

At an (admittedly somewhat simplified level) analytic number theory studies the distribution of prime numbers. How many are there? How frequently do they appear? How are they distributed within arithmetic progressions? How large and small can gaps between consecutive primes be? Are there infinitely many primes in other interesting sequences (such as the numbers $x^2+1,$ or the Markoff numbers)? What happens when you add them -- can any number be written as a sum of $2$ or $3$ primes, with the number depending on parity?

Answers to these questions are often thought of as having intrinsic interest to number theorists, and it's pretty rare that these results can get used in other parts of math (though sometimes Dirichlet's theorem gets applied in algebraic number theory--but I'll get to that).

The two classic "big theorems" you'll probably see in a first course on the subject are Dirichlet's Theorem on Primes in Arithmetic Progressions, and the Prime Number Theorem. Dirichlet's Theorem tells us that if h and k are coprime positive integers, then the arithmetic progression $h, h+k, h+2k, h+3k, \dots$ will contain infinitely many primes. This is often used to show that such an arithmetic progression just contains a single prime, i.e., that there is a prime congruent to $h \mod k$ so long as $h$ and $k$ have a GCD of $1.$ Being able to construct a prime with these properties is occasionally useful in the rest of number theory. The Prime Number Theorem (PNT) tells us that the number of primes less than a large number $x$ is asymptotic to $x/\log(x)$, where $\log$ is the natural logarithm.

Now, it's often very easy to get lost in the beginning of a course on ANT, because there are a lot of mini-ideas that go into these proofs, along with some larger ideas. Most typically, these "count the number of primes up to $x$" questions are thought of in terms of the partial sums of the indicator function of the primes (that is, a function that's $1$ when you input a prime number and $0$ otherwise). Thus, we're interested in what kinds of results we can get about these partial sums. An in fact, often you start out by estimating partial sums of other arithmetic functions, such as the Euler $\phi$ function or the divisor counting function. Results about the partial sums of these can be interesting in their own right, and are a nice test ground for the techniques we build. In this side of the theory, there are three key ingredients: Dirichlet convolution, summation by parts, and estimating sums with integrals. Dirichlet convolution is a nice operation on arithmetic sequences, which ends up "behaving well" with the operation of taking sums up to $x$ (this is made rigorous by things like the Dirichlet Hyperbola Identity). This lets you "take apart" sums of hard arithmetic functions into sums of easier to estimate things. Summation by parts is a bit like integration by parts, and lets you add in "weights", which can make things easier to work with. As an example, you end up replacing the prime counting function with the sums of the Von Mangoldt function, which behaves as a "proxy for the primes," which you can do by summation by parts, and which you do because the Von Mangoldt function fits into nice dirichlet convolution identities. Finally, if you get simple sums, such as of $1/n,$ you can often estimate them with an integral, and there are theorems giving you good error bounds on that which basically make quantitative the integral test for convergence.

## The theory of primes and L-functions

These books cover the core, classical topics in ANT such as the PNT, the Riemann-Zeta function, Dirichlet L-functions, and Dirichlet's theorem on primes in arithmetic progressions. You absolutely need to see this material to be able (IMO) to call yourself an analytic number theorist. This splits into two levels:

### Beginner level

Stopple -- A Primer on Analytic Number Theory
Jameson -- The Prime Number Theorem
Apostol -- An Introduction to Analytic Number Theory
Within this level, you should absolutely read Apostol. It's the standard book for a first course in analytic number theory. There's a tremendous amount of material there, especially regarding Gauss sums, that's not easy to find elsewhere. However, I had a lot of trouble with Apostol for self-study, as he doesn't always do a good job motivating things/distinguishing key techniques from individual tricks or estimates. You might find a book like Jameson or Stopple to be a good compliment to Apostol as they focus more on that.

### Advanced level

Davenport -- Multiplicative Number Theory
Montgomery & Vaughan -- Multiplicative Number Theory
Tenenbaum -- Introduction to Analytic and Probabilistic Number Theory
These books go into more advanced topics. Davenport and Montgomery & Vaughan I and II give better bounds on Dirichlet and the PNT and cover subjects like Vinogradov's theorem and the Large Sieve; Tenenbaum and Montgomery & Vaughan II go into probabilistic methods. Some of these books start bringing in Fourier analytic techniques (van der Corput's lemma and equidistribution) and Sieve Methods. If you read all three volumes of Montgomery & Vaughan, you probably can skip both Tenenbaum and Davenport; that said I would strongly recommend reading Davenport as it's short and reads like poetry, and is the standard pick for a 2nd course in analytic number theory. Davenport doesn't have exercises, though.

## The Circle Method

Nathanson -- Analytic Number Theory I: The Classical Bases (the first half)
Vaughan -- The Hardy-Littlewood Method
If you want to read both, you should probably read Nathanson's book first as it's less advanced, but Vaughan's book is the standard reference.

## Sieve Methods

Nathanson -- Analytic Number Theory I: The Classical Bases (the second half)
Friedlander & Iwaniec -- Opera de Cribro
Broughan -- Bounded Gaps between Primes
Again, Nathanson's book is perhaps simpler and better to read first. Friedlander & Iwaniec is very long but is the standard reference. Broughan's book may also be of interest, as it specifically covers the ideas in the Bounded Gaps in Primes proof.

## Additive Combinatorics

Nathanson -- Additive Number Theory II: Inverse Problems and the Geometry of Sumsets
Yufei Zhao -- Graph Theory and Additive Combinatorics
Tao & Vu -- Additive Combinatorics
Nathanson's book is certainly the simplest of the three, but is perhaps a bit out of date since things have rapidly rapidly changed since then. Tao & Vu is the standard reference, and Zhao is a bit more combinatorial and focused on graph theoretic methods. To do work in this area you also need to understand something of Fourier Analysis and the Circle Method.

## Modular and Automorphic Forms

Apostol -- Modular Functions and Dirichlet Series
Diamond and Shurman -- A First Course in Modular Forms
Deitmar -- Automorphic Forms
Iwaniec -- Spectral Methods of Automorphic Forms
Iwaniec -- Topics in Classical Automorphic Forms
Alas, I can't say much about this area, as it's out of my specialization, but Diamond and Shurman is the standard intro (though it's more algebraic); books like those of Deitmar and Iwaniec focus more on hard analytic estimates I believe.

## Ergodic Theory & Number Theory

Tao -- Poincare's Legacies I
Einsiedler & Ward -- Ergodic Theory with a View Towards Number Theory
Furstenberg -- Recurrence in Ergodic Theory and Combinatorial Number Theory
These books talk about the role of ergodic theory in things like Szemeredi's theorem and the Green-Tao theorem. Einsiedler-Ward also discusses flows on the hyperbolic plane, which I think has applications to quadratic forms. It's analytic and it's number theory, though IDK if people would call it "analytic number theory."

## The big reference

Iwaniec & Kowalski -- Analytic Number Theory
This book is the standard pick for a 3rd course in analytic number theory. It's got some of everything in it, and is a panoramic view of the subject. Kinda terse as a result, but much beloved as a reference.

## Other Number Theory

Ireland & Rosen -- A Classical Introduction to Modern Number Theory
Robert -- A Course in P-Adic Analysis
Koblitz -- p-adic numbers, p-adic analysis, and zeta functions
Ramakrishnan & Valenza -- Fourier Analysis on Number Fields
Silverman & Tate -- Rational Points on Elliptic Curves
These all focus on topics that are a bit more algebraic (Koblitz, Robert, and Ramakrishnan & Valenza are somewhat analytic, but mostly with a view towards algebraic things). You should certainly read Silverman & Tate and Ireland & Rosen "for culture." Robert's book is a good intro to p-adic things, as is Koblitz's book; while algebraic people deal with them all the time typically analytic number theorists only deal with them if they work in automorphic forms/Langlands stuff. Same with Tate's thesis (the subject of Ramakrishnan & Valenza).

The analysis books by Stein and Shakarchi have a bit of a view towards number theory and harmonic analysis. In particular, they prove Dirichlet's theorem and the PNT. Also, Terry Tao has a bunch of good "special topics" books. He's got a book on higher order Fourier analysis (a powerful quantitative technique in additive combinatorics), Expansion in Finite Simple Groups of Lie Type (about the Bourgain-Gamburd expansion machine and related topics), Random Matrix Theory (which predicts the distribution of zeta zeros on the critical line), etc.
