# 前端进阶手册

扫码体验：

<img src="https://cdn.jsdelivr.net/gh/claude-hub/WeChatApplets@main/images/%E5%B0%8F%E7%A8%8B%E5%BA%8F.jpeg" alt="小程序二维码" width="150" height="150" align="left" />


## 1. commitizen：git cz替代git commit

[commitizen/cz-cli](https://github.com/commitizen/cz-cli), 我们需要借助它提供的 git cz 命令替代我们的 git commit 命令, 帮助我们生成符合规范的 commit message。

```
yarn add --dev commitizen cz-conventional-changelog
```

package.json中配置

```javascript
"script": {
    "commit": "git-cz",
},
 "config": {
    "commitizen": {
      "path": "node_modules/cz-conventional-changelog"
    }
  }

```

## 2. commitlint：直接校验commit message

[commitlint](https://github.com/conventional-changelog/commitlint) 可以帮助我们 lint commit messages, 校验的配置推荐。

```
yarn add --dev @commitlint/config-conventional @commitlint/cli
```

项目目录下创建配置文件 .commitlintrc.js, 写入:

```javascript
module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {}
}

```

#### 结合 Husky@4.3.8

```javascript
yarn add --dev husky@4.3.8
```
package.json中配置
```javascript
"husky": {
    "hooks": {
      "commit-msg": "commitlint -e $HUSKY_GIT_PARAMS"
    }
}
```


## 规则

| 规范名   | 描述                                                     |
| -------- | ------------------------------------------------------- |
| docs     | 仅仅修改了文档，比如 README, CHANGELOG, CONTRIBUTE 等等   |
| chore    | 改变构建流程、或者增加依赖库、工具等                       |
| feat     | 新增 feature                                            |
| fix      | 修复 bug                                                |
| merge    | 合并分之                                                |
| perf     | 优化相关，比如提升性能、体验                              |
| refactor | 代码重构，没有加新功能或者修复 bug                        |
| revert   | 回滚到上一个版本                                         |
| style    | 仅仅修改了空格、格式缩进、都好等等，不改变代码逻辑          |
| test     | 测试用例，包括单元测试、集成测试等                         |