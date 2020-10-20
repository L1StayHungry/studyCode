class jQuery{
    constructor(selector){
        const result = document.querySelectorAll(selector)
        const length = result.length
        for(let i=0;i<this.length;i++){
            this[i] = result[i]
        }
        this.length=length
        this.selector=selector
    }

    get(index){
        return this[index]
    }

    each(fn){
        for(let i=0;i<this.length;i++){
            const elem=this[i]
            fn(elem)
        }
    }

    on(type,fn){
        return rhis.each(elem=>{
            elem.addEventListener(type,fn,false)
        })
    }
}

// <!DOCTYPE html>
// <html>
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Demo</title>
// </head>
// <body>
//     <p>李华军加油</p>
//     <p>李华军加油</p>
//     <p>李华军加油</p>
//     <!-- <a href="http://www.baidu.com">baidu</a> -->
//     <!-- <script src="./deepClone.js"></script> -->
//     <script src="./jquery_demo.js"></script>

// </body>
// </html>