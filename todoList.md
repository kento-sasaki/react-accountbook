## React Accountbook

#### Firestoeの設計
- [x] 必要な document を決める
- [x] DB 作成

#### 収支の登録機能実装
- [x] 収支入力
- [x] DB 登録
- [x] ここまでのテストを書く

#### グラフ描画
- [x] 収支を取得する関数を作成
- [x] charts コンポーネントを作成
- [x] とりあえず一覧表示
- [x] グラフ描画
- [x] グラフ描画の仕様
  - [x] マウントしたら自分のグラフを描画
  - [x] 収支を登録したら再描画
  - [x] ログアウトしたらグラフをリセット
- [x] 同じ日の収支額は合計

#### Firestoreのルールを定義する
- [x] firestore.rulesを設定
- [x] firestore.rulesをテスト
  - [x] read, create, update, deleteそれぞれのテスト

#### 収支の一覧を表示
- [x] テーブルを作る
- [x] テーブルを並べる
- [x] テーブルに収支を入れる
- [x] グラフと表をレスポンシブに

#### Expense ドキュメントを編集できるようにする
- [x] Edit ボタンを作る
- [x] Edit ボタンを押したら該当の行を編集できるようにする
- [x] firestore のコレクションを書き換える関数を作る
- [x] ボタンクリックで着火するようにする
- [x] Dropdown を修正
- [x] container と component に分ける
- [x] story を作る

#### Expense ドキュメントを削除できるうようにする
- [x] Delete ボタンで Modal を表示
- [x] Expense ドキュメントを削除する関数を作成
- [x] Modal の削除ボタンで着火するようにする
- [x] firestore.rules に update のルールを追加
- [x] firestore.reles の update のテストを書く

#### Cloud Functions導入
- [x] チュートリアルに沿って最初の関数をデプロイ
- [x] ローカル実行環境を整える
- [x] HTTPS 関数を試作
- [x] Cloud Firestore 関数を試作
- [x] Authentication 関数を試作
  - [x] ログインしたら users コレクションに自分のドキュメントを登録
- [x] GitHub Actions を修正

#### Google Cloud Vision APIを使ってみる
- [x] [Google Cloud Vision API: Node.js Client](https://github.com/googleapis/nodejs-vision#quickstart)のクイックスタートをCloud Functionsで実行

#### Cloud Storage導入
- [x] 画像を保存できるようにする
- [x] storage のルールを作成

#### Cloud StorageトリガーでFunctions
- [x] storageに画像を保存したら着火する関数を作成
- [x] 画像をvisionで解析
- [x] レシートの文字を抽出
- [x] レシートから支出を抽出
- [x] 支出をFirestoreに登録
- [x] レシートからFirestoreに支出を登録したタイミングでグラフを再描画

#### inputFileコンポーネントをきれいにする
- [x] ファイル選択ボタンをきれいに修正
- [x] 選択したファイル名を表示
  - [x] 長過ぎるファイル名は末尾を省略
- [x] アップロードボタンを追加

#### トップページを整える
- [x] currentUserでトップページを分岐
- [x] ログインフォームをPortalに変更
- [x] favicon更新
- [x] LoginFormのレイアウトを変更
- [ ] ダッシュボード画面を作る
  - [ ] 左にメニューを表示
  - [ ] 円グラフを作成
  - [ ] 折れ線グラフを作成
  - [ ] 現在の支出合計を表示
- [x] ロゴ、画像を使って整える
