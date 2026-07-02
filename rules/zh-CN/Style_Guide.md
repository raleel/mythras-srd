# 样式指南标题 (h1)

主章节标题使用一级标题（`#` `# Heading Title`）。所有 hx 标题都将作为书签显示在侧边栏中。

如果标题不是一级标题，侧边栏将出现重复错误，显示页面和二级“标题”标题。

---
## 段落标题 (h2)

每个新的主要段落都使用二级标题（`##` `## Section Heading`），前面加上分隔符（`---` `---`）。

### 小节标题增加一级标题级别

每个新的小节使用三级标题（`###` `### Subsection Heading`），每个新的次小节使用四级标题（`####` `#### Sub-Subsection Heading`）。

### 小节标题级别递进：2 > 3 > 4

如果标题级别递进处理不当，子标题在侧边栏中会混淆。

标题标记应该增加一级或不变。

h2 后跟 h2 或 h3 没问题。h3 后跟 h3 或 h4 也没问题。

### 小节错误
h2 后跟 h4 会导致问题。侧边栏会将子标题放置在目录中其标题的上方。

### 降低标题级别

这似乎不是问题。例如，h4 降至 h3 或 h2 都可以。

---
## 格式约定

以下是 Markdown 格式的这些 _命令式_ SRD 的标准样式。

### 粗体、斜体和分隔符

- 使用双星号（`**` `**Bold**`）表示**粗体**文本。
- 使用下划线（`_` `_Italic_`）表示_斜体_文本。
  - _注意：避免使用单星号表示斜体！_
- 使用反斜杠（`\` `\_`）来“转义”字符：\_不是斜体\_。
- 使用尖括号（`<` and `>` ``` `code` ```）来创建`<span>` `code blocks`。
- 使用三个连字符（`---` `---`）插入一条水平分隔线。

### 粗体和斜体约定

力求遵循以下模式...

#### 粗体标题

描述法术、效果等时使用粗体标题。
- **魔法标题：** 描述。

#### 斜体标题

变体法术等的“子列表”使用斜体标题。
- **魔法：** 描述。
  - **_魔法变体-A：_** 描述。
  - **_魔法变体-B：_** 描述。

#### 斜体标题引用

引用书籍时使用斜体标题，例如 _Mythras Imperative_ 或核心 _Mythras_ 规则集。

---
## 列表格式

### 无序列表 / 项目符号

- 无序列表使用连字符制作。
- 无序列表使用连字符制作。
  - 使用 2 个空格或一个制表符增加缩进级别。

### 有序列表 / 编号项目

1. 编号列表使用数字和句号。
2. 编号列表使用数字和句号。
- 与项目符号混合
	- 和缩进
3. 重新混合数字
   - 和项目符号

### 带标题的列表

对于相关子标题的列表，将标题和冒号加粗。
- **示例 1：** 略，略，略...
- **示例 2：** 略，略，略...

### 斜体带标题的列表

对于相关子标题的列表，将标题和冒号加粗并斜体。
- **_示例 1：_** 略，略，略...
- **_示例 2：_** 略，略，略...

---
## 表格

给表格一个子标题，以便它们在侧边栏中被书签标记，并从其父部分缩进一级。

~将标题行设为粗体文本。~
将标题行设为粗体实际上会以普通文本呈现。默认 CSS 已将该行设为粗体。

### 表格文本对齐

使用第 2 行进行内容对齐：`:-:` `:--`、`:--` `:-:` 或 `--:` `--:`。
这将影响整个列。

#### 表格基本布局

| **第 1 列** | **第 2 列** |
| :-: | :-- |
| 1 | alpha |
| 2 | beta |
| 3 | gamma |

### 文本对齐约定

- 数字或类似值列表使用居中对齐。
- 文本句子使用左对齐。

#### 对齐示例表格

| **数字** | **描述** |
| :-: | :-- |
| 1 | 描述性文本 |
| 2 | 描述性文本 |
| 3 | 描述性文本 |

#### 示例：火焰强度表

| **强度** | **示例** | **点燃时间** | **伤害** |
| :-: | :-- | :-: | :-: |
| 1 | 蜡烛 | 1d4 | 1d2 |
| 2 | 火把 | 1d3 | 1d4 |
| 3 | 营火 | 1d2 | 1d6 |
| 4 | 充满房间的大火 | 1d2 | 2d6 |
| 5 | 火山熔岩 | 瞬间 | 3d6 |

---
## 链接

SRD 中链接的用途很多，这里只介绍几种主要情况。

### 链接格式

链接的格式由括号中的文本完成。可见的链接文本使用方括号，目标 URL 使用圆括号：`[可见文本](目标URL)` `[Link Text](URL)`。

在这些文档中，最常用的外部链接将是 [Mythras Encounter Generator](https://mythras.skoll.xyz)。
```markdown
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### 外部链接与内部链接

