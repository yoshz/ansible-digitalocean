Digital Ocean Bootstrap
=======================

Bootstrap Digital Ocean droplets using Ansible to:

* Configure SSH key
* Launch a droplet
* Configure DNS domain
* Destroy droplet

Inspired by [hostmaster/ansible-digitalocean-bootstrap](https://github.com/hostmaster/ansible-digitalocean-bootstrap).

Installation
============

* Install ansible 2.0:

  * By source:

    git clone git@github.com:ansible/ansible.git
    cd ansible
    git submodule update --init --recursive
    make
    sudo make install

  * Ubuntu (v2.0 is not available yet):

    sudo apt-get install python-pip
    sudo pip install ansible dopy

  * OSX homebrew (v2.0 is not available yet):

    brew install python-pip
    pip install ansible dopy

* Add default hosts file otherwise you have to add arguments `-i hosts` when you run ansible-playbook:

    sudo cp hosts /etc/ansible/hosts

* Make sure your python path is configured correctly. For example:

    export PYTHONPATH=/usr/local/lib/python2.7/site-packages

* Copy vars.yml.dist to vars.yml and change the variables to your need.


## Digital Ocean configuration

Create a new API key on the [API access page](https://cloud.digitalocean.com/api_access). 
Add the api_token to `vars.yml`.


## Playbooks

### launch.yml

Launch and provision a new server on Digital Ocean.

    ansible-playbook -i hosts launch.yml

What this Playbook do for you?

- configure swap file
- install ufw, fail2ban
- configure ufw allow ports for SSH
- make sshd more secure: 
  - PermitRootLogin=no
  - PasswordAuthentication=no
  - AllowGroups=sudo
- config sudoers

### destroy.yml
Destroys a server on Digital Ocean.

    ansible-playbook -i hosts destroy.yml

## Known issues

* When you run the playbook the second time you will get an error while registering the domainname. 
  This is a bug inside the ansible digital_ocean module.
  The error can be ignored by leaving the domainname empty.

