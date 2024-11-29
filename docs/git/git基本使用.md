# git基本使用

## 1. 配置 ssh

```sh
# 生成公钥
ssh-keygen -t rsa -C "<EMAIL>"
# 复制公钥
cat ~/.ssh/id_rsa.pub
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

## 6.git创建分支

```sh
#创建分支
git branch 分支名

#切换分支
git checkout 分支名

# 创建并切换分支
git checkout -b 分支名
```

## 6.git commit 提交规范

- ### 常见的commit type类型包括

    feat：新功能（feature）。
    fix：修复bug。
    docs：文档（documentation）修改。
    style：格式（不影响代码含义的改动，如去掉空格、改变缩进等）。
    test：测试用例新增、修改。
    refactor：代码重构（在不影响代码内部行为、功能下的代码修改）。
    chore：修改工具相关（不在上述类型中的修改，如改变构建流程、增加依赖库等）。
    此外，还可以根据公司或项目的特殊要求，添加其他类型，如：

    build：影响项目构建或依赖项修改。
    perf：更改代码以提高性能。
    ci：持续集成相关文件修改。
    revert：恢复上一次提交、回滚到上一个版本。

- ### 以下是一些符合规范的Git commit提交信息示例

    feat(user)：增加用户注册功能。
    fix(login)：修复登录页面无法跳转的问题。
    docs(README)：更新README文档，添加新功能介绍。
    style(global)：统一全局代码格式，增加缩进和空格。
    test(api)：增加API测试用例，确保接口稳定性。
    refactor(auth)：重构认证模块代码，提高可读性。
    chore(deps)：升级项目依赖库至最新版本。

## 7.git merge 合并

 ```sh
 git merge --abort # 取消合并
 ```
