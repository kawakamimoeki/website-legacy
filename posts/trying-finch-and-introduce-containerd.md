---
title: 'Trying Finch and introduce containerd'
date: '2022-12-02'
---

AWS announces Finch.

[Introducing Finch: An Open Source Client for Container Development | AWS Open Source Blog](https://aws.amazon.com/jp/blogs/opensource/introducing-finch-an-open-source-client-for-container-development/)

The author uses a Mac and uses Docker Desktop or [colima](https://github.com/abiosoft/colima) x Docker CLI to realize a Docker development environment. Dcoker Desktop uses an internal [ HyperKit](https://github.com/moby/hyperkit) (macOS hypervisor) to launch a Linux VM and run dockerd in it. Docker Desktop is based on Lima, and it generates Lima configuration files, and it is used to run Linux.

- Prepare Linux environment by generating Lima configuration file
- Install Docker on Linux on Lima environment
- Prepare an environment that allows transparent connection between Docker CLI on the host side (i.e., macOS side) and Docker on Linux on Lima

Docker development support is provided by doing the following. At this point, I was aware of Lima's existence, but the AWS article suggests that Lima itself is quite exciting.

What is the background behind Finch's announcement, i.e., the entry of Alternative Docker? To be honest, I have never actually used Kubernetes and am not familiar with it, so I recognized the story of Kunernetes quitting Docker when I started finding the following articles in the wake of this Finch.

Reference: [Migration from Docker to containerd (NTT Tech Conference 2022 Presentation Report) | by Akihiro Suda | nttlabs | Medium](https://medium.com/nttlabs/docker-to-containerd-4f3a56e6f2b6)

Looking at the details, it seems that Kubernetes used to touch Docker for managing containers on distributed environments, but in recent years, they started to use [containerd](https://containerd.io/) directly.

! [](https://miro.medium.com/max/1400/1*HL7tRfSRwv8fLleLRDvDXQ.webp)
https://speakerdeck.com/ktock/dockerkaracontainerdhefalseyi-xing?slide=7

Direct use of containerd? containerd? turns out I didn't know anything about container technology.
containerd was originally developed by Docker in 2015 as a daemon that provided basic container management capabilities under Docker. containerd's scope has gradually expanded and now seems to cover almost everything in the Docker Engine. For example, [nerdctl](https://github.com/containerd/nerdctl) is a CLI for containerd; the UX is almost identical to the Docker CLI, and Docker Compose is also supported (`nerdctl compose`).

Back to Kubernetes, according to CHANGELOG, there was a maintenance problem with Docker's Container Runtime Interface (CRI) called dockershim.

> The kubelet uses a module called "dockershim" which implements CRI support for Docker and We encourage you to evaluate moving to a container runtime that is a We encourage you to evaluate moving to a container runtime that is a full-fledged implementation of CRI (v1alpha1 or v1 compliant) as they become available.

[kubernetes/CHANGELOG-1.20.md at master - kubernetes/kubernetes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.20.md#deprecation)

To summarize, containerd was born and derived from Docker and has expanded its own domain, containerd was chosen over Docker due to maintenance issues with Kubernetes, and there is now both a method and a reason to manage containerd directly. And against this backdrop, Finland's FinnServer has been gaining momentum. Before Finch, most containerd users would have used Lima directly.

In addition, the Finch article also mentions [BuildKit](https://github.com/moby/buildkit), which should also be kept in mind. As before, I will focus on understanding the relationship with Docker. I remember myself, and I have seen things like `DOCKER_BUILDKIT=1 docker build . I had a chance to see something like `DOCKER_BUILDKIT=1 docker build . This is a way to use BuildKit with Docker, which seems to have the following advantages over the Docker default build

- Multiple stages of a build can be executed in parallel.
- A mechanism (RUN --mount command in the Dockerfile) can be used to prevent sensitive information from being left in the build artifact (including cache)
- Local files can be used for builds only
- Remote files can be retrieved via SSH connection at build time
- Build cache import/export
- Distributed builds

I see. The build cache and parallel execution seem powerful, and I think we can assume that these features are available by default in Finch.

Now that you understand the significance of Finch, let's actually use it.

```
brew install finch
```

First, I tried to set up the configuration of finch, following the README as follows.

```yaml:~/.finch/finch.yaml
cpus: 8
memory: 8GiB
```

And initialize vm.

```
finch vm init
```

Now vm is up and running.
Next, we'll use Docker Compose, as well as the Docker CLI and nerdctl.

```
finch compose up
```

Here, I encountered some differences in behavior between Docker and containerd.

First, the abbreviated description of port was invalid.

```diff:compose.yaml
  db:
    ports:
-     - 5432
+     - 5432:5432
```

The other error occurred when I tried to read a file outside of the context. This time, I had to change the location of the file.

```diff:compose.yaml
  app:
     volumes:
-      - ~/.gitconfig:/root/.gitconfig
+      - ./.gitconfig:/root/.gitconfig
```

Other than that, it was the same as with Docker.

The above mentioned Finch helped me to deepen my understanding of containerd and technologies around containers. I feel that I will be able to catch the tide by gradually migrating to Finch in the future.
