# 先决条件

1. 对 [markdown 语言](https://www.markdownguide.org/basic-syntax/) 有基本了解。

2. 如果你还没有账户，需要创建一个免费的 [github](https://github.com/) 账户。建议你使用你的 RPG 名称，因为它将成为人们访问你的 SRD 时所用 URL 的一部分。

3. 你可以在浏览器中完成整个流程，而无需学习 git。尽管学习 GitHub Desktop 可以让你在将更改发布到线上供全世界查看之前，先在本地测试更改。

> 如果你注册了域名，你可以将其与此流程结合使用，从而创建像我这样的 SRD：https://srd.7thextinctionrpg.com

# 流程

## 在 Github 上创建存储库

1. 登录 Github

2. 导航至公共模板：https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. 点击“Use this template”（使用此模板）

![Step3](/_media/Step3.png)

4. 选择“Create a new repository”（创建新存储库）

5. 输入存储库名称

![Step5](/_media/Step5.png)

6. 选择“Private”（私有）

7. 选择“Create repository”（创建存储库）

复制模板需要 5-30 秒，之后你将拥有自己的副本。

8. 确保你拥有文件“.nojekyll”，这是一个在 Github 上托管网站时所需的文件，否则 SRD 将无法正常显示。（告知 GitHub Pages 不要通过 Jekyll 运行已发布的文件）。


## 添加你的内容

### *.md 文件

.md 文件是 markdown 文件，Markdown 是一种轻量级标记语言，你可以用它为纯文本文档添加格式化元素。根据内容的大小，你可以将游戏的所有信息放在一个 *.md 文件中，或者像我在 [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) 那样，为每一章创建单独的文件。“sample.md”提供了一些格式示例。

Markdown 语言非常容易学习，请使用上述“先决条件”第 2 点中提供的链接获取完整的语法列表。

### _Sidebar.md

这是你的菜单，即网站左侧的导航窗格。将 markdown 文件添加到存储库后，你需要在此处添加该文件，以便将其内容包含在内。遵循现有的格式。


## 启用 Github Pages 将存储库转换为网站

1. 在你的存储库中点击“Settings”（设置）

![Website-Step1](/_media/Website-Step1.png)

2. 在左侧菜单中选择“Pages”（页面）

![Website-Step2](/_media/Website-Step2.png)

3. 如果你还没有将存储库设为“public”（公共），你有两个选择：
    a. 将存储库设为公共，这样你就可以使用 Github Pages 免费托管你的 SRD 网站
    b. 升级你的 Github 账户（在撰写本文时，费用为每月 4 美元或每年 48 美元）

4. 在“Branch”（分支）下选择“main”并点击保存

5. 等待 10-20 秒，然后刷新页面

6. 你现在将看到你的 URL，例如 https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## 更改字体

1. 编辑 /_assets/风格.css 文件

2. 在“body section”（正文部分）下，你会找到 siteFont 和 headingFont

3. 将它们更改为你想要使用的字体


## 使用 Fontawesome 和/或 Material Icons 插件在你的 SRD 中显示免费图标

### Fontawesome

使用 Fontawesome 获取免费图标和动画图标。订阅用户可以使用 Pro 图标。

1. 在 [Fontawesome](https://fontawesome.com/icons) 上找到图标
2. 选择图标
3. 在弹出窗口的 HTML 选项卡下，复制 " " 之间的所有内容

```EXAMPLE
<i 职业="fa-solid fa-dice-d20"></i>
```

4. 将复制的文本放置在 `:` 之间，不要有空格

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

使用 Material Icons 获取更多免费图标

1. 在 [Material Icons](https://fonts.google.com/icons) 上找到图标
2. 复制 Web span 链接并直接插入到你的 markdown 文件中

```markup
<span 职业="material-icons">face</span>
```