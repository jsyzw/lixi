##  ES6新增特性
    
[let、const](#let、const)
[箭头函数](#箭头函数arrow-function)
[模板字符串](#模板字符串)
[Set、Map](#set、map)
[class类](#class类)
[第七种数据类型Symbol](#第七种数据类型symbol)
[import 和 export](#import-和-export)
[数组](#数组)

### let、const

  <font color=green size=2>如果区块中存在 let 和 const 命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错，使用 let 命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。</font>
  + const 命令用来声明一个只读的常量（除了引用类型，一旦声明该常量的值就不能改变）
  + const 并非变量的值不能改，而是变量指向的那个内存地址所保存的数据不能改动。
  
对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。
  
但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const 只能保证这个指针是固定的，至于它指向的数据结构是不是可变的，就完全不能控制了。

### [↑](#es6新增特性)


### 箭头函数(Arrow Function)

__基础语法__

##### 1. 将原函数的“function”关键字和函数名都删掉，并使用“=>”连接参数列表和函数体。

```
  // 普通函数
  var fn1 = function(a, b){
    return a + b
  }

  function fn1(a, b){
    return a + b
  }

```
##### 2. 当函数参数只有一个，括号可以省略；但是没有参数时，括号不可以省略。

```
  // 无参
  var fn1 = function() {}
  var fn1 = () => {}

  // 单个参数
  var fn2 = function(a) {}
  var fn2 = a => {}

  // 多个参数
  var fn3 = function(a, b) {}
  var fn3 = (a, b) => {}
```
##### 3. 箭头函数相当于匿名函数，并且简化了函数定义。箭头函数有两种格式，一种只包含一个表达式，省略掉了{ ... }和return。还有一种可以包含多条语句，这时候就不能省略{ ... }和return。

```
  () => return 'hello'
  (a, b) => a + b
     
  (a) => {
    var c = 3
    a = a + c
    return a
  }
```
##### 4. 箭头函数返回对象时，要加一个小括号。

```
  var func = () => ({ foo: 1 }) //正确
  var func = () => { foo: 1 } //错误
```

__基本特点__

<table><tr><td bgcolor=#D1EEEE><font color=green size=2>1. 箭头函数this为父作用域的this，不是调用时的this，并且箭头函数的this永远指向其父作用域，任何方法都改变不了，包括call，apply，bind。<font></td></tr><tr><td bgcolor=#D1EEEE ><font color=green size=2>2. 箭头函数不能作为构造函数，不能使用new。<font></td></tr><tr><td bgcolor=#D1EEEE><font color=green size=2>3. 箭头函数通过call和apply调用，不会改变this指向，只会传入参数。<font></td></tr><tr><td bgcolor=#D1EEEE><font color=green size=2>4. 箭头函数没有原型属性。<font></td></tr></table>

### [↑](#es6新增特性)

  
###  模板字符串

<table><tr><td bgcolor=#D1EEEE><font color=green size=2>用 `（反引号：windows键盘英文输入法下tab键上面那个键）标识，${}渲染变量。</font></td></tr></table>

```
  var name = '小明',age = 12;
  // es5
  console.log(name + '今年' + age + '岁了') // 小明今年12岁了
  // es6
  console.log(`${name}今年${age}岁了`) // 小明今年12岁了
```

### [↑](#es6新增特性)
  

###  Set、Map

### [↑](#es6新增特性)

  
###  class类

### [↑](#es6新增特性)
  

###  第七种数据类型Symbol

### [↑](#es6新增特性)
  

###  import 和 export

### [↑](#es6新增特性)

  
###  数组
   
__forEach()__
  <table><tr><td bgcolor=#D1EEEE><font color=green size=2>数组的遍历方法，无返回值，不改变原数组。<font></td></tr></table>

__map()__ 
  <table><tr><td bgcolor=#D1EEEE><font color=green size=2>map遍历数组，返回一个新数组，不改变原数组的值。</font></td></tr></table>

__filter()__
  <table><tr><td bgcolor=#D1EEEE><font color=green size=2>filter过滤掉数组中不满足条件的值，返回一个新数组，不改变原数组。</font></td></tr></table>

__some()__
  <table><tr><td bgcolor=#D1EEEE><font color=green size=2>遍历数组每一项，有一项返回true，则停止遍历，结果返回true，不改变原数组。</font></td></tr></table>

__every()__
  <table><tr><td bgcolor=#D1EEEE><font color=green size=2>遍历数组每一项，每一项返回true，则最终结果为true。当任何一项返回false时，停止遍历，返回false。不改变原数组。</font></td></tr></table>

__reduce()__
  <table><tr><td bgcolor=#D1EEEE><font color=green size=2>reducer第二个参数可以设置默认值，遍历数据求和。</font></td></tr></table>

### [↑](#es6新增特性)
<style>
  table td {
  	width: 2000px;
    color: green;
    font-size: 12px;
    background: #D1EEEE;
  }
</style>
