target language code: zh-CN

# Mythras Imperative System Resource Document

---
## Introduction

_Mythras Imperative_ 是 _Mythras_ 规则集的开放、ORC 授权版本。本文档提供了一套全面但不穷尽的规则，包括角色创建、技能、某些典型情况的规则、战斗和魔法——这足以让玩家和游戏主持人（Games Master）上手，并为进一步的发展打下坚实的基础。《Mythras Imperative》与《Mythras》核心规则以及其他受 ORC 授权的百分骰游戏系统兼容。其配套卷《Classic Fantasy Imperative》也完全兼容并在 ORC 下发布，这意味着这两个 Imperative 规则集可以轻松组合。

除英语外的其他翻译均通过 AI 完成。欢迎社区提供意见！

---
## ORC Licensing

_Mythras Imperative_ 使用 ORC 许可证（ORC License）发布。ORC 许可证为游戏创作者提供了一种公开分享游戏机制的方式，并允许下游用户自由使用、修改和重新分享这些游戏机制的改编版本。

根据 ORC 公开分享的内容被称为_**授权材料（Licensed Material）**_，包括游戏的广泛功能元素，例如属性块、游戏规则、角色属性以及游玩游戏固有的方法和系统，还包括许可方明确希望分享的其他任何内容。该许可证范围广泛，允许您在全球范围内将授权材料用于印刷书籍、电子游戏、播客、AI 或现在及未来可能存在的任何其他技术。《Mythras Imperative》中发现的绝大多数内容都构成了授权材料。

根据 ORC _未_分享的内容被称为_**保留材料（Reserved Material）**_，包括商标、世界设定、故事弧、独特角色和视觉艺术。我们在下方的 ORC 声明显式列出了保留材料。

根据 ORC 许可证，您可以使用、分享、改编和基于授权材料进行构建，只要您在出版的作品中以声明的形式给予适当的署名。该声明既承认了上游许可方及其对该工作的贡献，又为下游用户提供了一种简单的方法来署名该声明所出现作品的作者。通过使用根据 ORC 授权的材料，您自动同意在您出版的作品中根据相同的条款对您的游戏机制进行授权。如果您开发了自己的保留材料，那是您的专属财产。

---
#### ORC Notice

_Mythras Imperative_ 根据位于国会图书馆（Library of Congress）的 ORC 许可证授权，并可在包括 [Paizo.com](https://paizo.com/community/blog/v5748dyo6sico) 在内的多个在线位置获取。

其中规定的所有保证均予以免除。

---
#### Attribution

本产品基于以下保留材料：

_Mythras_, The Design Mechanism 版权所有 2016，由 Pete Nash 和 Lawrence Whitaker 编写

如果您在自己的出版作品中使用了我们的授权材料，请按如下方式对我们进行署名：

_Based on Mythras Imperative, Written by Pete Nash and Lawrence Whitaker, and published by The Design Mechanism, Copyright 2023_

---
#### Reserved Material

请注意，由 The Design Mechanism 出版的 _**Classic Fantasy**_ 和 _**Mythras**_ 作为 _Mythras Imperative_ 的母体游戏，在 ORC 许可证下被指定为保留材料。

如果您希望借鉴 _**Classic Fantasy**_ 或 _**Mythras**_ 中的内容，请联系 The Design Mechanism 了解单独的 _Mythras Gateway License_（Mythras 网关许可证），该许可证允许访问保留材料，免版税，但对审批和署名有一些条件。

以下内容也被视为保留材料：

_**Mythras Imperative**_——作为一个名称，在署名中使用时除外，包括其徽标。

_**Mythras**_——作为一个名称，在署名中使用时除外，包括其徽标。

_**在 _Mythras Imperative_ 中发现的所有艺术作品、图形和商业装潢**_

---
## New to d100?

_Mythras Imperative_ 是一个 d100 或百分骰系统。百分骰（Percentile dice，或 1d100）用于解决关键动作——技能使用、战斗、施法等等。这是一个“掷点低于”（roll-under）系统，这意味着目标数字表示为百分比（例如：运动 65%），游戏主持人和玩家都在寻找使用 1d100 掷出等于或低于该目标数字的结果，以取得成功。如果愿意，用 d20 代替 1d100 非常容易，所有百分比都可以除以 5（向上取整）以获得 d20 掷骰的目标数字。在我们的例子中，运动 65% 将变成运动 13。

然而，1d100 提供了支撑整个游戏的巨大灵活性和细微差别，因此我们的建议是首先尝试 1d100 方法。虽然必须掷出比某物_更低_的点数可能听起来有悖常理（在许多游戏中，通常点数越高越好！），但拥有一个需要将点数掷入其中的百分比范围的目标数字，可以让你轻松简单地看到成功几率，并允许进行相当多的“骰子技巧”，例如对抗掷骰、致命成功和大失误，以及这些规则后面探讨的其他一些事情。百分骰角色扮演自角色扮演的早期阶段就已存在，是一个成熟稳健的游戏系统，具有经过实战检验的核心机制，它灵活、直观，并且往往在游玩过程中隐于幕后。

---
## Simplification

_**Mythras**_ 的老玩家会注意到，在某些地方，《Mythras Imperative》的规则已经被简化了。这样做是为了让游戏主持人能够以最少的繁文缛节，更快地向新玩家介绍这款游戏。

---
## Rounding of Numbers and Results

在某些情况下，您需要除以数字——通常是技能评级（例如用于确定致命成功，即技能值的 1/10）。每当除法结果产生分数时，总是向上取整为整数。因此，例如，63% 的 1/10 是 6.3；这向上取整为 7。

---
## Dice Used

_Mythras Imperative_ 使用标准的多面骰组合：d4、d6、d8、d10、d12、d20 和 d100。此外，还需要以下骰子：

d2：掷任何骰子。奇数等于 1，偶数等于 2。或者抛硬币。

d3：掷六面骰；1-2 = 1，3-4 = 2，5-6 = 3