var rule = {
    title:'种子音乐',
    host:'https://www.zz123.com',
    homeUrl:'/list/mszm.htm?page=1',
    url:'/list/fyclass.htm?page=fypage',
    searchable:2,
    quickSearch:0,
    headers:{
        'User-Agent':'MOBILE_UA',
        'referer' : 'https://www.zz123.com/',
    },
    class_parse: '.taglist li;.tagitem&&data-name;.tagitem&&data-id',
    play_parse:true,
    // lazy:"js:input=input.replace(/play\\/(\\w+)\\.htm/,'ajax/?act=songinfo&id=$1&lang=');log(input);let mp3 = JSON.parse(request(input)).data.mp3;input={jx:0,url:mp3,parse:1,header:JSON.stringify({Referer:'https://www.zz123.com/'})}",
    lazy:"js:input=input.replace(/play\\/(\\w+)\\.htm/,'ajax/?act=songinfo&id=$1&lang=').replace('www.','');log(input);let mp3=JSON.parse(request(input)).data.mp3;input={jx:0,url:'https://zz123.com'+mp3,parse:1,header:JSON.stringify({Referer:'https://www.zz123.com/'})}",
    limit:6,
    图片来源:'@Referer=https://www.zz123.com/',
    推荐:"*",
    一级:'.mobile-list&&.mobile-list-item;.songname&&Text;.lazyload&&data-src;.authorname&&Text;a&&href',
    二级:'*',
    // searchUrl:'/search/?key=**&page=fypage',
    // 搜索:'*',
    searchUrl:'/ajax/?act=search&key=**&lang=',
    detailUrl:'/play/fyid.html',
     搜索:'.v-list-body&&.v_item;*;*;*;*',
}