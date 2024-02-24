# Style Guide Title (h1)

Use h1 headings (`# Heading Title`) for the main chapter title. All hx headings will appear in the sidebar as bookmarks.

If the title is not an h1 heading, the sidebar will have a duplication error showing the page and then the h2 'title' heading.

---
## Section headings (h2)

Use h2 headings (`## Section Heading`) preceded by a divider (`---`)for each new main section.

### Subsection headings increasing h-level by 1

Use h3 headings (`### Subsection Heading`) for each new Subsection, and  h4 headings (`#### Sub-Subsection Heading`) for each new sub-subsection. 


### Subsection h-progression: 2 > 3 > 4

The sub-headings get mixed up in the sidebar if h-progression is not dealt with correctly.

The heading marker should increase by one or nothing. 

h2 followed by h2 or h3 is fine. h3 followed by h3 or h4 is also fine. 

### Subsection Errors
h2 followed by h4 causes issues. The sidebar places the sub-heading somewhere above the heading in the table of contents.

### Reducing h-levels

This doesn't seem to be an issue. eg. h4 to h3 or h2 is fine. 

---
## Formatting conventions

The following styles are the norm for these _Imperative_ SRDs in Markdown format.

### Bold, Italics and Dividers

- Use double asterisks (`**Bold**`) for **Bold** text.
- Use underscores (`_Italic_`) for _Italic_ text. 
   - _nb: Avoid using single asterisks for Italics!_
- Use backslashes (`\_`) to 'escape' a character: \_Not Italic\_.
- Use angled quotes (``` `code` ```) to make `code blocks`.
- Use three hyphens (`---`) to insert a horizontal dividing line.

### Conventions for Bold & Italic

Aim to stick to the following patterns... 

#### Bold titles

Use bold titles for when describing spells, effects etc.
- **Magic Title:** Description.

#### Italic titles

Use italic titles for 'sub-lists' of variants spells etc.
- **Magic:** Description.
  - **_Magic Variant-A:_** Description.
  - **_Magic Variant-B:_** Description.

#### Italic Title References

Use italic titles when referencing a book such as _Mythras Imperative_ or the core _Mythras_ ruleset.

---
## Lists formatting

### Unordered lists / Bullet points

- Unordered lists are made with hyphens.
- Unordered lists are made with hyphens.
  - Increase the indent level with 2 spaces or a tab.

### Ordered lists / Numbered points

1. Numbered lists are made with the digit and a full stop/period.
2. Numbered lists are made with the digit and a full stop/period.
- Mix up with bullet points
	- And indentation
3. Mix numbers back in
   - And bullets

### Headed lists

For lists of related sub-headings embolden the title and colon.
- **Example 1:** Bla, bla, bla...
- **Example 2:** Bla, bla, bla...

### Italic headed lists

For lists of related sub-headings embolden & italicise the title and colon.
- **_Example 1:_** Bla, bla, bla...
- **_Example 2:_** Bla, bla, bla...

---
## Tables

Give tables a sub-header so they appear bookmarked in the sidebar, indented a level from their parent section. 

Make the heading row bold text. 

### Table text alignment

Use row 2 for content alignment: `:--`, `:-:`, or `--:`.
This will affect the whole column.

#### Basic Layout of Tables

| **Column 1** | **Column 2** |
| :-: | :-- |
| 1 | alpha |
| 2 | beta |
| 3 | gamma |

### Text alignment conventions

- Use centre alignment for numbers or similar value lists.
- Use left alignment for sentences of text.

#### Alignment Example Table

| **Number** | **Description** |
| :-: | :-- |
| 1 | Descriptive text |
| 2 | Descriptive text |
| 3 | Descriptive text |

#### Example: Fire Intensity Table

| **Intensity** | **Examples** | **Time to Ignite** | **Damage** |
| :-: | :-- | :-: | :-: |
| 1 | Candle | 1d4 | 1d2 |
| 2 | Torch | 1d3 | 1d4 |
| 3 | Campfire | 1d2 | 1d6 |
| 4 | Room-filling conflagration | 1d2 | 2d6 |
| 5 | Volcanic lava | Instant | 3d6 |

---
## Links

There are many uses for links in the SRD and only a few main cases are covered here.

### Formatting Links

Formatting a link is done with bracketed text. Use square brackets for the visible link text, and curved brackets for the destination URL: `[Link Text](URL)`.

