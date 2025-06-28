目的：今後 TypeScript や React にスケールする為の準備段階

使用技術： JavaScript/CSS/HTML

コードの概要
このコードは、ウェブページ上にモーダルウィンドウと呼ばれるポップアップ形式の情報を表示するためのものです。ユーザーがボタンをクリックするとモーダルウィンドウが開き、重要なメッセージや詳細情報を表示できます。モーダルウィンドウは、閉じるボタンをクリックするか、モーダルの外側（背景）をクリックするか、Escape キーを押すことで閉じることができます。

<h1>HTML（構造）の解説</h1>
HTMLはウェブページの骨組みを作る役割をします。このコードでは、主に以下の要素で構成されています。

<h3>!DOCTYPE html</h3> この文書がHTML5の標準に準拠していることを宣言しています。

<h3>html lang="ja"</h3> HTML文書の開始を表し、言語が日本語であることを示しています。

<h3>head</h3> ウェブページには表示されないけれど、ページの設定や情報を記述する部分です。

<h3>meta charset="UTF-8"</h3> 文字コードをUTF-8に設定し、文字化けを防ぎます。

<h3>meta name="viewport" content="width=device-width, initial-scale=1.0"</h3> モバイル端末など、さまざまなデバイスの画面サイズに合わせて表示を調整するための設定です。

<h3>title</h3> ブラウザのタブやウィンドウに表示されるページのタイトルです。

<h3>link rel="stylesheet" href="style.css"</h3> style.cssという外部のCSSファイルを読み込んで、デザインを適用します。

<h3>body</h3> ウェブページに実際に表示される内容を記述する部分です。

<h3>div class="box"></h3> 「モーダルウィンドウの例」というテキストが表示される、装飾された四角い要素です。マウスカーソルを合わせるとアニメーションします。

<h3>button id="openModalBtn"></h3> モーダルウィンドウを開くためのボタンです。「モーダルを開く」というテキストが表示され、openModalBtn という ID がつけられています。この ID を使って JavaScript からこのボタンを操作します。

<h3>div id="myModal" class="modal"</h3> モーダルウィンドウ全体のコンテナ（入れ物）です。初期状態では非表示になっており、ボタンをクリックすると表示されます。myModalというIDとmodalというクラスがつけられています。

<h3>div class="modal-content"</h3> モーダルウィンドウの白い背景部分と、その中に表示されるコンテンツの入れ物です。

<h3>span class="close-button"</h3> モーダルを閉じるための「×」ボタンです。

<h2>モーダルタイトル</h2> モーダルウィンドウのタイトルです。

<h3>これはモーダルウィンドウのコンテンツです。</h3> モーダルの本文です。

<h3>背景をクリックするか、閉じるボタンを押して閉じることができます。</h3> モーダルの閉じ方についての説明です。

<h3>script src="script.js"</h3> script.jsという外部のJavaScriptファイルを読み込んでいます。このファイルがモーダルウィンドウの表示・非表示の動きを制御します。

<h1>CSS（デザイン）の解説</h1>
CSSはHTMLで作成された要素の見た目（色、サイズ、配置など）をデザインする役割をします。

- body:

  - width: 100%;と min-height: 100vh;: ページ全体が画面いっぱいに広がるように設定しています。

  - background: url(...) no-repeat; background-size: cover;: 背景に画像を設定し、画面全体を覆うようにしています。

  - font-family: Arial, sans-serif;: フォントの種類を指定しています。

  - display: flex; flex-direction: column; justify-content: center; align-items: center;: ページの内容を縦方向に中央揃えに配置しています。

  - margin: 0; color: #333;: 余白をなくし、文字色を濃い灰色に設定しています。

- button:

  - padding, font-size: ボタンの余白と文字の大きさを設定しています。

  - cursor: pointer;: マウスカーソルをボタンに合わせると、指の形に変わるようにしています。

  - background-color, color, border, border-radius, box-shadow: ボタンの背景色、文字色、枠線、角の丸み、影を設定しています。

  - transition: background-color 0.3s ease;: 背景色が変化する際に、0.3 秒かけてゆっくりと変化するようにアニメーション効果を加えています。

- button:hover: マウスカーソルがボタンの上に乗った時の背景色を変更しています。

- .modal: モーダルウィンドウ全体のスタイルです。

  - display: none;: 初期状態では表示されないように設定しています。

  - position: fixed;: 画面の決まった位置に固定されるようにします。これにより、スクロールしてもモーダルが動かなくなります。

  - z-index: 1;: 他のコンテンツよりも手前に表示されるようにします。

  - left: 0; top: 0; width: 100%; height: 100%;: 画面全体を覆うように設定しています。

  - background-color: rgba(0, 0, 0, 0.6);: 半透明の黒い背景色で、モーダル以外の部分を暗く表示します。

  - justify-content: center; align-items: center;: モーダルの内容を中央に配置するために使います。

  - opacity: 0; transition: opacity 0.3s ease;: 透明度を 0 にして最初は見えなくし、表示されるときに 0.3 秒かけてゆっくりと表示されるように設定しています。

- .modal.show: JavaScript によって modal 要素に show クラスが追加されたときに適用されるスタイルです。

  - display: flex;: 要素を表示し、中身を中央に配置するために Flexbox を使います。

  - opacity: 1;: 透明度を 1 にして完全に表示します。

