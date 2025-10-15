

console_log=console.log;
function watch(func,name){

    return new Proxy(func,{
        get(target,p,receiver){
            try{if(p==='Math'||p==='isNaN'){
                let val=Reflect.get(...arguments)
                return val
            }else{
                if(p=='hasOwnProperty'){
                    // debugger
                }
                let val=Reflect.get(...arguments)


                console_log('取值:',`${name}.${p}`,'=>',val)
                return val
            }}catch(e){

            }

        },
        set(target,p,value,receiver){
            let val=Reflect.get(...arguments)
            console_log('设置值:',`${name}.${p}`,val,'=>',value)
            return Reflect.set(...arguments)
        }
        // ownKeys(target){
        //     debugger
        // //   if (name=='window'){debugger}
        //     let val=Reflect.ownKeys(...arguments)
        //     console_log('ownKeys:',`${name}`)
        //     return val
        // }
        // has(target,key){


        //     console_log('in检测:',`${target}.${key}`)
        //     debugger
        //     return key in target
        // }
    })
}


//webgl需要创建出来，先getExtension('WEBGL_debug_renderer_info')，然后在getParameter(37446)
//描述符检测
Object.getOwnPropertyDescriptor_=Object.getOwnPropertyDescriptor
Object.getOwnPropertyDescriptor=function(ele,arg){
    // debugger
    var val=Object.getOwnPropertyDescriptor_(ele,arg)

    return val
}
//函数toString检测
const originalToString = Function.prototype.toString;

// 重写 Object.prototype.toString 方法
Function.prototype.toString = function() {
    console_log('toString called on:', this);
//   debugger
    // 调用原始的 toString 方法
    return originalToString.call(this);
};
Object.defineProperty(global, Symbol.toStringTag, {
    value: 'Window',
    writable: false,
    enumerable: false,
    configurable: true
});
Window=function(){
    return global
}

Window.toString=function(){return 'function Window() { [native code] }'}

window =  new Window()
window.toString=function(){return '[object Window]'}
window=watch(window,'window')
delete global
delete setImmediate
delete __dirname
delete __filename
delete clearImmediate
process_=process
delete process
ActiveXObject = undefined
delete Buffer

// 1.window
//////////////////////////////////////////////////////////////
Document=function(){}
HTMLAllCollection=function(){}
HTMLAllCollection.prototype=watch({},'HTMLAllCollection.prototype')
Document.prototype={}

HTMLDocument=function(){}
HTMLDocument.prototype=watch({},'HTMLDocument.prototype')
Object.setPrototypeOf(HTMLDocument.prototype,Document.prototype)
document=new HTMLDocument()
document.toString=function(){return '[object HTMLDocument]'}
document=watch(document,'document')
// 2.document
////////////////////////////////////////////////
History=function(){}
History.prototype={}
History.toString=function(){return 'function History() { [native code] }'},
// timeout_index=10
// setTimeout = function (fun, time) {
//     // debugger

//     timeout_index += 1
//     return timeout_index
// }
    history=new History()
history.toString=function(){return '[object History]'},
    history=watch(history,'history')
// 3.history
/////////////////////////////////////////////////////
Screen=function(){}
Screen.prototype={
    availHeight: 816,
    availLeft: 0,
    availTop: 0,
    availWidth: 1536,
    colorDepth: 24,
    height: 864,
    isExtended: false,
    onchange: null,
    pixelDepth: 24,
    width: 1536
}
Screen.toString=function(){return 'function Screen() { [native code] }'},

    screen=new Screen()
screen.toString=function(){return '[object Screen]'},
    screen=watch(screen,'screen')
// 4.screen
/////////////////////////////////////////////////////////
Navigator=function(){}
Navigator.prototype={}
Navigator.toString=function(){return 'function Navigator() { [native code] }'},

    navigator=new Navigator()
navigator.toString=function(){return '[object Navigator]'},
    navigator=watch(navigator,'navigator')
// 5.navigator
//////////////////////////////////////////////////////////////
Performance = function () { }
Performance.prototype=watch({},'Performance.prototype')
performance = watch(new Performance, 'performance')
Location=function(){}
Location.prototype = {}
Location.toString=function(){return 'function Location() { [native code] }'},

    location=new Location()
// 每个网站不一样
location.toString=function(){
    debugger
    return ''},
    location=watch(location,'location')
// 6.location
//////////////////////////////////////////////////////////////
Storage=function(){}
Storage.prototype={}

Storage.toString=function(){return 'function Storage() { [native code] }'},
    Object.defineProperty(Storage.prototype,'getItem',{
        value:function(ele){
            return this[ele]
        }
    })
Object.defineProperty(Storage.prototype,'setItem',{
    value:function(ele,val){
        this[ele]=val
    }
})
Object.defineProperty(Storage.prototype,'removeItem',{
    value:function(ele){
        delete this[ele]
    }
})

localStorage=new Storage()
localStorage.toString=function(){return '[object Storage]'}
sessionStorage=new Storage()
sessionStorage.toString=function(){return '[object Storage]'}
sessionStorage=watch(sessionStorage,'sessionStorage')
localStorage=watch(localStorage,'localStorage')
top = self =window
