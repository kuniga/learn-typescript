# [Choice] Ubuntu version: bionic, focal
ARG VARIANT=focal
FROM mcr.microsoft.com/vscode/devcontainers/base:${VARIANT}

ARG USERNAME=vscode
ARG GROUPNAME=vscode
ARG HOME=/home/${USERNAME}
ARG NODENV_ROOT=${HOME}/.nodenv
ARG NODE_VERSION=14.18.2
ARG YARN_VERSION=1.22.17

# [Optional] Uncomment this section to install additional OS packages.
COPY packages.txt /tmp/
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends $(cat /tmp/packages.txt) \
    && rm /tmp/packages.txt

# sudo
# sed -e "s/vscode/${USERNAME}/" /etc/sudoers.d/vscode > /etc/sudoers.d/${USERNAME}
# chmod --reference=/etc/sudoers.d/vscode /etc/sudoers.d/${USERNAME}

# timezone
RUN ln -sf /usr/share/zoneinfo/Japan /etc/localtime

# switch user
USER ${USERNAME}

# base config
COPY --chown=${USERNAME}:${GROUPNAME} home/additional_script.sh /tmp/
COPY --chown=${USERNAME}:${GROUPNAME} home/bashrc.d/* ${HOME}/.bashrc.d/
RUN cp -p ${HOME}/.bashrc ${HOME}/.bashrc.oh-my-bash \
    && cat /etc/skel/.bashrc /tmp/additional_script.sh > ${HOME}/.bashrc \
    && rm /tmp/additional_script.sh

# Node.JS
RUN git clone https://github.com/nodenv/nodenv.git ${NODENV_ROOT} \
    && git clone https://github.com/nodenv/node-build.git ${NODENV_ROOT}/plugins/node-build \
    && ${NODENV_ROOT}/bin/nodenv install -s ${NODE_VERSION} \
    && ${NODENV_ROOT}/bin/nodenv global ${NODE_VERSION} \
    && ${NODENV_ROOT}/shims/npm install -g yarn@${YARN_VERSION} \
    && ${NODENV_ROOT}/bin/nodenv rehash

# chown
RUN chown -R ${USERNAME}:${GROUPNAME} ${HOME}

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
