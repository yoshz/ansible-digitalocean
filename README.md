Digital Ocean Bootstrap
=======================

Bootstrap Digital Ocean droplets using Ansible to:

* Configure SSH key
* Launch a droplet
* Configure DNS domain
* Destroy droplet

Inspired by [hostmaster/ansible-digitalocean-bootstrap](https://github.com/hostmaster/ansible-digitalocean-bootstrap).


Installation
------------

* Install [Ansible 2.0](http://docs.ansible.com/ansible/intro_installation.html)

* Make sure your python path is configured correctly. For example:

```
    # On Ubuntu
    export PYTHONPATH=/usr/local/lib/python2.7/site-packages
    # On OS X
    export PYTHONPATH=/Library/Python/2.7/site-packages
```

* Copy vars.yml.dist to vars.yml and change the variables to your need.


Digital Ocean configuration
---------------------------

Create a new API key on the [API access page](https://cloud.digitalocean.com/api_access). 
Add the api_token to `vars.yml`.


Playbooks
=========

launch.yml
----------

Launch and provision a new server on Digital Ocean.

```
    ansible-playbook -i hosts launch.yml
```

What this Playbook do for you?

- configure swap file
- install ufw, fail2ban
- configure ufw allow ports for SSH
- make sshd more secure: 
  - PermitRootLogin=no
  - PasswordAuthentication=no
  - AllowGroups=sudo
- config sudoers

destroy.yml
-----------

Destroys a server on Digital Ocean.

```
    ansible-playbook -i hosts destroy.yml
```

Known issues
------------

* dopy 0.3.7 is broken (error "name 'DoError' is not defined").
  Downgrade use version 0.3.5 using `pip install dopy==0.3.5`.

* digital_ocean_domain is broken (error "'Domain' object has no attribute 'id'") when you run the plabook the second time.
  Keep the "DNS name" empty to avoid this error.
