FROM elgalu/selenium
USER root
ADD https://github.com/jpillora/chisel/releases/download/v1.5.2/chisel_1.5.2_linux_amd64.gz /usr/local/bin/chisel.gz
RUN gunzip /usr/local/bin/chisel.gz && \
    chown seluser.seluser /usr/local/bin/chisel && \
    chmod 700 /usr/local/bin/chisel
ADD etc /etc
USER seluser
