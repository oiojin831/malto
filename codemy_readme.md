# react-mobx-firebase project


# codemy react #2
기초 세팅
```
mkdir malto && cd malto
npm init .
vim .gitignore
git init
git add .
git commit -m "initial commit'
```


webpack 설치
```
# system level로 webpack을 설치한다.
npm install webpack -g
# 내 프로젝트안에 node_module에 설치하고 devDependencies에 추가한다.
npm install webpack --save-dev
npm install webpack-dev-server --save-dev

# webpack-dev-server사용을 안한다면 bundle.js를 직접 생성해야된다.
# entry.js에 document.write("Yay!");를 넣고
webpack ./entry.js bundle.js
#index.html을 chrome에서 열어본다.
```

css 설정하기
```
# production에서는 raw css만들어줘서 dev에만 있으면된다.
npm install css-loader style-loader --save-dev
```

config file 만들기
```
# 위에서 webpack으로 했던걸 자동으로 하고 css로더 추가
module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};
```

이렇게 설정하고나면 
webpack-dev-server로 서버시작하면된다.
아직 css는 적용이 되지않았다.

# codemy react #3
* bundle.js는 webpack-dev-server에서 생성(다른데저장해서 로드시킨다)하니까 지워줘도된다.
그냥 html에 css를 추가하는게 아니라 js에서 사용할려면 webpack에서 import를 쓰면
좋은데 es6 syntax가 필요하다. 이걸위한 설치들을 하자

```
npm install babel-loader babel-core babel-preset-es2015 --save-dev
npm install babel-preset-stage-0 babel-preset-react --save-dev
npm install babel-plugin-transform-runtime --save-dev
```
loader들을 설치했으니 webpack.config.js를 수정하자

```
module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { 
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['transform-runtime']
        }
      }
    ]
  }
};
```
entry.js에 import "./style.css" 추가하고

webpack-dev-server --color --progress --watch

# codemy react #4

react 설치 하기
```
npm install react react-dom --save

# codemy react #5
구조잡기
extract-text-webpack-plugin를 포함시킨다. inline으로 css만드는걸 밖으로 빼는 역할
app안에 넣기 구조잡기

# codemy react #6
purcss
그냥 index.html에 cdn삽입해도됨
```
<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
```

아니면 npm 으로 설치하기
```
npm install purecss --save
```

# codemy react #7
click event 넣기
a tag로 버튼 만들기
클릭됐을떄 default 행동 막아주기.
onclick에는 함수 이름만 주기, ()로 실행시키는게 아니라
여기서는 this. 가 필요함
Layout의 instance component의 method인데 정의되는데 내부에서는 this가 필요하다.
변화는걸 trigger 할려면 state를 거쳐야함!!!!!!