In these documents the most commonly used external link will be the [Mythras Encounter Generator](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### External vs Internal links

External links go to other pages via the internet and will need an `http://example.com` URL and, by default, they will _always_ open in a new browser tab. 

To having multiple tabs cluttering the document being read, internal links and bookmarks are formed with relative URLs referencing the markdown files visible in the GitHub repository. Instead of a new tab, these internal links will rapidly scroll to the linked section.

#### Internal link examples

- **Chapter links:** These point to the start of a main (h1) section. e.g. the [Combat](0005_Combat.md) chapter.

  - Link format: `[Combat](0005_Combat.md)`

- **Subsection links:** These point to a heading within a chapter referencing the document as above but appending `?id=` followed immediately by the destination heading. e.g. [Leaping Attacks](0005_Combat.md?id=leaping-attacks) 

  - Link format: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### External links to subsections

There may be occasion to reference a known section of an external document, for instance, a specific table in another SRD. The formatting is the same as with subsection links, above, only using the external HTTP URL.

As an example, here is the [Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) from the [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/). 


```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Magic and Powers lists

Start a 'clean' section with an h2 heading for lists of available spells, powers etc; then h3 for each list item. 

Spells and powers are usually presented in a single flat list by magic type (Folk Magic, Theism, etc)  but if the list requires its own subsections, like school or cult specialisms, increase the heading level appropriately. For example, h2 for Theism Miracles List, h3 for Cult: Mithras, and h4 for each Mithras cult miracle. 
 
Particularly in the case of spells, but in any description using keyword attributes, list them in italic text.

Descriptive text and special rules use normal text.

### Spell List formatting

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Example: formatted spell list (block quoted) </summary>

---
> ## Spell descriptions
>
> ### Avert
> _Instant, Ranged_
>
> Avert is used to dismiss another spell within range. Avert can be cast reactively to neutralize offensive spells, by using the Counter Magic Reactive Action.

</details>

---
## Vehicle stat blocks
Start a 'clean' section with an h2 heading for the listings, then increase the h-level as usual for categories and list items. 

Each listed example has the stats and descriptions presented as a bullet point list with bolded point titles.

### Vehicle Stat Block formatting

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```


<details>

<summary>Example: formatted vehicle stat block (block quoted) </summary>

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
## Creature stat blocks
Start a 'clean' section with an h2 heading for the listings. Creature stat blocks use tables and are more complex in terms of formatting and space requirements. For clarity, avoid subsections and add dividers between list items.


Each listed example should have the following...

- **Creature title:** A divider followed by an h3 header for the creature name.

- **MEG entry:** An external link to the specified creature on the [Mythras Encounter Generator](https://mythras.skoll.xyz/).

- **Core Details:** Creature name/type, attributes, skills and any special descriptions or character notes as required.

- **Weapon Details:** Abridged desciptions with columns for the weapon name and the following attributes: Size (include Force here), Reach (include Range here), Damage, AP/HP, and any special rules.

- **Hit Locations & Armor:** Location tables will vary based on differing creature anatomy but should be included even for traditional humanoids as a means to track armor and damage. 

### Creature Stat Block formatting

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

<summary>Example: formatted creature stat block tables (block quoted) </summary>

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
## Community Errata

### Typos and confusion

Edits to 'clean up' the authors' text should be kept minimal but typos and other mistakes should just be changed inline without any signposting.


### Errata Info panels

Where a given rule is too ambiguous, incomplete, or simply wrong, add in a collapsible Community Errata note.

Explain the issue in italics using only bold italics for the issue's title - _no h(x) headers!_ - so as not to create confusing sidebar entries.

If replacement text is added place it in double-quotes in bold italic, preceded by "_Community Errata:_" in normal weight italics.

Additional rules, if required, should be presented in normal weight text.

#### Errata Formatting Template

```
<details>

<summary>* Community Errata</summary>

_**Issue Title**_

_Community Errata:_
_**"Replacement text if required."**_

_Explanation text stating how the rule as written causes problems._

</details>
```

#### Errata Examples

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
## Miscellaneous Warnings

### Blank lines / Carriage Returns

Leave a blank line between different types of entry. Headers, dividers, tables etc. These won't be rendered visible in reading view but their absence can cause formatting issues.

### Bold or italic multi-paragraph text

Each paragraph has to be marked as bold or italic text. The new line between paragraphs will break the formatting leaving orphaned formatting marks.

### International spellings

The regressive and deplorable powers have seen fit to remove all British spellings in favor of the objectively weaker US versions. Be on the look out for British -OUR words: _armour_, _favour_, etc. 
