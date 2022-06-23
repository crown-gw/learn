# 一、基本命令
1. 我们把文件往Git版本库里添加的时候，是分两步执行的：第一步是用`git add`把文件添加进去，实际上就是把文件修改添加到暂存区；第二步是用`git commit`提交更改，实际上就是把暂存区的所有内容提交到当前分支。
2. `git add 文件名`：把文件修改添加到暂存区
3. `git mommit -m "说明信息"`：把暂存区的所有内容提交到当前分支
4. `cat`：读取文件内容
5. `git log`:从最近的显示提交的日志
6. `git log --pretty=oneline`:只显示提交日志的信息
7. `git reset --hard HEAD^`：回到上个版本，若回到前两个版本，则`HEAD^`改为`HEAD^^`，以此类推，若超过三个，如回到前100个版本，则改为`HEAD~100`
8. `git reset --hard 版本号`：定位到当前版本号
9. `git reflog`：查看历史命令
10. `git status`：查看当前状态
11. `git diff HEAD -- readme.txt`：查看工作区和版本库里面最新版本的区别
12. `git checkout -- 文件名`：用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”。
13. `git reset HEAD 文件名`：可以把暂存区的修改撤销掉
14. `rm 文件名`：直接在文件管理器中删掉这个文件
15. `git rm 文件名`：从版本库中删掉，并且用`git commit`提交修改
    
# 二、远程仓库
## 1.添加远程库
进入本地仓库目录打开Git Bash，在GitHub上create a new repository，按照指示在Git Bash上输入指令

将本地库添加到GitHub上

1. `git remote add origin https://github.com/crown-gw/learngit.git`
2. `git branch -M main`
3. `git push -u origin main`

## 2.删除远程库
1. `git remote -v`: 查看远程库信息
2. `git remote rm 名字`：删除远程库

## 3.从远程库克隆
`get clone https://github.com/crown-gw/gitskills.git`

也可以使用 `git clone git@github.com:crown-gw/gitskills.git`
使用https传输速度比较慢，且每次推送都要输入口令

# 三、分支管理
## 1.创建分支
`git checkout -b 分支名`表示创建并切换分支，相当于以下两条命令`git branch 分支名`, `git checkout 分支名`

`git branch`查看当前分支

`git merge 分支名`命令用于合并指定分支到当前分支

`git branch -d 分支名`删除分支

为了与`git checkout -- 文件名`区分开，选择用`git switch -c 分支名`创建并切换到新的分支

`git switch 分支名`切换到已有分支
## 2.分支管理
用`git log --graph`命令可以看到分支合并图。

`git merge --no-ff -m "说明信息" 分支名`表示禁用Fast forward

`git stash`把当前工作现场（已经add但没commit）“储藏”起来，等以后恢复现场后继续工作

`git stash list`查看隐藏的工作区

恢复隐藏的工作区，有两个办法：

一是用`git stash apply`恢复，但是恢复后，stash内容并不删除，需要用`git stash drop`来删除；

另一种方式是用`git stash pop`，恢复的同时把stash内容也删了

也可以多次stash，恢复的时候，先用`git stash list`查看，然后恢复指定的stash，用命令：
`git stash apply stash@{0}`

修复bug时，`cherry-pick xxxxx`命令能复制一个特定的提交到当前分支

如果要丢弃一个没有被合并过的分支，可以通过`git branch -D 分支名`强行删除。

## 3.推送分支
就是把该分支上的所有本地提交推送到远程库。推送时，要指定本地分支，这样，Git就会把该分支推送到远程库对应的远程分支上

`git push origin 分支名`

Git报错解决：fatal: unable to access 'https://github.com/.......': OpenSSL SSL_read: Connection was reset, errno 10054

产生原因：一般是这是因为服务器的SSL证书没有经过第三方机构的签署，所以才报错

解决办法：`git config --global http.sslVerify "false"`

## 4.抓取分支
创建远程origin的dev分支到本地，用`git checkout -b dev origin/dev`这个命令创建本地dev分支

若另一台电脑推送的提交与此电脑推送的提交有冲突，
先用`git pull`把最新的提交从origin/dev抓下来，然后，在本地合并，解决冲突，再推送。`git pull`也失败了，原因是没有指定本地dev分支与远程origin/dev分支的链接，根据提示，设置dev和origin/dev的链接`git branch --set-upstream-to=origin/<branch> dev`，再进行pull。

多人协作的工作模式通常是这样：

1. 首先，可以试图用git push origin <branch-name>推送自己的修改；
2. 如果推送失败，则因为远程分支比你的本地更新，需要先用git pull试图合并；
3. 如果合并有冲突，则解决冲突，并在本地提交；
4. 没有冲突或者解决掉冲突后，再用git push origin <branch-name>推送就能成功！

如果git pull提示no tracking information，则说明本地分支和远程分支的链接关系没有创建，用命令git branch --set-upstream-to <branch-name> origin/<branch-name>。

## 5.Rebase
`git rebease`
rebase操作的特点：把分叉的提交历史“整理”成一条直线，看上去更直观。缺点是本地的分叉提交已经被修改过了。

# 四、标签管理
切换到需要创建标签的分支，用`git tag 标签名`创建新标签

`git tag`查看所有标签

默认标签是打在最新提交的commit上的，若要给历史版本的commit加上标签，找到历史提交的commit id，然后`git tag 标签名 commit.id`打上就可以了

`git show 标签名`查看标签信息

还可以创建带有说明的标签，用-a指定标签名，-m指定说明文字：`git tag -a 标签名 -m "说明信息" commit.id`

删除标签：`git tag -d 标签名`

推送某个标签到远程，使用命令`git push origin 标签名`

一次性推送全部尚未推送到远程的本地标签：`git push origin --tags`

如果标签已经推送到远程，要删除远程标签就麻烦一点，先从本地删除：`git tag -d 标签名`

然后，从远程删除。删除命令也是push，但是格式如下：
`git push origin :refs/tags/标签名`

# 五、忽略特殊文件
在Git工作区的根目录下创建一个特殊的.gitignore文件，然后把要忽略的文件名填进去，Git就会自动忽略这些文件。然后把.gitignore提交到Git

若一个文件被.gitignore 忽略了，则不能将其添加到Git，若想添加，可以用-f强制添加到git。`git add -f 文件名`

`git check-ignore -v 文件名`命令检查

# 六、配置别名
`git config --global alias.别名 命令`

加上--global是针对当前用户起作用的，如果不加，那只针对当前的仓库起作用

`cat .git/config `查看配置文件，别名就在[alias]后面，要删除别名，直接把对应的行删掉即可。当前用户的Git配置文件放在用户主目录下的一个隐藏文件.gitconfig中。