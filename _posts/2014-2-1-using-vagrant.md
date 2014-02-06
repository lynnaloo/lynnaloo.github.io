---
layout: post
title: Using Vagrant to create a Sandbox for Open-Source Development
tags: vagrant, development, linux, windows
published: true
---

<p>
  As a software project grows, it typically increases in complexity, dependencies, and number of contributing developers. In the case of open-source software, not only is there a constant expansion in the number of developers, but the working environments of these contributors are likely to be much more diverse than in a similar proprietary project. In order to both embrace this diversity and maintain functioning development environments, it is crucial that developers have a method for maintaining a consistent configuration regardless of their choice of hardware or operating system. Having a uniform setup process for decreases the learning curve of the project by allowing the developers to focus on the source code, rather than problems caused by environment inconsistencies.
</p>

<p>
  The easiest way to provide a isolated, reproducible “sandbox” for software development is through the creation of a virtual environment. Virtualization software, such as Oracle’s open-source <a href="https://www.virtualbox.org/">VirtualBox</a>, allow users to host “guest” operating systems within a virtual machine on their native operating system. A developer running Mac OSX may create one virtual machine running Ubuntu 12.04, and another running CentOS and have both machines running at the same time. Obliging developers on a project to develop within a consistent guest platform can prevent many software problems by eliminating operating system inconsistencies. Project-specific versions of development tools can also then be installed without the concern of dependency conflicts because it is truly an isolated environment.
</p>

<p>
  Although creating and maintaining virtual environments is relatively straightforward, provisioning more complex software projects can make the process much more complicated. Even the most systematic processes involving installation scripts and detailed documentation can still leave some room for small inconsistencies in setup and require more work overall. Since the virtualization software is installed as an application, configuration of the virtual machine may be specific to the host operating system. In order to use familiar tools, such as browsers and text editors, developers need to create shared folders and set up port-forwarding capabilities. These functions can seem rather arduous for those who are not familiar with the the software. The harder it is to configure a development environment, the less efficient it then becomes to destroy the virtual machine and start from a clean build when necessary. The solution to providing a process for creating an effortless virtual development environment, and that which has been adopted many open-source development teams, is <a href="http://www.vagrantup.com">Vagrant</a>.
</p>

<p>
  Vagrant is an open-source project that acts as a “wrapper” for virtualization software like VirtualBox. Vagrant can create, configure, provision, and destroy virtual machines with the use of its own <a href="http://docs.vagrantup.com/v2/cli/index.html">terminal commands</a>. Not only does this simplify the configuration of virtual environments, it requires no direct user interaction with the virtualization software. Using Vagrant for the first time is as simple as creating the configuration file, known as the Vagrantfile, which describes how a virtual environment should be set up, and then using the command, “<a href="http://docs.vagrantup.com/v2/getting-started/up.html">vagrant up</a>” in the same directory. The main function of the Vagrantfile is to identify the machine necessary for the project and to configure this machine, but it can also be used to control memory management, setup provisioners, and set up shared folders. Vagrant also manages folder synchronization so that files may be edited in a shared folder in the native operating system or the virtual machine, which allows for wide diversity in the usage of development tools.
</p>

<p>
  I currently work as a software developer for the open-source ERP company, <a href="http://www.xtuple.com">xTuple</a>. In order to start developing for the <a href="https://github.com/xtuple/xtuple">xTuple's Mobile-Web client</a>, it is a requirement that developers have a 64-bit Ubuntu 12.04 operating system to use the install scripts and to run the application datasource. In order to use Vagrant to manage the creation of the required environment, I created and added a Vagrantfile to the repository that contains the link to the correct Ubuntu machine image and the path of the scripts to be used to provision the virtual machine. With this method, all developers who contribute to the project use this same Vagrantfile and thus create identical development environments, containing identical software configurations. Regardless of their host operating system, or their preferred code editor, this process allows them to create a development environment and begin coding in the time it would normally take to read through the environment setup documentation.
</p>

<p>
  More information on <a href="http://docs.vagrantup.com/v2/getting-started/index.html">getting started</a> with Vagrant, or <a href="http://docs.vagrantup.com/v2/why-vagrant">why Vagrant</a> would be a good solution for you, there is a wealth of documentation available on their website. If you would like to try the Vagrant setup that I use to create the xTuple virtual development environment, you can start <a href="http://www.gitub.com/lynnaloo/xtuple-vagrant">here</a>.
</p>