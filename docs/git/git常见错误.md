# git常见错误

## ssh: connect to host github.com port 22: Connection refused

- 这个错误提示的是连接github.com的22端口被拒绝了。

### Linux/Mac 下操作步骤

1. 修改 SSH 配置文件  
  SSH 的配置文件通常位于 ~/.ssh/config，如果文件不存在，可以手动创建一个：
  ```touch ~/.ssh/config```

    ``` shell
    Host github.com
    HostName ssh.github.com  # **这是最重要的部分**
    User git
    Port 443
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa
    ```

2. 验证 SSH 配置  
```ssh -T git@github.com```  
如果配置成功，应该看到类似以下输出：  
```Hi <your-username>! You've successfully authenticated, but GitHub does not provide shell access.```
3. 配置 Git 使用新端口  
为确保 Git 使用新的 443 端口，可以运行以下命令：  
`git config --global url."ssh://git@ssh.github.com:443".insteadOf "ssh://git@github.com"`

### Windows 下操作步骤

1. 找到 SSH 配置文件  
在 Windows 下，SSH 配置文件通常位于用户目录的 .ssh 文件夹中（例如：C:\Users\<你的用户名>\.ssh\config）。如果文件不存在，可以手动创建一个：

    1. 打开资源管理器并导航到 C:\Users\<你的用户名>\.ssh。  
    2. 在 .ssh 文件夹下，新建一个文件，命名为 config（没有扩展名）。

2. 编辑 SSH 配置文件  
    用记事本或其他文本编辑器打开 config 文件，添加以下内容：  

    ``` shell
    Host github.com
    HostName ssh.github.com  # **这是最重要的部分**
    User git
    Port 443
    PreferredAuthentications publickey
    IdentityFile C:\Users\<你的用户名>\.ssh\id_rsa
     ```

      **注意:**
        IdentityFile 的路径需要根据你实际存储 SSH 密钥的位置调整，通常是 id_rsa 或 id_ed25519。  
3. 验证 SSH 配置  
    打开命令提示符或 PowerShell，运行以下命令测试连接：  
    `ssh -T <git@github.com>`  
    如果配置正确，你应该看到以下输出：

    `Hi <your-username>! You've successfully authenticated, but GitHub does not provide shell access.`  

4. 配置 Git 使用新端口
在命令提示符或 PowerShell 中运行以下命令：  

`git config --global url."ssh://git@ssh.github.com:443".insteadOf "ssh://git@github.com"`  

#### 总结  

当 22 端口被占用或限制 时，通过将 SSH 连接切换到 443 端口，即可解决无法访问 GitHub 的问题。这种方法适用于任何操作系统，尤其是在防火墙限制较严的网络环境中。
