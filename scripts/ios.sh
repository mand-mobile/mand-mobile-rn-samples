#!/usr/bin/env bash

env=$1
dependency=$true

if [ ! "$env" ]; then
  env=production
fi

# ENV接收的参数验证
if [ "$env" != 'dev' -a "$env" != 'production' ]; then
  echo "error=$env params error, must be [dev|production]" && exit 1
fi

# 检查和安装依赖
which node > /dev/null 2>&1
if [ $? == 0 ]; then
    echo "node exist"
else
    echo "npm dose not exist. Please use 'brew install node' to install node."
    $dependency=$false
fi

which ruby > /dev/null 2>&1
if [ $? == 0 ]; then
    echo "ruby exist"
else
    echo "ruby dose not exist. Please use 'brew install ruby' to install ruby."
    $dependency=$false
fi

which xcodeproj > /dev/null 2>&1
if [ $? == 0 ]; then
    echo "xcodeproj exist"
else
    echo "xcodeproj dose not exist. install xcodeproj."
    gem install xcodeproj
fi

if [ $dependency ]; then
  echo "Please install abover dependency frist."
  exit 1
fi

# 准备目录
BASE_DIR=$(cd "$(dirname "$0")";pwd)
ROOT_DIR=${BASE_DIR%/*}
echo "\r\n--------------BASE_DIR=${BASE_DIR}--------------"
echo "\r\n--------------ROOT_DIR=${ROOT_DIR}--------------"

# 安装NPM依赖
echo "\r\n--------------YARN INSTALL--------------"
npm install --registry=http://npm.intra.xiaojukeji.com

# pod deintegrate
echo -e '\r\n-----------------------BUILD-MANHATTANAPP-POD-INSTALL----------------------'
cd ./ios
pod deintegrate
