# git基本使用

## 1. 配置 ssh

```sh
# 生成公钥
ssh-keygen -t rsa -C "<EMAIL>"
```

## 2.查看用户名和邮箱

```sh
git config user.name
git config user.email
```

## 3.配置全局账号、邮箱

```sh
git config --global user.name "username"
git config --global user.email "<EMAIL>"
```

## 4. 查看远程仓库地址

``` sh
git remote -v
```

## 5.git stash 暂存

- git stash会把所有未提交的修改（包括暂存的和非暂存的）都保存起来，用于后续恢复当前工作目录。

```sh
git stash save "message" # 暂存
git stash list # 查看暂存列表
git stash pop # 恢复暂存 这个指令将缓存堆栈中的第一个stash删除，并将对应修改应用到当前的工作目录下
git stash apply # 恢复暂存 将缓存堆栈中的stash多次应用到工作目录中，但并不删除stash拷贝
git stash drop # 删除暂存



```
