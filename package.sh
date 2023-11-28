#!/bin/bash

# パッケージ名を指定
name="Health_Display"
version="1.0.1"

# ディレクトリの作成
mkdir -p ./package

# package フォルダ内にコピー
cp -r ./scripts manifest.json pack_icon.png ./package

# ディレクトリの移動
cd ./package

# mcpackの作成
zip -r ${name}_v${version}.zip ./*

# 名前の変更
mv ${name}_v${version}.zip ${name}_v${version}.mcpack

# package フォルダの削除
rm -rf ./scripts manifest.json pack_icon.png

echo
echo "Make package successful!"
echo
