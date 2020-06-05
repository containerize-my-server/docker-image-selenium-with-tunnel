#!/usr/bin/env bash

# Generate host key in seluser's-home
if [ ! -f ~/.ssh/ssh_host_rsa_key ]; then
  ssh-keygen -t rsa -b 4096 -f ~/.ssh/ssh_host_rsa_key -N ""
fi
exec /usr/sbin/sshd -D -e -f ~/.ssh/sshd_config
