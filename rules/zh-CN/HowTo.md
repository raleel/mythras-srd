# 先决条件

1.  对 [Markdown 语言](https://www.markdownguide.org/basic-syntax/)有基本了解。

2.  如果您还没有 [GitHub](https://github.com/) 帐户，则需要创建一个免费帐户。建议您使用您的 RPG 名称，因为这将成为人们访问您的 SRD 的 URL 的一部分。

3.  您可以在不了解 Git 的情况下通过浏览器完成整个过程。尽管学习 GitHub Desktop 可以让您在将任何更改部署到线上供全世界查看之前，先在本地进行测试。

> 如果您已注册域名，可以像我一样使用此流程创建 SRD，例如 https://srd.7thextinctionrpg.com

# 流程

## 在 GitHub 上创建仓库

1.  登录 GitHub

2.  导航到公共模板 https://github.com/7thExtinctionrpg/RPG_SRD_Template

3.  点击“使用此模板”

![Step3](/_media/Step3.png)

4.  选择“创建新仓库”

5.  输入仓库名称

![Step5](/_media/Step5.png)

6.  选择“私有”

7.  选择“创建仓库”

复制模板需要 5-30 秒，之后您将拥有自己的副本。

8.  确保您有文件“.nojekyll”，这是一个空文件，在 GitHub 上托管网站时需要它，否则 SRD 将无法正常显示。*(告诉 GitHub Pages 不要通过 Jekyll 运行已发布的文件)。*

## 添加您的内容

### *.md 文件

.md 文件是 Markdown 文件，Markdown 是一种轻量级标记语言，您可以使用它向纯文本文档添加格式元素。根据您内容的大小，您可以将所有游戏信息放在一个 *.md 文件中，或者像我在 [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) 那样为每个章节创建单独的文件。“sample.md”提供了一些格式示例。

Markdown 语言非常容易学习，请使用上面“先决条件”下第 2 点提供的链接以获取完整的语法列表。

### _Sidebar.md

这是您的菜单，位于网站左侧的导航窗格。一旦您将 Markdown 文件添加到您的仓库，您需要在此处添加该文件，以便其内容被包含。请遵循现有的格式。

## 启用 GitHub Pages 将仓库转换为网站

1.  在您的仓库中点击“设置”

![Website-Step1](/_media/Website-Step1.png)

2.  在左侧菜单中选择“Pages”

![Website-Step2](/_media/Website-Step2.png)

3.  如果您尚未将仓库设置为“公开”，您有两种选择
    a. 将仓库设置为公开，这将允许您免费使用 GitHub Pages 托管您的 SRD 网站
    b. 升级您的 GitHub 帐户（在撰写本文时，每月费用为 4 美元或每年 48 美元）

4.  在“分支”下选择“main”并点击保存

5.  等待 10-20 秒，然后刷新页面

6.  您现在将看到您的 URL，例如 https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)

## 更改字体

1.  编辑 /_assets/style.css 文件

2.  在“body 部分”下，您会找到 siteFont 和 headingFont

3.  将它们更改为您想要使用的字体

## 使用 Fontawesome 和/或 Material Icons 插件在您的 SRD 中显示免费图标

### Fontawesome

使用 Fontawesome 获取免费图标和动画图标。订阅用户可以使用专业图标。

1.  在 [Fontawesome](https://fontawesome.com/icons) 上查找图标
2.  选择图标
3.  在弹出窗口中，在 HTML 选项卡下复制 " " 之间的所有内容

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4.  将复制的文本放在 `:` 之间，无空格

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

使用 Material Icons 获取更多免费图标

1.  在 [Material Icons](https://fonts.google.com/icons) 上查找图标
2.  直接将网络 span 链接复制并插入到您的 Markdown 文件中

```markup
<span class="material-icons">face</span>
```