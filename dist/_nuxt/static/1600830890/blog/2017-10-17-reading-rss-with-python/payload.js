__NUXT_JSONP__("/blog/2017-10-17-reading-rss-with-python", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H){return {data:[{article:{layout:"post",title:"Reading RSS with Python",date:"2017-10-17T00:00:00.000Z",comments:true,image:"\u002Fstatic\u002Fpython_rss.png",toc:[],body:{type:"root",children:[{type:b,tag:k,props:{},children:[{type:a,value:"On my other personal website, "},{type:b,tag:m,props:{href:w},children:[{type:a,value:w}]},{type:a,value:", I have a blog. The content on that blog has mostly mirrored what I put on this github pages site, "},{type:b,tag:m,props:{href:x},children:[{type:a,value:x}]},{type:a,value:". I want to display my most recent blog posts from briancaffey.github.io on briancaffey.com, and to do this I will be using the RSS feed that comes with a Jekyll site. This should be pretty simple, we are going to use the "},{type:b,tag:g,props:{},children:[{type:a,value:"requests"}]},{type:a,value:" librrary, as well as the "},{type:b,tag:g,props:{},children:[{type:a,value:y}]},{type:a,value:" library."}]},{type:a,value:h},{type:b,tag:k,props:{},children:[{type:a,value:"Here are some "},{type:b,tag:m,props:{href:"https:\u002F\u002Fwiki.python.org\u002Fmoin\u002FRssLibraries",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"docs"}]},{type:a,value:" on how to use "},{type:b,tag:g,props:{},children:[{type:a,value:y}]},{type:a,value:", it is very simple."}]},{type:a,value:h},{type:b,tag:k,props:{},children:[{type:a,value:"First, install it with:"}]},{type:a,value:h},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,z]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"pip install feedparser\n"}]}]}]},{type:a,value:h},{type:b,tag:k,props:{},children:[{type:a,value:"Here's the setup that I will be using in utility a function that will be imported to "},{type:b,tag:g,props:{},children:[{type:a,value:A}]},{type:a,value:" and called in the "},{type:b,tag:g,props:{},children:[{type:a,value:"home()"}]},{type:a,value:" function that renders the homepage for briancaffey.com:"}]},{type:a,value:h},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,"language-text"]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"import feedparser\n\ndef get_blog_posts(number_of_posts):\n    url = \"http:\u002F\u002Fbriancaffey.github.io\u002Ffeed\"\n    feed = feedparser.parse(url)\n    posts = feed['items'][:number_of_posts]\n    return posts\n    \n"}]}]}]},{type:a,value:h},{type:b,tag:k,props:{},children:[{type:a,value:"Next, in "},{type:b,tag:g,props:{},children:[{type:a,value:A}]},{type:a,value:", we just need to import the function, call it with the number of articles we want to show, save the returned value to a variable and then pass that to "},{type:b,tag:g,props:{},children:[{type:a,value:"context"}]},{type:a,value:": "}]},{type:a,value:h},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,z]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"from"}]},{type:a,value:" utils "},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"import"}]},{type:a,value:" get_blog_posts\n"},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"def"}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,"function"]},children:[{type:a,value:"home"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"\n    posts "},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:F}]},{type:a,value:" get_blog_posts"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"4"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:"\n\n    context "},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:F}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"{"}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:"'recent_posts'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:" posts"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"}"}]},{type:a,value:"\n    \n    "},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"return"}]},{type:a,value:" render"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:"'home.html'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:" context"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:k,props:{},children:[{type:a,value:"In the context, we can access the following data for each item: "}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:"table",props:{},children:[{type:b,tag:"thead",props:{},children:[{type:b,tag:j,props:{},children:[{type:b,tag:H,props:{},children:[{type:a,value:"content"}]},{type:b,tag:H,props:{},children:[{type:a,value:"description"}]}]}]},{type:b,tag:"tbody",props:{},children:[{type:b,tag:j,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"item[ \"date\" ]"}]},{type:b,tag:f,props:{},children:[{type:a,value:"\"2004-02-13T22:28:23+08:00\" - ISO 8601 date"}]}]},{type:b,tag:j,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"item[ \"date_parsed\" ]"}]},{type:b,tag:f,props:{},children:[{type:a,value:"(2004,02,13,14,28,23,4,44,0)"}]}]},{type:b,tag:j,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"item[ \"title\" ]"}]},{type:b,tag:f,props:{},children:[{type:a,value:"title for item"}]}]},{type:b,tag:j,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"item[ \"summary\" ]"}]},{type:b,tag:f,props:{},children:[{type:a,value:"change summary"}]}]},{type:b,tag:j,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"item[ \"link\" ]"}]},{type:b,tag:f,props:{},children:[{type:a,value:"URL to the page"}]}]},{type:b,tag:j,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"item[ \"wiki_diff\" ]"}]},{type:b,tag:f,props:{},children:[{type:a,value:"for wiki, a link to the diff for the page"}]}]},{type:b,tag:j,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"item[ \"wiki_history\" ]"}]},{type:b,tag:f,props:{},children:[{type:a,value:"for wiki, a link to the page history"}]}]}]}]},{type:a,value:h},{type:b,tag:k,props:{},children:[{type:a,value:"That's it! "}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002F2017-10-17-reading-rss-with-python",extension:".md",slug:"2017-10-17-reading-rss-with-python",createdAt:"1970-01-01T00:00:00.000Z",updatedAt:"2020-09-17T04:34:09.783Z",raw:"\nOn my other personal website, [briancaffey.com](briancaffey.com), I have a blog. The content on that blog has mostly mirrored what I put on this github pages site, [briancaffey.github.io](briancaffey.github.io). I want to display my most recent blog posts from briancaffey.github.io on briancaffey.com, and to do this I will be using the RSS feed that comes with a Jekyll site. This should be pretty simple, we are going to use the `requests` librrary, as well as the `feedparser` library.\n\nHere are some [docs](https:\u002F\u002Fwiki.python.org\u002Fmoin\u002FRssLibraries) on how to use `feedparser`, it is very simple.\n\nFirst, install it with:\n\n```python\npip install feedparser\n```\n\nHere's the setup that I will be using in utility a function that will be imported to `views.py` and called in the `home()` function that renders the homepage for briancaffey.com:\n\n```\nimport feedparser\n\ndef get_blog_posts(number_of_posts):\n    url = \"http:\u002F\u002Fbriancaffey.github.io\u002Ffeed\"\n    feed = feedparser.parse(url)\n    posts = feed['items'][:number_of_posts]\n    return posts\n    \n```\n\nNext, in `views.py`, we just need to import the function, call it with the number of articles we want to show, save the returned value to a variable and then pass that to `context`: \n\n```python \nfrom utils import get_blog_posts\ndef home(request):\n    ...\n    posts = get_blog_posts(4)\n\n    context = {\n        ...\n        'recent_posts': posts,\n        ...\n    }\n    \n    return render(request, 'home.html', context)\n```\n\nIn the context, we can access the following data for each item: \n\n| content | description |\n|-----|------|\n|item[ \"date\" ] | \"2004-02-13T22:28:23+08:00\" - ISO 8601 date |\n|item[ \"date_parsed\" ] | (2004,02,13,14,28,23,4,44,0) |\n|item[ \"title\" ] | title for item |\n|item[ \"summary\" ] | change summary |\n|item[ \"link\" ] | URL to the page |\n|item[ \"wiki_diff\" ] | for wiki, a link to the diff for the page |\n|item[ \"wiki_history\" ] | for wiki, a link to the page history |\n\nThat's it! "}}],fetch:[],mutations:void 0}}("text","element","span","token","punctuation","td","code","\n",".","tr","p","keyword","a","div","nuxt-content-highlight","pre","line-numbers"," ","(",")","\n        ",",","briancaffey.com","briancaffey.github.io","feedparser","language-python","views.py","request",":","\n    ","operator","=","string","th")));