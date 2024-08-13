// jenkins流水线文件
pipeline{
  agent any

  stages {
    // 代码已经有了
    stage("构建项目") {
      steps {
       withDockerContainer('node:16.14.2'){
          sh 'ls -al'
          sh 'node -v'
          sh 'npm config set registry https://registry.npmmirror.com/'
          sh 'npm install'
          sh 'npm run docs:build'
          sh 'ls .vitepress/'
       }
      }
    }

    // 打包制品 ：第二次流水线：dist ==》 dist.tar==>制品 ==》jenkins保存制品
    // 是为了产生软件的历史版本；方便以后回溯

    stage("制品"){
      steps {
        // 切换到一个目录中干活：默认是/var/jenkins_home/workspace/你的项目名
        dir ('.vitepress/dist') {
          sh 'ls -al'
          sh 'tar -zcvf docs.tar.gz *'
          // 让jenkins保存制品
          archiveArtifacts artifacts: 'docs.tar.gz',
                                            allowEmptyArchive:true,
                                            fingerprint:true,
                                            onlyIfSuccessful:true
         sh 'ls -al'
        }
      }
    }

// 部署项目  联动docker
    stage ("部署") {
      steps {
        dir ('.vitepress/dist') {
          sh 'ls -al'
          writeFile file:'Dockerfile',
          text: '''FROM nginx 
          ADD docs.tar.gz /usr/share/nginx/html/'''  //把刚才的docs.tar.gz 的内容自动解压放到 /usr/share/nginx/html/
          sh 'cat Dockerfile'
          sh 'docker build -f Dockerfile -t docs-app:latest .'
          sh 'docker rm -f app'
          sh 'docker run -d -p 80:80 --name app docs-app:latest'
        }
      }
    }

  }
}