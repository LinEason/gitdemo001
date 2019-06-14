
const path = require('path');
const webpack = require('webpack');


module.exports = {
    mode:'development',
    entry : {
        main: './main.js',
        layout : './src/js/layout.js'
    },
    output:{
        filename: 'bundle.js'
    },
    devServer:{
        contentBase:'./src/',
        host : 'localhost',
        port: 3000,
        inline : true,
        hot : true
    },
    module:{
        rules:[
            {test:/\.css$/i,use:['style-loader','css-loader']}
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin({})
    ]

}



