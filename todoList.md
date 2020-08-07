## React Accountbook

#### Firestoe の設計

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

#### Firestore のルールを定義する

- [x] firestore.rules を設定
- [x] firestore.rules をテスト
  - [x] read, create, update, delete それぞれのテスト

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

#### Cloud Functions 導入

- [x] チュートリアルに沿って最初の関数をデプロイ
- [x] ローカル実行環境を整える
- [x] HTTPS 関数を試作
- [x] Cloud Firestore 関数を試作
- [x] Authentication 関数を試作
  - [x] ログインしたら users コレクションに自分のドキュメントを登録
- [x] GitHub Actions を修正

#### Google Cloud Vision API を使ってみる

- [x] [Google Cloud Vision API: Node.js Client](https://github.com/googleapis/nodejs-vision#quickstart)のクイックスタートを Cloud Functions で実行

#### Cloud Storage 導入

- [x] 画像を保存できるようにする
- [x] storage のルールを作成

#### Cloud Storage トリガーで Functions

- [x] storage に画像を保存したら着火する関数を作成
- [x] 画像を vision で解析
- [x] レシートの文字を抽出
- [x] レシートから支出を抽出
- [x] 支出を Firestore に登録
- [x] レシートから Firestore に支出を登録したタイミングでグラフを再描画

#### inputFile コンポーネントをきれいにする

- [x] ファイル選択ボタンをきれいに修正
- [x] 選択したファイル名を表示
  - [x] 長過ぎるファイル名は末尾を省略
- [x] アップロードボタンを追加

#### トップページを整える

- [x] currentUser でトップページを分岐
- [x] ログインフォームを Portal に変更
- [x] favicon 更新
- [x] LoginForm のレイアウトを変更
- [x] ロゴ、画像を使って整える
- [x] モバイル閲覧用のサイドバーを作成

#### README をちゃんと書く

- [x] 概要
  - [x] どんな用途のサービスなの簡潔に記述
- [x] 機能一覧
  - [x]支出の登録、編集、削除
  - [x] レシートの画像から支出を登録
  - [x] 支出の一覧表示
  - [x] 支出をグラフで描画
  - [x] ユーザー認証
  - [x] 匿名認証
- [ ] 技術一覧
  - [x] React
  - [x] TypeScript
  - [x] Firebase
  - [x] Redux Toolkit
  - [x] React Router
  - [x] ESLint
  - [x] Prettier
  - [x] Cloud Vision API
  - [x] GitHub Actions
  - [x] Emotion
  - [x] Semantic UI React
  - [x] Jest
  - [x] React Testing Library
  - [x] Storybook
  - [x] Cypress

#### テスト

- [x] E2E テストを書く
  - [x] home, contact の移動
  - [x] Expense の登録、削除、編集
- [x] Storybook の snapshots テスト
- [x] 警告ログ
      Warning: componentWillReceiveProps has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.
        
       _ Move data fetching code or side effects to componentDidUpdate.
      _ If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state \* Rename componentWillReceiveProps to UNSAFE*componentWillReceiveProps to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE* name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.
        
       Please update the following components: BarChart
        
       **Recharts 2.0.0 で修正されるっぽい**

#### Contact 画面実装

- [x] presentational と container に分割
- [x] テキストフォームを作成
- [x] 送信ボタン
  - [x] 確認モーダルも表示
- [x] Slack に通知
- [x] story を作成
- [x] snapshot を更新

#### タグ機能を実装

- [x] Firestore の設計を再考
- [x] tag 編集ボタンを実装
- [x] Firestore を変更できるように実装

#### ダッシュボードを作る

- [ ] 左にメニューを表示
- [ ] 円グラフを作成
- [ ] 折れ線グラフを作成
- [ ] 現在の支出合計を表示
