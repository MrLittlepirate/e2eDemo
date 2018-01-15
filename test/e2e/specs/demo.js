// module.exports = {
//     'Find the answer.': function (client) {
//         // 定义 Bing 页面中的节点
//         const searchInput = '#sb_form_q'
//         const searchBtn = '#sb_form_go'
//         const question = 'what is microsoft'

//         // 启动浏览器并打开 bing.com
//         client.url('http://bing.com').maximizeWindow()

//         // 确保 “body” 和输入框可以使用
//         client.expect.element('body').to.be.present
//         client.expect.element(searchBtn).to.be.visible
//         client.pause(2000)   // 等待两秒

//         // 输入“what is microsoft” 然后搜索
//         client.setValue(searchInput, question)
//         client.click(searchBtn)
//         client.pause(2000)

//         // 截一张图然后保存到“reports/answer.png”
//         client.expect.element('body').to.be.present
//         client.saveScreenshot('reports/answers.png')
//         client.end()
//     }
// }

module.exports = {
    'test demo.js': function (browser) {
        const devServer = browser.globals.devServerURL

        browser
            .url(devServer)
 
            // 测试代码-start
            .url('http://www.baidu.com')   // 打开地址
            .waitForElementVisible('body', 1000) // 等待界面显示
            .assert.title('百度一下，你就知道') // 断言title为baidu
            .assert.visible('input[id=kw]') // 断言输入框显示
            .setValue('input[id=kw]', 'rembrandt van rijn')  // 设置输入框的值
            .waitForElementVisible('input[type=submit]', 1000) // 等待按钮显示
            .click('input[type=submit]')  // 点击按钮
            .pause(1000) // 暂停等待请求
            .assert.containsText('h3', '伦勃朗·哈尔曼松·凡·莱因_百度百科') // 断言包含字符串
            //测试代码-end

            .end()
    }
}
