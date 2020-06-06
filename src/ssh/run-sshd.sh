#!/usr/bin/env bash

set -e

mkdir -p ~/.ssh
echo "$AUTHORIZED_KEY" > ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys

# Generate host key in seluser's-home
if [ ! -f ~/.ssh/ssh_host_rsa_key ]; then
  ssh-keygen -t rsa -b 4096 -f ~/.ssh/ssh_host_rsa_key -N ""
fi
exec /usr/sbin/sshd -d -D -e -f ~/.ssh/sshd_config
