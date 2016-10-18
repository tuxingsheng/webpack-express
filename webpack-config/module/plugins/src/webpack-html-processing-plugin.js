'use strict';

/*
 * 自定义插件
 * */
function HtmlBeforeProcessing(options) {
    // do something...
}

HtmlBeforeProcessing.prototype.apply = function (compiler) {
    compiler.plugin('compilation', function (compilation) {
        compilation.plugin('html-webpack-plugin-before-html-processing', function (htmlPluginData, callback) {
            //console.log(htmlPluginData);
            htmlPluginData.html = htmlPluginData.html.replace(`<browser-sync></browser-sync>`,
                ( process.env.NODE_ENV == 'develop' ) ? ``
                    :
                    `<% if(env == 'develop'){ %>
                    <!-- node develop browser reload -->
                    <script type="text/javascript" src="<%= staticMap.browser %>browser-sync/browser-sync-client.js"></script>
                    <!-- node develop browser reload -->
                <% } %>
            `);
            callback(null, htmlPluginData);
        });
    });
};

module.exports = new HtmlBeforeProcessing();