外部链接通过互联网指向其他页面，需要一个 `HTTP/HTTPS` `http://example.com` URL，并且默认情况下，它们_总是_在新浏览器标签页中打开。

为了避免多个标签页使正在阅读的文档变得混乱，内部链接和书签使用相对 URL 引用 GitHub 仓库中可见的 Markdown 文件。这些内部链接不会打开新标签页，而是会快速滚动到链接的部分。

#### 内部链接示例

- **章节链接：** 这些指向主要（h1）部分的开头。例如，[战斗](0005_Combat.md) 章节。

  - 链接格式：`[文本](文件名.md)` `[Combat](0005_Combat.md)`

- **小节链接：** 这些指向章节内的标题，引用文档如上，但附加 `?id=` `?id=` 后立即跟上目标标题。例如，[跳跃攻击](0005_Combat.md?id=leaping-attacks)

  - 链接格式：`[文本](文件名.md?id=标题)` `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### 指向小节的外部链接

有时可能需要引用外部文档的已知部分，例如，另一个 SRD 中的特定表格。格式与上述小节链接相同，只是使用外部 HTTP URL。

例如，这是 [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/) 中 [英制到公制换算表](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) 的链接。

```markdown
[英制到公制换算表](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```
```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## 魔法和力量列表

用 h2 标题开始一个“干净”的部分，列出可用的法术、力量等；然后每个列表项用 h3。

法术和力量通常以单一的扁平列表按魔法类型（民间魔法、神学等）呈现，但如果列表需要自己的小节，如学派或教派专长，则相应地增加标题级别。例如，h2 用于神学奇迹列表，h3 用于教派：密特拉斯，h4 用于每个密特拉斯教派奇迹。

特别是在法术的情况下，但在任何使用关键字属性的描述中，以斜体文本列出它们。

描述性文本和特殊规则使用普通文本。

### 法术列表格式

```markdown
---
## Spell descriptions

### Avert
_Instant, Ranged_

Avert is used to dismiss another spell within range. Avert can be cast reactively to neutralize offensive spells, by using the Counter Magic Reactive Action.
```
```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>示例：格式化法术列表（块引用） </summary>

---
> ## Spell descriptions
>
> ### Avert
> _Instant, Ranged_
>
> Avert is used to dismiss another spell within range. Avert can be cast reactively to neutralize offensive spells, by using the Counter Magic Reactive Action.

</details>

---
## 载具数据块
用 h2 标题开始一个“干净”的部分来列出载具，然后像往常一样为类别和列表项增加 h 级别。

每个列出的示例都以项目符号列表的形式呈现数据和描述，项目标题加粗。

### 载具数据块格式

```markdown
---
## Sample Vehicles

### Ground Vehicles

#### Interceptor

- **Hull:**  6 (Medium Military), 40 Structure

- **Speed:**  Fast

- **Systems:**  3

- **Traits:**  Ejector Seat, Enhanced Performance, Superior Handling, Surveillance Suite, Tough, Weaponized

- **Weapons:**  Oil slick dispenser, smoke dispenser, twin linked medium machine guns

- **Description:**  A souped-up luxury car, sports car or similar, this car is built to go fast and give as good as it takes in a battle. This is the sort of vehicle people think of when someone says, "spy car."
```
```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```


<details>

<summary>示例：格式化载具数据块（块引用） </summary>

---
> ## Sample Vehicles
>
> ### Ground Vehicles
>
> #### Interceptor
>
> - **Hull:**  6 (Medium Military), 40 Structure
>
> - **Speed:**  Fast
>
> - **Systems:**  3
>
> - **Traits:**  Ejector Seat, Enhanced Performance, Superior Handling, Surveillance Suite, Tough, Weaponized
>
> - **Weapons:**  Oil slick dispenser, smoke dispenser, twin linked medium machine guns
>
> - **Description:**  A souped-up luxury car, sports car or similar, this car is built to go fast and give as good as it takes in a battle. This is the sort of vehicle people think of when someone says, "spy car."

</details>

---
## 生物数据块
用 h2 标题开始一个“干净”的部分来列出生物。生物数据块使用表格，在格式和空间要求方面更为复杂。为了清晰起见，请避免使用小节，并在列表项之间添加分隔符。


每个列出的示例都应包含以下内容...

- **生物标题：** 分隔符后跟生物名称的 h3 标题。

- **MEG 条目：** 指向 [Mythras Encounter Generator](https://mythras.skoll.xyz/) 上指定生物的外部链接。

- **核心细节：** 生物名称/类型、属性、技能以及所需的任何特殊描述或角色备注。

- **武器细节：** 简化描述，包含武器名称和以下属性的列：大小（包括力量）、触及（包括射程）、伤害、AP/HP 和任何特殊规则。

- **命中部位和护甲：** 部位表格会因生物解剖结构的不同而异，但即使是传统人形生物也应包含在内，作为跟踪护甲和伤害的手段。

### 生物数据块格式

```markdown
---
### Goblin/Orc
[MEG entry](https://mythras.skoll.xyz/enemy_template/10891/)

| Creature Name | Goblin/Orc  |
| :-- | :-- |
| Key Attributes | STR 11, CON 14, SIZ 11, DEX 11, INT 11, POW 11, CHA 7 |
| Action Points | 2 |
| Damage Modifier | - |
| Initiative | +11 |
| Move | 6m |
| Abilities | Night Sight |
| Skills | Athletics 52%, Brawn 42%, Deceit 57%, Endurance 48%, Evade 62%, Perception 61%, Unarmed 52%, Willpower 42% |
| Combat Style | Warrior (Shortsword, Shield, Spear, Sling) 62% |

#### Weapon Details

| Weapon | Size | Reach | Damage | AP/HP | Special |
| :-- | :-: | :--: | :--: | :--: | :-- |
| Shortsword | M | M | 1d6 | 6/8 | |
| Spear | M | L | 1d8+1 | 4/5 | |
| Sling | L | 10/150/300 | 1d8 | 1/2 |  |
| Shield | L | S | 1d4 | 4/9 | Protects 3 locations for Passive Blocking/Warding |

#### Hit Locations & Armor

| **1d20** | **Location** | **AP/HP** |
| :-: | :-- | :-: |
| 1-3 | Right Leg | 1/5 |
| 4-6 | Left Leg | 1/5 |
| 7-9 | Abdomen | 1/6 |
| 10-12 | Chest | 1/7 |
| 13-15 | Right Arm | 1/4 |
| 16-18 | Left Arm | 1/4 |
| 19-20 | Head | 1/5 |
```
```
## Bestiary/List Name

Descriptive text. 

---
### Example Creature
[MEG Entry](https://mythras.skoll.xyz/enemy_template/8626/)

| Creature Name | Example Creature  |
| :-- | :-- |
| Key Attributes | STR 11, CON 14, SIZ 11, DEX 11, INT 11, POW 11, CHA 7 |
| Other notes | Values and details | 
```


<details>

<summary>示例：格式化生物数据块表格（块引用） </summary>

> ---
> ### Goblin/Orc
> [MEG entry](https://mythras.skoll.xyz/enemy_template/10891/)
>
> | Creature Name | Goblin/Orc  |
> | :-- | :-- |
> | Key Attributes | STR 11, CON 14, SIZ 11, DEX 11, INT 11, POW 11, CHA 7 |
> | Action Points | 2 |
> | Damage Modifier | - |
> | Initiative | +11 |
> | Move | 6m |
> | Abilities | Night Sight |
> | Skills | Athletics 52%, Brawn 42%, Deceit 57%, Endurance 48%, Evade 62%, Perception 61%, Unarmed 52%, Willpower 42% |
> | Combat Style | Warrior (Shortsword, Shield, Spear, Sling) 62% |
>
> #### Weapon Details
>
> | Weapon | Size | Reach | Damage | AP/HP | Special |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Shortsword | M | M | 1d6 | 6/8 | |
> | Spear | M | L | 1d8+1 | 4/5 | |
> | Sling | L | 10/150/300 | 1d8 | 1/2 |  |
> | Shield | L | S | 1d4 | 4/9 | Protects 3 locations for Passive Blocking/Warding |
>
> #### Hit Locations & Armor
>
> | **1d20** | **Location** | **AP/HP** |
> | :-: | :-- | :-: |
> | 1-3 | Right Leg | 1/5 |
> | 4-6 | Left Leg | 1/5 |
> | 7-9 | Abdomen | 1/6 |
> | 10-12 | Chest | 1/7 |
> | 13-15 | Right Arm | 1/4 |
> | 16-18 | Left Arm | 1/4 |
> | 19-20 | Head | 1/5 |


</details>


---
## 社区勘误

### 错别字和混淆

对作者文本的“清理”编辑应保持最少，但错别字和其他错误应直接更改，不作任何标记。


### 勘误信息面板

如果某个规则过于模糊、不完整或完全错误，请添加一个可折叠的社区勘误说明。

用斜体解释问题，仅使用粗斜体作为问题的标题——_不要使用 h(x) 标题！_——以免在侧边栏中创建令人困惑的条目。

如果添加了替换文本，请将其放在粗斜体的双引号中，前面加上正常斜体的“_Community Errata:_”。

如果需要额外规则，应以正常文本呈现。

#### 勘误格式模板

```markdown
<details>

<summary>* Community Errata</summary>

_**Errata Title**_

_Community Errata:_
_**"Replacement text."**_

_Explanation and any additional rules._

</details>
```
```
<details>

<summary>* Community Errata</summary>

_**Issue Title**_

_Community Errata:_
_**"Replacement text if required."**_

_Explanation text stating how the rule as written causes problems._

</details>
```

#### 勘误示例

<details>

<summary>* Community Errata</summary>

_**Climb**_

_Community Errata:_
_**"Worn armor hinders climbers by an amount equal to the average of worn Armor Points. Find this by totalling every location's worn armor points and divide that figure by the number of locations."**_

_The rule as written quickly causes issues. Wearing a single piece of 6AP armor would reduce a human to Move 0 meaning a human wearing a steel helmet and nothing else would be too overburdened to climb at all. This seems unreasonably restrictive hence the edited version suggested above. This will be updated should the original authors revise the rule as written._

</details>

<details>

<summary>* Community Errata</summary>

_**Gaits: Walk, Run, Sprint**_

_The published version of _Mythras Imperative_ has no explicit rules for moving at different Gaits though they are covered in the Mythras core rulebook. The Gait multipliers above have been added as part of the Community Errata._

_Where required it should be enough to treat Gaits as follows:_

- _Gaits faster than Walk apply a multiplier to the Move rating: 3x for Run, 5x for Sprint._

- _While at a Run or Sprint Gait, characters cannot attempt most proactive actions like attacking or casting spells. Some exceptions include..._
  - _Attacks when using the Charging rules._
  - _Firing ranged weapons with the Skirmishing trait._
- _As a general rule, any allowed actions should be treated as one Grade harder to pull off at a Run, and two Grades harder at a Sprint._


</details>

---
## 杂项警告

### 空行 / 回车

不同类型的条目之间留一个空行。标题、分隔符、表格等。这些在阅读视图中不会渲染可见，但它们的缺失可能导致格式问题。

### 粗体或斜体多段文本

每段都必须标记为粗体或斜体文本。段落之间的新行会破坏格式，留下孤立的格式标记。

### 国际拼写

倒退和令人遗憾的势力已决定取消所有英式拼写，转而采用客观上较弱的美国版本。请留意英式 -OUR 单词：_armour_、_favour_ 等。