# 前提条件

1. [Markdown言語](https://www.markdownguide.org/basic-syntax/)についての基本的な理解。

2. もしまだ持っていない場合は、無料の [github](https://github.com/) アカウントを作成する必要があります。URLの一部になるため、RPGの名称を使用することをお勧めします。

3. gitを知らなくても、ブラウザを通じてこのプロセス全体を実行できます。ただし、GitHub Desktopを学ぶことで、変更を公開する前にローカルでテストできるようになります。

> もし独自ドメインを登録している場合、このプロセスを使用して私が行ったようなSRDを作成できます（例： https://srd.7thextinctionrpg.com ）

# プロセス

## Githubでのリポジトリ作成

1. Githubにログインします。

2. 公開テンプレート https://github.com/7thExtinctionrpg/RPG_SRD_Template に移動します。

3. "Use this template"（このテンプレートを使用する）をクリックします。

![Step3](/_media/Step3.png)

4. "Create a new repository"（新しいリポジトリを作成）を選択します。

5. リポジトリ名を入力します。

![Step5](/_media/Step5.png)

6. "Private"（プライベート）を選択します。

7. "Create repository"（リポジトリを作成）を選択します。

テンプレートのコピーに5～30秒かかります。その後、自分専用のコピーが完成します。

8. ".nojekyll" ファイルが存在することを確認してください。これはGithub上でウェブサイトをホストする際に必要な空のファイルであり、これがないとSRDが正しく表示されません。（GitHub Pagesに対し、公開されたファイルをJekyllで処理しないよう指示するものです。）


## コンテンツの追加

### *.md ファイル

.mdファイルはMarkdownファイルです。Markdownは軽量なマークアップ言語であり、プレーンテキストドキュメントに書式設定要素を追加するために使用できます。コンテンツのサイズに応じて、ゲームの全情報を1つの *.md ファイルにまとめることも、[7thextinctionrpg.com](https://srd.7thextinctionrpg.com) で私が行っているように各章ごとに別々のファイルを作成することもできます。"sample.md" が書式設定の例を提供しています。

Markdown言語は非常に習得が容易です。構文の完全なリストについては、上記「前提条件」の項目2で提供されたリンクを使用してください。

### _Sidebar.md

これはウェブサイト左側にあるメニューおよびナビゲーションペインです。リポジトリにMarkdownファイルを追加したら、その内容が含まれるようにここでファイルを追加する必要があります。既存の書式に従ってください。


## Github Pagesを有効にしてリポジトリをウェブサイト化する

1. リポジトリ内で 'Settings'（設定）をクリックします。

![Website-Step1](/_media/Website-Step1.png)

2. 左側のメニューで 'Pages' を選択します。

![Website-Step2](/_media/Website-Step2.png)

3. リポジトリを 'public'（公開）にしていない場合、2つの選択肢があります。
    a. リポジトリを公開設定にする。これにより、Github Pagesを使用してSRDウェブサイトを無料でホストできるようになります。
    b. Githubアカウントをアップグレードする（執筆時点で月額4ドル、または年額48ドル）。

4. 'Branch'（ブランチ）で 'main' を選択し、保存をクリックします。

5. 10～20秒待ってから、ページを更新します。

6. https://coweater.github.io/mysrd/ のような自分のURLが表示されます。

![Website-Step6](/_media/Website-Step6.png)


## フォントの変更

1. /_assets/スタイル.css ファイルを編集します。

2. 'body section' の下に、siteFont と headingFont があります。

3. これらを使用したいフォントに変更します。


## FontawesomeやMaterial Iconsプラグインを使用してSRDに無料アイコンを表示する

### Fontawesome

Fontawesomeを使用して無料アイコンやアニメーションアイコンを取得します。登録ユーザーはProアイコンを使用できます。

1. [Fontawesome](https://fontawesome.com/icons) でアイコンを探します。
2. アイコンを選択します。
3. ポップアップウィンドウのHTMLタブで、" " の間にあるすべてをコピーします。

```EXAMPLE
<i クラス="fa-solid fa-dice-d20"></i>
```

4. コピーしたテキストを `:` の間に、スペースを入れずに配置します。

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Material Iconsを使用して、より多くの無料アイコンを取得します。

1. [Material Icons](https://fonts.google.com/icons) でアイコンを探します。
2. ウェブ用のspanリンクをコピーして、Markdownファイルに直接挿入します。

```markup
<span クラス="material-icons">face</span>
```