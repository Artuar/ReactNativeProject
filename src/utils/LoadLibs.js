function loadLibs (libs,path,callback) {
    if(libs.length > 0){
        let lib = libs.shift();
        loadLib(path+lib,function(){
            loadLibs(libs,path,callback);
        });
    } else {
        setTimeout(callback,5);
    }
}

function loadLib(src,cb){
    let tag = document.createElement('script');
    tag.onload = function(){setTimeout(cb,5)};
    tag.setAttribute("src",src);
    tag.setAttribute("type","text/javascript");
    document.body.appendChild(tag);
}