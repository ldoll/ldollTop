## 安装node
http://nodejs.cn/download/

## 安装配置nrm [网址](https://www.npmjs.com/package/nrm)
  1. `npm i -g nrm`
  2. `nrm ls`  
  3. `nrm use taobao`  
       ### 问题:    
      [nrm :无法加载文件 C:\Users\TANG\AppData\Roaming\npm\nrm.ps1，因为在此系统上禁止运行脚本。](https://www.haowuliaoa.com/article/info/848012.html)	

## 安装快速创建create-react-app [网址](https://www.npmjs.com/package/create-react-app)
  1. `npx create-react-app ldollTop`  
  2. `npm run start`  

## 安装eslint [网址](https://www.npmjs.com/package/eslint)
  1. `npm i -g eslint` 
  2. `eslint --init`   


## 安装babel7
  1. `npm i -D @babel/cli`  
  2. `npm i @babel/core -D`   //babel核心部分，把ES6转化成ES5  
  3. `npm i @babel/plugin-transform-runtime -D`  //外部引用辅助函数和内置函数，自动填充代码而不会污染全局变量。  
  4. `npm i @babel/preset-env -D`  //提供环境的映射获得插件列表并传递给babel  
  5. `npm i @babel/preset-react -D`  //解析JSX  
  6. `npm i babel-loader -D`  //webpack需要用到这个loader  
  7. `npm i @babel/polyfill -S`  //转义es6的API  
  8. `npm i @babel/runtime -S`  //babel变换运行时插件的依赖  
  9. 根目录新建文件.babelrc 填充内容 
        ```
        {
            "presets": ["@babel/preset-env", "@babel/preset-react"],
            "plugins": ["@babel/plugin-transform-runtime"]
        }
        ```

## 安装webpack 
  [webpack官网入门介绍](https://www.webpackjs.com/concepts/)  
  [babel-loader配置](https://www.npmjs.com/package/babel-loader)
  1. `npm i webpack -D`  
  2. `npm i webpack-cli -D`  
  3. `npm i -S lodash`  //依赖捆绑  
  4. 根目录新建文件 webpack.config.js  填充内容  
        ```
        const path = require("path");
        module.exports = {
            entry: "./src/index.js",
            mode: "development",
            output: {
                filename: "main.js",
                path: path.resolve(__dirname, "dist"),
            },
            module: {
                rules: [
                    {
                        test:/\.m?js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env'],
                                plugins: ['@babel/plugin-proposal-object-rest-spread']
                            },
                        }
                    }
                ],
            },
            resolve: {
                extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
            }
        };
        ````

## 安装热更新
  1. `npm i live-server -g`
  2. `live-server`

## 测试webpack
[webpack官网入门介绍](https://www.webpackjs.com/concepts/)  
  1. package.json文件修改
        ```
        "scripts": {
            "build": "webpack ./src/tt.js"
        },
        ```
  2. 根目录新建src/tt.js  
        ```  
        import _ from 'lodash';
        function component() {
            const element = document.createElement('div');
            element.innerHTML = _.join(['hellow', 'webpack'], ' ');
            return element;
        }
        document.body.appendChild(component());
        ```
  3. 根目录新建dist/tt.html
        ```
        <!doctype html>
        <html>
        <head>
            <title>Getting Started</title>
        </head>
        <body>
            <script src="main.js"></script>
        </body>
        </html>
        ```
  4. `npm run build` 

## 创建SSH key [教程](https://blog.csdn.net/mqdxiaoxiao/article/details/92712143)
  1. `ssh-keygen -t rsa -C "humster@foxmail.com"`
  2. 进入 https://github.com/settings/keys 添加key
  3. `ssh -T git@github.com`  //测试链接成功
## 关联git
  1. `git init`
  2. `git add README.md`
  3. `git commit -m "first commit"`
  4. `git remote add origin git@github.com:ldoll/ldollTop.git`
  5. `git push -u origin master`