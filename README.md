# 前言

TypeScript是JavaScript的超集...  
可选的静态的类型系统  
使用@type/node支持node环境  
使用ts-node编译并运行  
带有类型推导！！！ (记住这个东西)  
有这个东西有很多约束都不需要写，ts有自动推导。

# 基本类型

- `number` 
- `string` 
- `boolean` 
- `object ` 
- `number[]` ==>语法糖   `Array<number>`
    必须要对数组内的每一项进行约束
- `null & undefined`   
  是其他类型的子类型，可以赋值给其他类型
  可以通过配置`strictNullChecks:true`来开启严格检查，这样只能赋值给自身。

  # 其他类型

- 联合类型 （一个变量可能有多个类型）   
`number | string`

- void类型  （一般约束函数返回值，表示无返回）
- never     (一般约束函数返回值，表示永远不会结束）
- 字面量类型  (只能取字面量的值)  
    `let gender = '男' | '女';`    
    `let arr:[]`  (此时只能取空数组)
- 元祖类型(Tuple)   (固定长度数组且每项类型确定)  
    `let arr = [string,number];`
- any类型
   
# 函数约束

- 函数重载
```js
function add(a:number|string,b:number|string):number|string{
    ...
}
```
以上代码如果我们只想要ab都为number或者string该如何做  
因为以上有四种组合，只判断两种情况，ts无法进行推导类型  

所以有了函数重载，对两种组合进行重载约束
```js
function add(a:number,b:number):number;
function add(a:string,b:string):string;
```

- 可选参数
```js
function add(a:number,b:number,c?:number){
    ...
}
```
这里`c?:number`其实就是`number|undefined`的语法糖  
当然，可以用es6的默认值，ts会推导出可选参数

# 扩展类型

## 类型别名
type 类型名 = xxx;
## 枚举

```
enum 名称{
    key = value
    ...
}
```
枚举会出现在编译结果中，表现为对象  
枚举类型为数字时，会自动自增

## 接口
```
interface 名称{

}
```
## 类