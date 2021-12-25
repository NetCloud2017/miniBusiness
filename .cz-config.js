"use strict"
// 图片去 https://gitmoji.dev/ 复制过来；
module.exports = {
     types: [
        {
            value: '新功能',
            name: '✨ 新功能: 添加了一个新功能'
        }, 
        {
            value: '修复问题',
            name: '🐛 修复问题: 修复紧急问题'
        },
        {
            value: '代码重构',
            name: '🔧 代码重构: 出于一个优秀的程序员的自我修养， 我觉得优化了这里， 优化范围是'
        },
        {
            value: '代码格式化',
            name: '🧱 代码格式化: 格式化代码'
        },
        {
            value: '文档',
            name: ' 📝文档: 文档编写， 文案修改'
        }, 
        {
            value: '删除',
            name: '🔥 删除: 删除无用文件、 删除冗余代码。'
        },

        {
            value: '测试',
            name: '🩺 测试: 编写测试相关的工作'
        },
        {
            value: '杂项',
            name: '💬 杂项:  更改了 package.json / .gitignore / .editorconfig / babalrc 等文件'
        },
         
    ],
    scopes: [],
    allowCustomScopes: true,
    allowBreakingChanges: ['新功能', '修复问题']
}