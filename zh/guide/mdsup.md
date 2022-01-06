---
title: Markdown 增强
author: viken
time: 2022.1.4
---

>markdown 增加样式格式. 


## 新增的更多语法

### 上下角标

19^th^ H~2~O

::: details 查看源码

```md
19^th^ H~2~O
```

:::

### 自定义对齐

::: center

我是居中的

:::

::: right

我在右对齐

:::

:::: details 查看源码

```md
::: center

我是居中的

:::

::: right

我在右对齐

:::
```

::::

### 脚注

此文字有脚注[^first].

[^first]: 这是脚注内容

::: details 查看源码

```md
此文字有脚注[^first].

[^first]: 这是脚注内容
```

:::

### 标记

你可以标记 ==重要的内容== 。

::: details 查看源码

```md
你可以标记 ==重要的内容== 。
```

:::

### 任务列表

- [x] 计划 1
- [ ] 计划 2

::: details Code

```md
- [x] 计划 1
- [ ] 计划 2
```

:::

### 流程图

```flow
cond=>condition: Process?
process=>operation: Process
e=>end: End

cond(yes)->process->e
cond(no)->e
```

::: details 查看源码

````md
```flow
cond=>condition: Process?
process=>operation: Process
e=>end: End

cond(yes)->process->e
cond(no)->e
```
````

:::


### Tex 语法

$$
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}
$$

::: details 查看源码

```md
$$
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}
$$
```

:::

### 代码案例

::: demo 一个普通 Demo

```html
<h1>viken</h1>
<p><span id="very">代码</span> 案例</p>
```

```js
document.querySelector("#very").addEventListener("click", () => {
  alert("代码案例");
});
```

```css
span {
  color: red;
}
```

:::

:::: details 查看源码

````md
::: demo 一个普通 Demo

```html
<h1>viken</h1>
<p><span id="very">代码</span> 案例</p>
```

```js
document.querySelector("#very").addEventListener("click", () => {
  alert("代码案例");
});
```

```css
span {
  color: red;
}
```

:::
````

::::

::: demo [react] 一个 React Demo

```js
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "代码案例" };
  }
  render() {
    return (
      <div className="box-react">
        viken <span>{this.state.message}</span>
      </div>
    );
  }
}
```

```css
.box-react span {
  color: red;
}
```

:::

:::: details 查看源码

````md
::: demo [react] 一个 React Demo

```js
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "代码案例" };
  }
  render() {
    return (
      <div className="box-react">
        viken <span>{this.state.message}</span>
      </div>
    );
  }
}
```

```css
.box-react span {
  color: red;
}
```

:::
````

::::

::: demo [vue] 一个 Vue Demo

```vue
<template>
  <div class="box">
    viken <span>{{ message }}</span>
  </div>
</template>
<script>
export default {
  data: () => ({ message: "代码案例" }),
};
</script>
<style>
.box span {
  color: red;
}
</style>
```

:::

:::: details 查看源码

````md
::: demo [vue] 一个 Vue Demo

```vue
<template>
  <div class="box">
    viken <span>{{ message }}</span>
  </div>
</template>
<script>
export default {
  data: () => ({ message: "代码案例" }),
};
</script>
<style>
.box span {
  color: red;
}
</style>
```

:::
````

::::

::: demo 一个普通 Demo

```md
# 标题

代码案例
```

```ts
const message: string = "viken";

document.querySelector("h1").innerHTML = message;
```

```scss
h1 {
  font-style: italic;

  + p {
    color: red;
  }
}
```

:::

:::: details 查看源码

````md
::: demo 一个普通 Demo

```md
# 标题

代码案例
```

```ts
const message: string = "viken";

document.querySelector("h1").innerHTML = message;
```

```scss
h1 {
  font-style: italic;

  + p {
    color: red;
  }
}
```

:::
````

::::


## 其他语法

::: info 自定义标题

信息容器

:::

::: tip 自定义标题

提示容器

:::

::: warning 自定义标题

警告容器

:::

:::: danger 自定义标题

容器可以嵌套使用

::: center
嵌套居中容器。
:::

::: right
右对齐[打开Github](https://github.com)。
:::

::::


::::: details 查看源码

```md
::: info 自定义标题

信息容器

:::

::: tip 自定义标题

提示容器

:::

::: warning 自定义标题

警告容器

:::

:::: danger 自定义标题

容器可以嵌套使用

::: center
嵌套居中容器。
:::

::: right
右对齐[打开Github](https://github.com)。
:::

::::

```

:::::
