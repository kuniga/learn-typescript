# [Choice] Ubuntu version: bionic, focal
ARG VARIANT=focal
FROM mcr.microsoft.com/vscode/devcontainers/base:${VARIANT}

ARG USERNAME=vscode
ARG GROUPNAME=vscode
ARG HOME=/home/${USERNAME}
ARG NODE_VERSION=14.17.0
ARG YARN_VERSION=1.22.10

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

# base config
COPY home/additional_script.sh /tmp/
COPY home/bashrc.d/* ${HOME}/.bashrc.d/
RUN cp -p ${HOME}/.bashrc ${HOME}/.bashrc.oh-my-bash \
    && cat /etc/skel/.bashrc /tmp/additional_script.sh > ${HOME}/.bashrc \
    && rm /tmp/additional_script.sh

# Node.JS
RUN git clone https://github.com/nodenv/nodenv.git ${HOME}/.nodenv \
    && git clone https://github.com/nodenv/node-build.git ${HOME}/.nodenv/plugins/node-build \
    && ${HOME}/.nodenv/bin/nodenv install -s ${NODE_VERSION} \
    && ${HOME}/.nodenv/bin/nodenv global ${NODE_VERSION} \
    && ${HOME}/.nodenv/shims/npm install -g yarn@${YARN_VERSION} \
    && ${HOME}/.nodenv/bin/nodenv rehash

# chown
RUN chown -R ${USERNAME}:${GROUPNAME} ${HOME}

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
