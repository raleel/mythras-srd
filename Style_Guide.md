# Style Guide Title (h1)

Use h1 headings (`# Heading Title`) for the main chapter title.
All hx headings will appear in the sidebar as bookmarks.

---

## Section headings (h2)

Use h2 headings (`## Section Heading`) for each new section.

### Subsection headings increasing h-level by 1

Use h3 headings (`### Subsection Heading`) for each new Subsection, and  h4 headings (`#### Sub-Subsection Heading`) for each new sub-subsection. 


### Subsection h-progression: 2 > 3 > 4

The sub-headings get mixed up in the sidebar if h-progression is not dealt with correctly.

The heading marker should increase by one or nothing. 

h2 followed by h2 or h3 is fine. h3 followed by h3 or h4 is also fine. 

#### Subsection Errors
h2 followed by h4 causes issues. The sidebar places the sub-heading somewhere above the heading in the table of contents.

#### Reducing h-levels

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

## Miscellaneous Warnings

### Blank lines / Carriage Returns

Leave a blank line between different types of entry. Headers, dividers, tables etc. These won't be rendered visible in reading view but their absence can cause formatting issues.

### Bold or italic multi-paragraph text

Each paragraph has to be marked as bold or italic text. The new line between paragraphs will break the formatting leaving orphaned formatting marks.

### International spellings

The regressive and deplorable powers have seen fit to remove all British spellings in favor of the objectively weaker US versions. Be on the look out for British -OUR words: _armour_, _favour_, etc. 
