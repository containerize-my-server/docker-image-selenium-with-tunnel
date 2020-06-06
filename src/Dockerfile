FROM elgalu/selenium
USER root

RUN apt-get update && apt-get -y install openssh-server && apt-get clean
ADD etc /etc
ADD ssh /home/seluser/.ssh
ADD https://github.com/jpillora/chisel/releases/download/v1.5.2/chisel_1.5.2_linux_amd64.gz /home/seluser/tunnel/chisel
RUN chown
RUN chown -R seluser.seluser /home/seluser/.ssh && \
         chmod a+x /home/seluser/.ssh/run-sshd.sh && \
         chmod 700 /home/seluser/.ssh/
USER seluser

