Digital Ocean Bootstrap
=======================

Bootstrap Digital Ocean droplets using Ansible to:

* Configure SSH key
* Launch a droplet
* Configure DNS domain
* Destroy droplet

Inspired by [hostmaster/ansible-digitalocean-bootstrap](https://github.com/hostmaster/ansible-digitalocean-bootstrap).

## Installation

* Install ansible

    sudo apt-get install python-pip
    sudo pip install ansible

* Copy vars.yml.dist to vars.yml and change the variables to your need.

* Create the default hosts file (optional):

    sudo echo localhost > /etc/ansible/hosts

### Digital Ocean configuration

Create a new API key on the [API access page](https://cloud.digitalocean.com/api_access) and add the client_id and api_key to `vars.yml`.


## Playbooks

### launch.yml
Launch and provision a new server on Digital Ocean.

    ansible-playbook launch.yml

### destroy.yml
Destroys a server on Digital Ocean.

    ansible-playbook destroy.yml
