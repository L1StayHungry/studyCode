function loadImg(src){
    const p = new Promise((res,rej) =>{
        const img = document.createElement('img')
        img.onload = ()=>{
            res(img)
        }
        img.onerror = ()=>{
            const err = new Error(`图片加载失败${src}`)
            rej(err)
        }
        img.src = src
    })
    return p
}

const url='https://dgss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/res/r/image/2017-09-26/352f1d243122cf52462a2e6cdcb5ed6d.png'
    loadImg(url).then(img =>{
      console.log(img.width);
      return img
    }).then(img=>{
      console.log(img.height)
    }).catch(ex=>console.error(ex))