---
title: Spiral of decentralized and centralized
date: '2022-11-26'
---

I listened to this one and found it informative, so I summarized it here.

[29. The Aesthetic of Technology Selection (2) w/ twada | fukabori.fm](https://fukabori.fm/episode/29)

The overall story was that computing is developing and that the trends of distributed computing and centralized computing have been coming and going, and he summarized this broad historical trend.

The author's assumption is that he has been involved in the industry since 2019.

In this article, I will dig deeper and look at the terms in more detail.

## Good Old Web

First, we're talking about business systems and such using [Visual Basic](https://ja.wikipedia.org/wiki/Visual_Basic) and SQL servers. This was around 2000. It was described as a two-tier architecture, i.e., screen and SQL only. I thought this was somewhat similar to the development experience of [Next.js](https://nextjs.org/), which blurred the boundary between the server side and client side and made it look like a two-tier system.

Next, I heard that @t*wada had developed a monolithic [LAMP(Linux, Apache, MySQL, PHP)](<https://en.wikipedia.org/wiki/LAMP*(software_bundle)>) real estate search service. I heard that @t_wada had developed a real estate search service using I had heard of LAMP, but this was the first time I heard of an actual case study, so it was new to me. It was a time when browsers were doing a simple job of displaying HTML rendered by PHP. At the same time, not only PHP but also [Java Servlet](https://ja.wikipedia.org/wiki/Java_Servlet) and others were mainstream. This was around 2002.

Here, **there was a transition from a two-tier architecture of Visual Basic and SQL to a three-tier architecture with LAMP**. This is the beginning of the flow from centralized computing to distributed computing. And the trend toward distributed computing was further strengthened in the next section.

## Distributed Computing with EJB (Enterprise JavaBeans) and SOAP (Simple Object Access Protocol)

Business systems were complex and had many reusable parts, so there was a demand to connect multiple systems.

[EJBs (Enterprise Java Beans)](https://ja.wikipedia.org/wiki/Enterprise_JavaBeans), which are components that implement some kind of business logic, have appeared in the context of solving the above problems. EJB (Enterprise Java Beans)]() is a component that implements business logic.

[SOAP (Simple Object Access Protocol)](<https://ja.wikipedia.org/wiki/SOAP_(%E3%83%97%E3%83%AD%E3%83%88%E3%82%B3%E3%83%AB)>) is an implementation of the [XML](https://ja.wikipedia.org/wiki/Extensible_Markup_Language) based [RPC](https://ja.wikipedia.org/wiki/%E9%81%A0%E9%9A%94%E6%89%8B%E7%B6%9A%E3%81%8D%E5%91%BC%E5%87%BA%E3%81%97) protocol. It allows processes running on different languages and operating systems to communicate with each other via XML. Eventually, the specification became less and less simple, and there was an interesting statement that SOAP is not an abbreviation for Simple Oriented Access Protocol.

These ideas are based on the [SOA (Service-Oriented SOA (Service-Oriented Architecture)](https://ja.wikipedia.org/wiki/%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E6%8C%87%E5%90%91%E3%82%A2%E3%83%BC%E3%82%AD%E3%83%86%E3%82%AF%E3%83%81%E3%83%A3) SOA refers to the construction of an entire system by considering software functions that correspond to a single business process as services, and linking these services together over a network. This has been reaffirmed with the rise of cloud computing. Specifically, if software is configured in units equivalent to a single business process and service interfaces are defined using open and standardized technical specifications, it is considered SOA.

[What is Service Oriented Architecture? Service Oriented Architecture Explained - AWS](https://aws.amazon.com/jp/what-is/service-oriented-architecture/)

## The Impact of Ruby on Rails' Transition to Monolithic

I didn't know much about [Ruby on Rails](https://rubyonrails.org/) when it first appeared, but I was convinced that it would be a shock if they released a video on how to create a blog in 10 minutes. I'll post the YouTube video that was also posted in the "Show note" page.

[(1) Ruby on Rails demo - YouTube](https://www.youtube.com/watch?v=Gzj723LkRJY)

In his talk about distribution and concentration, he mentioned that the key point of Ruby on Rails was "**Convention over Configuration**".
One of the major problems with SOA-based EJBs and SOAPs is that you have to write a lot of configuration **even though the configuration is meant to reflect a fixed set of commitments**. Ruby on Rails stood as the antithesis of that.

In fact, even in the pre-Ruby on Rails era, [Spring Framework](https://ja.wikipedia.org/wiki/Spring_Framework) and [Seasar](https://ja.wikipedia.org/wiki/Seasar), but these frameworks were also influenced by Ruby on Rails after its debut and were designed based on conventions.

## Web-based distributed systems

Ruby on Rails, a monolithic framework, was born out of the idea that distributed systems are difficult to implement.
**However, I realized that there was a successful distributed distributed system around me. That distributed system was actually the World Wide Web. **
The design of distributed systems began to shift from RPC to Web-based. Together with [Ajax](https://ja.wikipedia.org/wiki/Ajax), architectures for server-client and server-to-server interactions using JSON began to increase. In addition, with the advent of cloud computing, container technology, and continuous delivery, the trend toward distributed systems such as microservices has come around again.
Furthermore, the shift from server-driven API definitions to client-driven API definitions, symbolized by [GraphQL](https://graphql.org/) and [gRPC](https://grpc.io/), has reinforced the realization of microservices. From this point of view, GraphQL certainly emphasizes the lack of agreements between the server side and the client side.

## Impressions

There were a lot of things I didn't know, and I think it clearly reinforced my impression of ongoing technologies.
I would like to study spirals from other perspectives.
