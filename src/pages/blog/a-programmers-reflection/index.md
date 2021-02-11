---
title: "A Programmer's Reflection"
date: "2021-02-11"
---

![photo](a-programmers-reflection.jpg)

Junior to intermediate developers can relate.

## It All Started With A Client Meeting

Yesterday, the company I work for had a retrospective meeting with one of our clients. The team at our company that works on that project has met with the team at the client company that handles the project on their end.

It was scheduled for three hours and we talked about the past year, so obviously a lot of things were brought up and discussed. In the end, one thing in particular stuck out to me more than the other topics. It's not because the rest were unimportant, but because this one is an important realization for me.

Here's what happened:

When we came to the topic about the current situation of the project, a colleague of mine, a fellow developer, said something that led to this blog post.

He said that the system is not ready to use in production. That's interesting to hear, especially since the system is already released to production.

That's right.

While we're developing incoming features of the system, our client also rolled out the first version to one of their own clients. This is to test the MVP (minimum viable product), gather feedback, and train these first users to use the new system. That means development of new features and maintenance in production is already happening in parallel.

We're using the agile methodology, by the way. I'm going to share one of my favorite pieces of content regarding software development. If you won't read the entire article, I'll extract the best part for you:

>## Back to Basics

> "Building software in an agile fashion will always be speedier, team members will be more motivated and overall outcomes will be better compared to the plan-months-ahead waterfall style development. As the benefits are immediate...

> When building a product, do it in an agile way. Do small changes, get immediate feedback, do small iterations and make decisions that allow future changes as much as possible."

> Source: [What Agile Really Means](https://blog.pragmaticengineer.com/what-agile-really-means/)

## A Tug of War

Back to the meeting, my colleague proceeded to give examples why he thought the system isn't production-ready. The more detailed he got, the more I realized that his concern is the UI (user interface) and UX (user experience).

For example, this view is meant to do one thing. But to do that one thing, the user has to click in different places and do more steps, when it could have taken less clicks and less steps.

He's right, you know. But I'm not gonna talk about why UX is important, because we already know that (it's a whole other topic in itself). What I'm gonna talk about instead is what our CEO said in response to this.

"Well, first you have to make it work." He's also right. Spoken like a true agile practitioner. Our CEO then elaborated on making whatever you're building to work first. And then you can iterate based on the feedback, provided that you can. But more on this later.

My colleague repeated his concerns, and added that he studied this topic (I'm guessing formally, in school). And again, he's right. User experience is important.

Then another colleague said, that you can take your time perfecting every detail like this, and then you turn around and suddenly it's the deadline and you accomplished nothing.

While my colleagues were going back and forth in their discussions, the first thing that came to my mind is that the system is very big and complex. Despite the MVP out of the way, we still have a LOOOOOT of things on our plate for this project. And because of this, details in the user interface are obviously not going to be a top priority. At least not in this stage of the project, when we still have a lot of bigger features to ship.

## The Client's Problem

So while our CEO and my colleague were still at it, the client butted in. Can you guess what the client said?

If you'd ask me, I might guess that he complained why the system isn't built perfectly in the first try.

But instead, he said that the current system that their clients are using, the same system that our product will replace, is very unstable. It could fail anytime. He didn't say this next part, but that also means that when it does fail, it will cost them and their clients a lot of money.

He did say that they are under a lot of pressure because of this, that's why they need to rollout ASAP. That's why they already rolled out to the first customer that could accommodate it.

This just confirmed the point of this blog post, which is:

**In a perfect world, we can make everything pretty and nice in the beginning. In an ideal world, we have all the time and money we need. But we aren't in a perfect world. We are in the real world, where we have actual real-life constraints.**

And in this case, the constraint is that the client has a budget, and they have a deadline.

## What Do You NEED?

I totally sympathize with my fellow developer colleague who brought up his two cents. He's coming from a position of caring about the product, that's why he had this concern in the first place.

However, I do agree that as people who implement features, it's important to also see the big picture.
And in this case, the big picture is that replacing their current system with a stable one as soon as possible is the NEED of the client (while having the best UX is not).

## Don't Be A Race Horse

I'm gonna share a very good metaphor my dad told me in a different situation, but you'd agree it applies here very well.

Race horses use this thing called "blinders" around their eyes, which prevents them from seeing what's at either side. This helps avoid distraction from other horses that are racing beside them, so they can focus and look ahead.

If, as software developers, we don't look at the bigger picture, we are like these race horses. We only see one side. For creators, this "one side" is usually whatever we're directly working on. **I suggest we take the "blinders" off, so we could be more effective at what we do.**

## Developer vs. Engineer

I think this is what separates a software engineer from a software developer. I read something a while back, that at its core, engineering is "solving problem X, given Y and Z, while considering the constraints A, B, and C." A developer develops, an engineer engineers. A developer is concerned about developing a feature of the software. An engineer considers the constraints as well. And we only went over the business constraint. What about all the technical constraints?

That's why it is the engineers who design what the developers will build. And by "design", I definitely did not mean graphic design, but more on the system design.

Anyway, as programmers, a familiar pitfall is to get too caught up with our code. We get "married" to it. But what about the big picture? What does the client NEED? Why do they need it? And then ask "why" even more.

I'm not saying my colleague is stupid (he wouldn't be working at the company as a software developer if he is). I actually go to him for help regarding the parts of our system of which he is an expert. But we are both "juniors". Let me rephrase - we are both VERY juniors compared to our CEO, and it showed. And as we all gain more experience in software development projects, we gain wisdom like these. I surely did, and I'm sharing this so that hopefully I'm not the only one who learns.

And our CEO? As you might have guessed, he mentioned it's important to look at the big picture. Then he apologized to my colleague for not effectively communicating the big picture to us developers. That is some leadership right there (but again is another topic on its own).

## Good Enough vs. Perfect

What about the whole, "it's good enough" versus "it's not perfect" debate that I introduced in the beginning?

Well, **the answer is to prioritize, since we already established that we can't have everything.**

In a perfect world, we can build our **dream product** because we have **unlimited time and money**. We don't. If you ignore that, then nothing is ever finished.

What about you, did you have a similar experience in your journey as a dev?