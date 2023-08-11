ARG VARIANT=18-slim
FROM node:${VARIANT}

ARG USERNAME=node
ARG GROUPNAME=node
ARG HOME=/home/${USERNAME}

# [Optional] Uncomment this section to install additional OS packages.
COPY packages.txt /tmp/
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends $(cat /tmp/packages.txt) \
    && rm /tmp/packages.txt

# sudo
RUN echo "${USERNAME} ALL=(root) NOPASSWD:ALL" > /etc/sudoers.d/${USERNAME} \
    && chmod 0440 /etc/sudoers.d/${USERNAME} \
    && visudo -c

# timezone
RUN ln -sf /usr/share/zoneinfo/Japan /etc/localtime

# switch user
USER ${USERNAME}
WORKDIR ${HOME}/workspace

# base config
COPY --chown=${USERNAME}:${GROUPNAME} home/additional_script.sh /tmp/
COPY --chown=${USERNAME}:${GROUPNAME} home/bashrc.d/* ${HOME}/.bashrc.d/
RUN cat /tmp/additional_script.sh >> ${HOME}/.bashrc \
    && rm /tmp/additional_script.sh

# chown
# RUN chown -R ${USERNAME}:${GROUPNAME} ${HOME}

ENTRYPOINT ["/usr/bin/tini", "--"]
