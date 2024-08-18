## 1. 配置 ssh

```
# 生成公钥
ssh-keygen -t rsa -C "<EMAIL>"
```

## 2.配置全局账号、邮箱

```
git config --global user.name "username"
git config --global user.email "<EMAIL>"
```

## 3. 查看远程仓库地址

```
git remote -v
```
