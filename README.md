```
berry-ui
|-- node_modules // 项目依赖包
|-- examples // 项目测试文件夹
|-- berry // 组件存放处
  -| component // 存放组件
    |- Button 组件文件夹 一个组件一个文件夹
      |- src
        |- xxx.ts
        |- xxx.scss
        └─ xxx.vue
   └─ installer.ts 用于全局注册组件
|- hooks // hook函数
|- sytles // 全局样式
|- typeings // 自定义类型接口
|- utils // 工具类

```

# A project for BerryUI

---

---

## Project Environment

```js
# npm

# npm -v 9.5.1

# node

# node -v 18.16.1

# install dependencies
npm install

# serve with hot reload at localhost:5173
npm run dev

### install plugin
npm install vite-plugin-svg-icons fast-glob -D

```

---

## Git Config

- git remote add origin git@github.com:Berry-UI/berry-ui.git // 将本地工程和远程仓库关联
  > ***
  >
  > git config --global user.name "yourname"
  > git config --global user.email "youemail"
  >
  > ***
- 生成 SSH 密钥
  > ***
  >
  > ssh-keygen -t rsa -C "这里换上你的邮箱"
  > cd ~/.ssh 里面有一个文件名为 id_rsa.pub,把里面的内容复制到 git 库的我的 SSHKEYs 中
  >
  > ***

## Git Commit Setup

```
# git add . // 添加你的所有文件

# git commit -m '做了什么得描述'  // 提交代码到本地仓库

# git pull  // 拉取线上代码库代码 -- 后面可跟 origin （分支名）

# git push  // 提交代码到线上仓库
---
```

## Git Common Commands // 常用命令

```
# git status // 查看文件的状态
    Changes not staged for commit
      表示得大概就是工作区有该内容，但是缓存区没有，需要我们git add
    Changes to be committed
      一般而言，这个时候，文件放在缓存区了，我们需要git commit
    nothing to commit, working tree clean
      这个时候，我们将本地的代码推送到远端即可

# git branch // 产看本地分支

# git branch -r // 查看远程分支

# git branch -a // 查看所有分支

# git checkout <branch-name> // 从当前分支 切换到其他分支

# git checkout -b <branch-name> // 创建并切换到新建分支

# git feach <远程主机名> <分支名> // 将某个远程主机的更新，全部拉取到本地
# 推荐写法 // git fetch origin <branch-name>:<local-branch-name>

# git stash save -a 'message' // 添加改动到stash - 文件暂存

# git stash drop <stash@{ID}> // 删除暂存

# git stash list // 查看暂存

# git stash clear // 删除缓存

# git stash pop <stash@{ID}> // 恢复改动

# 比较工作区与缓存区
  git diff

# 比较缓存区与本地库最近一次commit内容
  git diff -- cached

# 比较工作区与本地最近一次commit内容
  git diff HEAD

# 比较两个commit之间差异
  git diff
```

## 需求清单

```
- [X] Icon 图标 `level max`
<<<<<<< HEAD
- [X] Button 按钮  // 
=======
- [X] Button 按钮  //
>>>>>>> db18de4b3508b58b4d1382bc0aafb2cc18550721
- [ ] Button Group 按钮组
- [ ] Input 输入框
- [ ] Radio 单选框
- [ ] Checkbox 复选框
- [ ] Input Group 输入框组
- [ ] Select 选择器
- [ ] Carousel 轮播图
- [ ] Dropdown 下拉菜单
- [ ] Image 图像 `level max`
- [ ] Table 表格 `level max`
- [ ] Time Picker 时间选择器 `level max`
- [ ] Date Picker 日期选择器 `level max`
- [ ] DateTime Picker 日期时间选择器 `level max`
- [ ] Upload 上传 `level max`
- [ ] Form 表单 --带自定义验证 `level max`
---
- [ ] Card 卡片
- [ ] Divider 分割线
- [ ] PageHeader 页头/面包屑
- [ ] Tag 标签
- [ ] Watermark 水印
- [ ] Auto Complete 自动填充
- [ ] Cascader 级联选择器
- [ ] Switch 开关
- [ ] Rate 评分
- [ ] Color Picker 颜色选择器 `level max`
- [ ] Calendar 日历 `level max`
- [ ] Data Table 数据表格 `level max`
- [ ] Descriptions 描述 `level max`
- [ ] Empty 无内容/结果页 `level max`
- [ ] List 列表 `level max`
- [ ] Number Animation 数组动画 `level max`
- [ ] Statistic 统计数据 `level max`
- [ ] TimeFormat 时间格式化 `level max`
- [ ] Affix 固钉 `level max`
- [ ] Loading Bar 加载条 `level max`
- [ ] Memu 菜单 `level max`
- [ ] Pagination 分页
- [ ] Steps 步骤 `level max`
- [ ] Tabs 标签页 `level max`
- [ ] Alert 警示信息/警告信息 `level max`
- [ ] Badge 标记 `level max`
- [ ] Dialog 对话框 `level max`
- [ ] Drawer 抽屉 `level max`
- [ ] Message 信息 `level max`
- [ ] Progress 进度
- [ ] Skeleton 骨架屏 `level max`
- [ ] Spin 加载 `level max`
- [ ] Scrollbar 滚动条 `level max`
```

## 主题色

```
    #5046e5
    #4338ca
```
