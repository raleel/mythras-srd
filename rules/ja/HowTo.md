# 前提条件

1. [Markdown言語](https://www.markdownguide.org/basic-syntax/)の基本的な理解。

2. GitHubアカウントをお持ちでない場合は、無料で[github](https://github.com/)アカウントを作成する必要があります。RPGの名前を使用することをお勧めします。これは、人々があなたのSRDにアクセスするために使用するURLの一部となるためです。

3. gitを知らなくても、ブラウザを通じてこのプロセス全体を実行できます。ただし、GitHub Desktopを学ぶことで、変更をライブで世界に公開する前にローカルでテストできるようになります。

> ドメイン名を登録している場合、このプロセスを使用して、私のようにSRDを作成できます。https://srd.7thextinctionrpg.com

# プロセス

## GitHubでのリポジトリ作成

1. GitHubにログインします。

2. 公開テンプレート https://github.com/7thExtinctionrpg/RPG_SRD_Template に移動します。

3. 「Use this template」をクリックします。

![Step3](/_media/Step3.png)

4. 「Create a new repository」を選択します。

5. リポジトリ名を入力します。

![Step5](/_media/Step5.png)

6. 「Private」を選択します。

7. 「Create repository」を選択します。

テンプレートのコピーには5〜30秒かかります。その後、あなた自身のコピーが作成されます。

8. 「.nojekyll」ファイルがあることを確認してください。これは、GitHubでウェブサイトをホスティングする際に必要となる空のファイルです。これがないとSRDが正しく表示されません。（*公開されたファイルをJekyllで実行しないようGitHub Pagesに指示します*）。

## コンテンツの追加

### *.md ファイル

.mdファイルはMarkdownファイルであり、Markdownはプレーンテキストドキュメントに書式設定要素を追加するために使用できる軽量マークアップ言語です。コンテンツのサイズに応じて、ゲームのすべての情報を単一の*.mdファイルに配置することもできますし、[7thextinctionrpg.com](https://srd.7thextinctionrpg.com)のように章ごとに個別のファイルを作成することもできます。「sample.md」にはいくつかの書式設定例が記載されています。

Markdown言語は非常に簡単に学習できます。上記「前提条件」の2番のポイントで提供されているリンクを使用して、構文の完全なリストを確認してください。

### _Sidebar.md

これはウェブサイトの左側にあるメニュー、ナビゲーションペインです。Markdownファイルをリポジトリに追加したら、その内容が含まれるようにここにファイルを追加する必要があります。既存の書式に従ってください。

## GitHub Pagesを有効にしてリポジトリをウェブサイトにする

1. リポジトリで「Settings」をクリックします。

![Website-Step1](/_media/Website-Step1.png)

2. 左側のメニューで「Pages」を選択します。

![Website-Step2](/_media/Website-Step2.png)

3. リポジトリを「public」にしていない場合、2つの選択肢があります。
    a. リポジトリを公開し、GitHub Pagesを使用してSRDウェブサイトを無料でホストできるようにする。
    b. GitHubアカウントをアップグレードする（執筆時点では月額$4または年会費$48）。

4. 「Branch」の下で「main」を選択し、「Save」をクリックします。

5. 10〜20秒待ってからページを更新します。

6. https://coweater.github.io/mysrd/ のようなURLが表示されるようになります。

![Website-Step6](/_media/Website-Step6.png)

## フォントの変更

1. `/_assets/style.css`ファイルを編集します。

2. 「body section」の下に`siteFont`と`headingFont`が見つかります。

3. これらを目的のフォントに変更します。

## Fontawesomeおよび/またはMaterial Iconsプラグインを使用してSRDに無料アイコンを表示する

### Fontawesome

Fontawesomeを使用して無料アイコンとアニメーションアイコンを取得します。サブスクライブユーザーはProアイコンを使用できます。

1. [Fontawesome](https://fontawesome.com/icons)でアイコンを見つけます。
2. アイコンを選択します。
3. ポップアップウィンドウのHTMLタブで、「" "」の間にあるすべてをコピーします。

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. コピーしたテキストを、スペースを入れずに``:``の間に配置します。

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Material Iconsを使用してさらに多くの無料アイコンを取得します。

1. [Material Icons](https://fonts.google.com/icons)でアイコンを見つけます。
2. ウェブスパンリンクをコピーして、Markdownファイルに直接挿入します。

```markup
<span class="material-icons">face</span>
```