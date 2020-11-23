FROM bastilimbach/docker-magicmirror

WORKDIR /opt/magic_mirror
COPY ./config ./config
COPY ./modules ./modules
COPY ./moduleInstall.sh ./

RUN chmod +x ./moduleInstall.sh
RUN ./moduleInstall.sh
