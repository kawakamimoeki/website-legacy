---
title: 分散と集中の螺旋
date: '2022-11-26'
---

こちらを拝聴し、勉強になる内容だったので、まとめた。

[29. 技術選定の審美眼(2) w/ twada | fukabori.fm](https://fukabori.fm/episode/29)

全体としてはコンピューティングが発展しつつ、分散コンピューティングと集中コンピューティングの潮流が行き来してきていると言う話で、この歴史的な大まかな流れをまとめてくださっていた。

筆者の前提としては、2019 年から業界に携わってきたというところ。

この記事では、さらに詳しく用語を深掘って、見ていきたいと思う。

## Good Old Web

まずは、**[Visual Basic](https://ja.wikipedia.org/wiki/Visual_Basic)** と SQL サーバーによる業務システムとかの話。これが 2000 年くらい。これは 2 層アーキテクチャと説明されていて、つまり、画面と SQL だけのアーキテクチャであった。これはなんとなく、**[Next.js](https://nextjs.org/)** とかのサーバーサイドとクライアントサイドの垣根を曖昧にして 2 層っぽくした開発体験に近いなと思った。

その次に、モノリシックな **[LAMP(Linux, Apache, MySQL, PHP)](<https://en.wikipedia.org/wiki/LAMP_(software_bundle)>)** による不動産の検索サービスを @t_wada さんが開発していたという話が。ただし実際には MySQL ではなく PostgreSQL だったとのこと。LAMP って聞いたことあったけど実際の事例を聞いたのは初めてだったので新鮮だった。ブラウザは PHP で描画された HTML を表示するだけの簡単なお仕事をしていた時代。同時期には、PHP だけでなく **[Java Servlet](https://ja.wikipedia.org/wiki/Java_Servlet)** とかが主流だった。これが 2002 年くらいの話。

ここで、**Visual Basic と SQL の 2 層アーキテクチャから LAMP による 3 層アーキテクチャへの移行があった**とのこと。これはつまり集中コンピューティングから分散コンピューティングへの流れの始まりにあたる。そして次項でさらに分散コンピューティングの傾向が強まった。

## EJB(Enterprise JavaBeans), SOAP(Simple Object Access Protocol) による分散コンピューティング

業務システムは複雑で再利用できるパーツが多かったので、複数のシステムを接続したい要求が出てきた。

[EJB(Enterprise Java Beans)](https://ja.wikipedia.org/wiki/Enterprise_JavaBeans)とは、なんかビジネスロジックを実装するコンポーネントのことらしく、上記の問題を解決する文脈で登場してきた。

[SOAP(Simple Object Access Protocol)](<https://ja.wikipedia.org/wiki/SOAP_(%E3%83%97%E3%83%AD%E3%83%88%E3%82%B3%E3%83%AB)>)は [XML](https://ja.wikipedia.org/wiki/Extensible_Markup_Language) ベースの [RPC](https://ja.wikipedia.org/wiki/%E9%81%A0%E9%9A%94%E6%89%8B%E7%B6%9A%E3%81%8D%E5%91%BC%E5%87%BA%E3%81%97) プロトコル。これは異なる言語、OS 上で走っているプロセスの間でも XML によって意思疎通ができるようなった。最終的には仕様が Simple でなくなってきて、 SOAP は Simple Oriented Access Protocol の略語ではないですという面白い声明を出したりしていたらしい。

これらの考え方は、**[SOA(Service-Oriented Architecture)](https://ja.wikipedia.org/wiki/%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E6%8C%87%E5%90%91%E3%82%A2%E3%83%BC%E3%82%AD%E3%83%86%E3%82%AF%E3%83%81%E3%83%A3)**という言葉として定義されているよう。SOA とは、業務上の一処理に相当するソフトウェアの機能をサービスと見立て、そのサービスをネットワーク上で連携させてシステムの全体を構築していくこと。これはクラウドコンピューティングの台頭によって再認識されるようになった。具体的には、業務上の一処理に相当する単位でソフトウェアが構成されて、オープンで標準化されている技術仕様を用いてサービスのインタフェースが定義され手入れば、SOA ということらしい。

[サービス指向アーキテクチャとは何ですか? サービス指向アーキテクチャの説明 - AWS](https://aws.amazon.com/jp/what-is/service-oriented-architecture/)

## Ruby on Rails の衝撃によるモノリシックへの移行

**[Ruby on Rails](https://rubyonrails.org/)** が登場した頃のことはあまりピンときていなかったが、確かに、この流れでブログを 10 分で作るっていう動画を出したらそりゃあ衝撃を受けるよな、、と納得した。Show note にも貼ってくださっていた YouTube の動画を載せておく。

[(1) Ruby on Rails demo - YouTube](https://www.youtube.com/watch?v=Gzj723LkRJY)

今回の分散・集中の話の上において、Ruby on Rails のキモは「**設定より規約(Convention over Configuration)**」であったと話されている。
SOA を基礎とした、EJB や SOAP の大きな問題点として、**決まりきった約束事を反映するための設定であるにもかかわらず、それをたくさん書かなければいけなかった**ということがある。そこに対するアンチテーゼとして、Ruby on Rails の立ち位置があった。

実は、Ruby on Rails 以前の時代でも **[Spring Framework](https://ja.wikipedia.org/wiki/Spring_Framework)** や **[Seasar](https://ja.wikipedia.org/wiki/Seasar)** のような Java のフレームワークがあったが、これらも Ruby on Rails の登場後その影響を受けて規約をベースにした設計になっていたそう。

## Web ベースの分散システム

分散システムってやっぱり難しいよねという背景からモノリシックな Ruby on Rails が誕生し、利用されてきた。
**ただ、成功している分散している分散システムが身近にあったわ、という気づきがこの頃あった。その分散システムとは実は World Wide Web だった。**
分散システムの設計が RPC から Web ベースへ移行し始めた。[Ajax](https://ja.wikipedia.org/wiki/Ajax) とともに JSON を利用したサーバーとクライアント間のやりとり、サーバー間のやりとりを行うアーキテクチャが増え始めた。また、クラウドコンピューティングの登場やコンテナ技術、継続的デリバリーの普及によって、マイクロサービスのような分散システムの流れが再び回ってきた。
さらに、[GraphQL](https://graphql.org/)、[gRPC](https://grpc.io/) に象徴される、サーバ主導での API 定義から、クライアント主導での API 定義への変化によって、マイクロサービスの実現が補強された。このような視点から見ると、GraphQL なんかは確かにサーバーサイドとクライアントサイドの間の取り決めが少ないと言う点が強調されるような気がする。

## まとめ

知らない話がたくさんあったので、明らかに現在進行形の技術に対する視点が増えたと思う。
他の視点からも螺旋を研究してみたいと思う。
