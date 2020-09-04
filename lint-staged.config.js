/*
 * @Author: Jiangtao
 * @Date: 2020-03-10 14:28:38
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-10 14:28:38
 */
module.exports = {
    linters: {
        '*.{ts,tsx}': ['eslint --fix', 'git add'],
        '*.{js,jsx}': ['eslint --fix', 'git add'],
        '*.{md,html,json}': ['prettier --write', 'git add'],
        '*.{css,scss,less}': ['prettier --write', 'git add'],
    },
};