- .modal-content: モーダルウィンドウの白い背景を持つコンテンツ部分のスタイルです。

  - background-color: #fefefe;, padding, border, border-radius, box-shadow: 背景色、余白、枠線、角の丸み、影を設定しています。

  - width: 80%; max-width: 500px;: 幅を画面の 80%にし、最大幅を 500px に制限しています。

  - position: relative;: 子要素（閉じるボタンなど）をこの要素内で自由に配置できるようにします。

  - transform: translateY(-50px); opacity: 0;: 初期状態では少し上にずれていて、透明度も 0（見えない）に設定されています。これにより、モーダルが表示されるときに下からスライドしてフェードインするようなアニメーション効果が生まれます。

  - transition: transform 0.3s ease, opacity 0.3s ease;: 位置と透明度が 0.3 秒かけてゆっくりと変化するように設定しています。

- .modal.show .modal-content: modal 要素に show クラスが追加されたときに、modal-content に適用されるスタイルです。

  - transform: translateY(0);: 元の位置（上方向へのずれなし）に戻します。
  - opacity: 1;: 透明度を 1 にして完全に表示します。

- .close-button: 「×」ボタンのスタイルです。

  - float: right;: 親要素の右端に寄せて配置します。

  - font-size: 28px; font-weight: bold;: 文字のサイズと太さを設定しています。

  - cursor: pointer;: マウスカーソルを合わせると指の形に変わります。

  - position: absolute; top: 10px; right: 20px;: 親要素である.modal-content の右上から少し離れた位置に配置します。

- .close-button:hover, .close-button:focus: 「×」ボタンにマウスカーソルが乗った時やフォーカスが当たった時の文字色と下線を変更しています。

- .modal-content h2, .modal-content p: モーダル内のタイトルと段落のスタイルです。

- .box: モーダルウィンドウの例と書かれた四角い要素のスタイルです。

  - width, height: 幅と高さを設定しています。

  - margin: 上からの余白を設定しています。

  - display: flex; align-items: center; justify-content: center;: テキストを中央揃えに配置しています。

  - color, font-size, font-weight: 文字の色、サイズ、太さを設定しています。

  - position: relative;: 疑似要素の配置基準となるように設定しています。

  - transition: 0.4s;: マウスホバー時の変化に 0.4 秒のアニメーションを適用します。

- .box::before, .box::after: box 要素の四隅に装飾的な線を追加するための疑似要素です。

  - content: "";: 疑似要素に内容がないことを示します。

  - width, height, border: 線を表現するための幅、高さ、枠線を設定しています。

  - position: absolute;: box 要素内での絶対位置を指定しています。

  - transition, transition-delay: アニメーションの速度と遅延時間を設定しています。

- .box:hover:before, .box:hover::after: box にマウスカーソルが乗った時に、四隅の線が広がって全体を囲むようにアニメーションします。

- .box:hover: box にマウスカーソルが乗った時に、背景が半透明になり、ぼかし効果（backdrop-filter: blur(15px);）が適用されます。

<h1>JavaScript（動き）の解説</h1>
JavaScriptはウェブページに動きやインタラクション（ユーザーとのやり取り）を追加する役割をします。

- const openModalBtn = document.getElementById("openModalBtn");: ID が openModalBtn の HTML 要素（「モーダルを開く」ボタン）を取得し、openModalBtn という定数に格納しています。

- const myModal = document.getElementById("myModal");: ID が myModal の HTML 要素（モーダルウィンドウ全体）を取得し、myModal という定数に格納しています。

- const closeButton = document.querySelector(".close-button");: クラスが close-button の HTML 要素（「×」ボタン）を取得し、closeButton という定数に格納しています。querySelector は指定されたセレクタに一致する最初の要素を取得します。

- モーダルを開く処理:

  - openModalBtn.addEventListener("click", () => { ... });: openModalBtn（「モーダルを開く」ボタン）がクリックされたときに実行される処理を設定しています。

  - myModal.classList.add("show");: myModal（モーダルウィンドウ全体）に show というクラスを追加しています。この show クラスが追加されると、CSS の.modal.show のスタイルが適用され、モーダルウィンドウが表示されます。

- モーダルを閉じる処理 (× ボタン):

  - closeButton.addEventListener("click", () => { ... });: closeButton（「×」ボタン）がクリックされたときに実行される処理を設定しています。

  - myModal.classList.remove("show");: myModal から show クラスを削除しています。これにより、CSS の.modal.show のスタイルが解除され、モーダルウィンドウが非表示になります。

- モーダルの外側（背景）をクリックして閉じる処理:

  - myModal.addEventListener("click", (event) => { ... });: myModal（モーダルウィンドウ全体、つまり背景も含む）がクリックされたときに実行される処理を設定しています。

  - if (event.target === myModal) { ... }: クリックされた要素（event.target）が myModal 自体（モーダルのコンテンツ部分ではなく、半透明の背景部分）である場合にのみ、以下の処理を実行します。

  - myModal.classList.remove("show");: myModal から show クラスを削除し、モーダルを閉じます。

- Escape キーで閉じる処理 (オプション):

  - document.addEventListener("keydown", (event) => { ... });: ドキュメント全体でキーが押されたときに実行される処理を設定しています。

  - if (event.key === "Escape" && myModal.classList.contains("show")) { ... }: 押されたキーが Escape キーであり、かつ myModal に show クラス（つまりモーダルが表示されている状態）が含まれている場合にのみ、以下の処理を実行します。

  - myModal.classList.remove("show");: myModal から show クラスを削除し、モーダルを閉じます。
