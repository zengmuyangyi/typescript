// 引入一个包
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        clean: true, // 在生成文件之前清空 output 目录
        // 告诉webpack不使用箭头
        environment: {
            arrowFunction: false,
            const: false
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            // 设置预定义环境
                            presets:[
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    {
                                        // 要见人的目标浏览器
                                        targets: {
                                            "ie": "11"
                                        },
                                        // 指定corejs的方式
                                        "corejs": "3",
                                        // 使用corejs的方式“usage” 表示按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    "ts-loader"
                ],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: 'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html')
        })
    ],
    // 设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}