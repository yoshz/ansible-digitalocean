Digital Ocean Bootstrap
=======================

Bootstrap Digital Ocean droplets using Ansible to:

* Configure SSH key
* Launch a droplet
* Configure DNS domain
* Destroy droplet

Inspired by [hostmaster/ansible-digitalocean-bootstrap](https://github.com/hostmaster/ansible-digitalocean-bootstrap).

## Installation

* Install ansible:
  * Ubuntu:

    sudo apt-get install python-pip
    sudo pip install ansible dopy

  * OSX homebrew:

    brew install python-pip
    pip install ansible dopy

* Make sure your python path is configured correctly. For example:

    export PYTHONPATH=/usr/local/lib/python2.7/site-packages

* Copy vars.yml.dist to vars.yml and change the variables to your need.

  * List of all regions: https://api.digitalocean.com/v1/regions/?client_id=[client_id]&api_key=[api_key]
  * List of all images: https://api.digitalocean.com/v1/images/?client_id=[client_id]&api_key=[api_key]


## Digital Ocean configuration

Create a new API key on the [API access page](https://cloud.digitalocean.com/api_access). 
Only API v1 is supported currently by Ansible. 
Add the client_id and api_key to `vars.yml`.


## Playbooks

### launch.yml

Launch and provision a new server on Digital Ocean.

    ansible-playbook -i hosts launch.yml

What this Playbook do for you?

- configure swap file
- install ufw, fail2ban
- configure ufw allow ports for SSH
- make sshd more secure: 
  * PermitRootLogin=no
  * PasswordAuthentication=no
  * AllowGroups=sudo
- config sudoers

### destroy.yml
Destroys a server on Digital Ocean.

    ansible-playbook -i hosts destroy.yml

