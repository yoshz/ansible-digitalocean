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
    sudo pip install ansible dopy
    
* Make sure your python path is configured correctly. 

    # for example when using OSX homebrew
    export PYTHONPATH=/usr/local/lib/python2.7/site-packages

* Copy vars.yml.dist to vars.yml and change the variables to your need.

* Create the default hosts file (optional):

    sudo echo "localhost ansible_connection=local" > /etc/ansible/hosts

### Digital Ocean configuration

Create a new API key on the [API access page](https://cloud.digitalocean.com/api_access). 
Only API v1 is supported currently by Ansible. 
Add the client_id and api_key to `vars.yml`.

## Playbooks

### launch.yml
Launch and provision a new server on Digital Ocean.

    ansible-playbook launch.yml

### destroy.yml
Destroys a server on Digital Ocean.

    ansible-playbook destroy.yml
