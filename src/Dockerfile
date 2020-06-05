FROM elgalu/selenium
USER root
RUN apt-get update && apt-get -y install openssh-server && apt-get clean
ADD etc /etc
ADD ssh /home/seluser/.ssh
RUN chown -R seluser.seluser /home/seluser/.ssh && chmod a+x /home/seluser/.ssh/run-sshd.sh
USER seluser

