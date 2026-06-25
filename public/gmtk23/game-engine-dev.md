<!-- # A Full-Course Meal of Machine Learning

## *Apéritif algorithmique*

- **Berkeley CS61A** : [Structure and Interpretation of Computer Programs.](https://cs61a.org/)
- **CMU 15-445** : [Database Systems.](https://www.youtube.com/playlist?list=PLSE8ODhjZXjYDBpQnSymaectKjxCy6BYq)
- [**Data Analysis**](https://youtube.com/playlist?list=PLzH6n4zXuckpfMu_4Ff8E7Z1behQks5ba&si=P6A0TZBAkVCCpE-k) by Dr. Mike Pound.
- **MIT 18.S191** : [Introduction to Computational Thinking.](https://computationalthinking.mit.edu/)
- **MIT 6.006** : [Introduction to Algorithms.](https://youtube.com/playlist?list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY&si=5OqIEL22TLMvLvxA)

The following resources contain content not usually taught in courses but incredibly useful in practice

- [**Automate the Boring Stuff with Python**](https://automatetheboringstuff.com/) by Al Sweigart.
- [**The Missing Semester of Your CS Education**](https://missing.csail.mit.edu/) by MIT.

## *Hors-d'œuvre mathématique*

### Linear Algebra, Differential Equations and Multivariate Calculus

- **Berkeley MATH 54** : [Linear Algebra and Differential Equations.]( <https://math.berkeley.edu/~apaulin/54_001(Spring2018).html>)
- **Paul's Online Math Notes** : [Calculus III.](https://tutorial.math.lamar.edu/Classes/CalcIII/CalcIII.aspx)
- **Paul's Online Math Notes** : [Differential Equations.](https://tutorial.math.lamar.edu/Classes/DE/DE.aspx)
- **MIT 18.02SC** : [Multivariable Calculus.]( <https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/>)

For a second-course in linear algebra, covering finite dimensional inner product spaces leading upto functional analysis, the following book is recommended

- [**Linear Algebra Done Right**](https://linear.axler.net/) by Sheldon Axler.

### Real and Functional Analysis

- **MIT 18.100B** : [Real Analysis.]( <https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/>)
- **MIT 18.102** : [Introduction to Functional Analysis.]( <https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/>)
- **ICTP MTH-RA** : [Real Analysis.]( <https://youtube.com/playlist?list=PLLq_gUfXAnknTQofOxC3WpseyusORewKB&si=OQ1vyM2nlSSg3lGU>)
- **ICTP MTH-FA** : [Functional Analysis.]( <https://youtube.com/playlist?list=PLp0hSY2uBeP8fav3g6SNIYnt-00klqmx9&si=zOsaEikRsViHTq9K>)

### Probability and Statistics

Some classic textbooks would be

- **An Introduction to Probability Theory and its Applications, Vol. I** by William Feller.
- **A Course in Probability Theory** by Kai Lai Chung.
- **Fifty Challenging Problems in Probability** by Frederick Mosteller.
- **Mathematical Statistics and Data Analysis** by John A. Rice.
- **Statistical Inference** by George Casella and Roger L. Berger.

Some university courses with material available online

- **Berkeley Stat 134** : [Concepts of Probability.]( <https://www.stat134.org/>)
- **Berkeley Stat 135** : [Concepts of Statistics.]( <https://yu-tong-wang.github.io/teaching/courses/stat135/>)
- **Berkeley Data 140** : [Probability for Data Science.]( <https://data140.org/>)
- **MIT 6.436J** : [Fundamentals of Probability.]( <https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/>)

### Time Series Analysis, Convex Optimization and Numerical Analysis

For time series analysis the following book is recommended

- [**Time Series Analysis**](https://henrikmadsen.org/books/time-series-analysis/) by Henrik Madsen.

The above text is accompanied by the lecture course

- **DTU 02417** : [Time Series Analysis.](https://youtube.com/playlist?list=PLtiTxpFJ4k6TZ0g496fVcQpt_-XJRNkbi&si=8Ma75uRLShjpSTCQ)

The classic textbook reccomendation for convex optimization is

- [**Convex Optimization**](https://stanford.edu/~boyd/cvxbook/) by Stephen Boyd and Lieven Vandenberghe.

Some university courses to accompany the above text would be

- **Berkeley EECS 127** : [Optimization Models in Engineering.]( <https://sites.google.com/view/eecs-127227at/>)
- **Princeton ECE 539** : [Optimization for Machine Learning.](https://sites.google.com/view/cjin/teaching/ece539cos512-2021-ver)
- **Stanford EE364A** : [Convex Optimization I.]( <https://stanford.edu/class/ee364a/index.html>)

For numerical analysis the following books are recommended

- [**Numerical Analysis**](https://people.cs.uchicago.edu/~ridg/newna/nalrs.pdf) by L. Ridgway Scott.
- **Numerical Linear Algebra** by Lloyd N. Trefthen and David Bau, III.

The following lecture course goes well with the above texts

- **MIT 6.S955** : [Applied Numerical Algorithms.](https://www.youtube.com/playlist?list=PLQ3UicqQtfNv_Io_NT1b0Nzr9YDqpK3Lb)

## *Plat principal*

The follow university courses cover most of the standard topics: machine learning, deep learning and neural networks are *core* whilst reinforcement learning, computer vision and natural language processing are *electives*.

### Machine Learning

- **Berkeley CS 189** : [Introduction to Machine Learning.]( <https://eecs189.org/>)
- **Cornell CS 4780** : [Machine Learning for Intelligent Systems.]( <https://www.cs.cornell.edu/courses/cs4780/2018fa/>)
- **Stanford CS 229** : [Machine Learning.]( <https://cs229.stanford.edu/>)

### Deep Learning and Neural Networks

For intuition, nothing beats 3Blue1Brown

- **3Blue1Brown** : [Neural Networks.](https://youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi&si=2ub6Q4pGlTMk81yk)

To go more in-depth -->

# Computer Graphics Roadmap

## Overview

If you want to be an **engine programmer**, listen to engine programming veterans and not some randoms that will yell about clean code, best practices, patterns and crap like that - small bits of it are useful but 95% of that knowledge is garbage. Keep it simple and avoid thinking about "optimal" or "clean" solutions. First implement a feature and then you will see patterns and repeats that are in most cases trivial to "make clean".

There are two approaches for becoming a **graphics programmer**:

- **Technical graphics programmer**: Start right away with Vulkan and C++. You have a programming-based and technical-oriented mindset and you will manage and control all of the intricate details of the GPU render pipelines and such. In this case you just implement existing techniques or published scientific papers, and you try to translate them to hardware. So you won't bother with what the algorithm does, but mostly about how you can control the details of Vulkan best.

- **Graphics research scientist**: Start with mathematics and other statistical tools, to find new algorithms or optimise existing algorithms. You won't have to bother with Vulkan so much, obviously you will write C++ and perhaps you might use some third-party APIs (eg: accelerated data structures / denoisers) to make certain parts of your demos optimal. But obviously you won't have to bother with all of the details of Vulkan.

## Resources

We assume you are already fairly proficient in C++ - if not you can check out TheCherno on YouTube.

Casey Muratori's [**Performance-Aware Programming Series**](https://www.computerenhance.com/p/table-of-contents) covers knowledge that is a must for any serious graphics or engine programmer.
 

These are some textbooks that are essential for graphics and enginer programmers:

- **Computer Graphics: Principles and Practice**, *3rd edition* by *Foley*, *van Dam* et Al.

    Good book for learning the fundamentals of computer graphics. Very theoretical and extremely challenging exercises. Can be used as a reference as well as a textbook for learning the underlying graphics theory and maths.

- **Game Engine Architecture**, *3rd edition* by *Gregory*.

    Strongly advised to read from cover to cover, this is written by a lead engine programmer at Naughty Dog and explains how you should design a game engine. This book is a perfect mix of plenty of other books put together in a cohesive way. It's a prerequisite to know all the topics he mentions.

- **Real-Time Collision Detection**, by *Ericson*.

    A practical and very accessible treatment of real-time collision detection. Covers an impressive range of techniques and presents them using concise mathematics, insightful figures, and practical code. Every serious engine programmer should have on his bookshelf.

- **Real-Time Rendering**, *4th edition* by *Haines*, *Hoffman*, *Möller*.

    Combines fundamental principles with guidance on the latest techniques to provide a complete reference on 3D interactive computer graphics. Useful as both a textbook and reference.

The following textbook is optional (not too useful for real-time rendering) but very useful for offline rendering (e.g. Pixar movies):

- **Physically Based Rendering: From Theory to Implementation**, *4th edition* by *Pharr*, *Jakob*, *Humphreys*.

    The leading-edge computer graphics textbook that sets the standard for physically-based rendering in the industry and the field, with new material on GPU ray tracing.