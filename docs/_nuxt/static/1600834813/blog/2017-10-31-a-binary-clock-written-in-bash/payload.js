__NUXT_JSONP__("/blog/2017-10-31-a-binary-clock-written-in-bash", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc,bd,be,bf,bg,bh,bi){return {data:[{article:{layout:"post",title:"A binary clock written in bash",date:"2017-10-31T00:00:00.000Z",comments:true,image:aq,toc:[],body:{type:"root",children:[{type:b,tag:n,props:{},children:[{type:b,tag:aJ,props:{alt:aK,src:aq},children:[]}]},{type:a,value:i},{type:b,tag:n,props:{},children:[{type:a,value:"Configuring the i3 window manager on my laptop has got me interested in learning more about bash scripting. As an exercise for getting more familiar with bash, I set out to write a simple "},{type:b,tag:ar,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FBinary_clock",rel:[as,at,au],target:av},children:[{type:a,value:"binary clock"}]},{type:a,value:" application that runs in the terminal."}]},{type:a,value:i},{type:b,tag:n,props:{},children:[{type:a,value:"To simplifiy my clock, I decided to display Unix time as a binary number with ones and zeros represented as the unicode symbols ● and ○, respectively. "},{type:b,tag:ar,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FUnix_time",rel:[as,at,au],target:av},children:[{type:a,value:"Unix time"}]},{type:a,value:" is the number of second that have passed since January 1, 1970. Here's what I had in mind when I started out:"}]},{type:a,value:i},{type:b,tag:D,props:{className:[E]},children:[{type:b,tag:F,props:{className:[G,"language-text"]},children:[{type:b,tag:j,props:{},children:[{type:a,value:" ○ ○ ● ● ○\n ○ ● ● ● ●\n ○ ● ● ○ ●\n ● ● ○ ● ○\n ● ○ ○ ● ●\n ● ● ○ ● ○\n"}]}]}]},{type:a,value:i},{type:b,tag:n,props:{},children:[{type:a,value:"In this representation, the lower right cell represents the one's place, the next cell to the left represents the two's place, the next over the four's place, the next the eight's, and so on."}]},{type:a,value:i},{type:b,tag:n,props:{},children:[{type:a,value:"Here's the code that I ended up using for my clock program:"}]},{type:a,value:i},{type:b,tag:D,props:{className:[E]},children:[{type:b,tag:F,props:{className:[G,L]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,"shebang","important"]},children:[{type:a,value:"#!\u002Fbin\u002Fbash"}]},{type:a,value:"\nresize -s "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"8"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"19"}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,aL,l]},children:[{type:a,value:aw}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:X}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:Y}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"ibase=10; obase=2; "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"$1"}]},{type:a,value:M}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"bc"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,aL,l]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:o}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:X}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,B,f]},children:[{type:a,value:"binstring"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:"decToBin "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:u}]},{type:a,value:"date "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'+%s'"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]}]},{type:a,value:"\n\n  "},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:_}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,ay,f]},children:[{type:a,value:az}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aA}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"31"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:$}]},{type:a,value:"-5"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Z}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aa}]},{type:a,value:aM},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:Y}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"$binstring"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aB}]},{type:a,value:aN},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"$i"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:N}]},{type:a,value:aN},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"5"}]},{type:a,value:aM},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:S}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:M},{type:b,tag:c,props:{className:[d,C],title:P},children:[{type:a,value:P}]},{type:a,value:M}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ab}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Z}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:S}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:y},{type:b,tag:c,props:{className:[d,C],title:aO},children:[{type:a,value:aO}]},{type:a,value:"[?25l'"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"clear"}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aP}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,"boolean"]},children:[{type:a,value:"true"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aa}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:S}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:y},{type:b,tag:c,props:{className:[d,C],title:aQ},children:[{type:a,value:aQ}]},{type:a,value:"[;H'"}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,B,f]},children:[{type:a,value:aR}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ac}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Q}]},{type:a,value:aS},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:o}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ad}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ae}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aT}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:v}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,B,f]},children:[{type:a,value:aU}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ah}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:J}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ai}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:T}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:J}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:_}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,ay,f]},children:[{type:a,value:az}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aA}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aV}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aC}]},{type:a,value:aW},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aj}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aa}]},{type:a,value:aX},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:S}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:M},{type:b,tag:c,props:{className:[d,C],title:P},children:[{type:a,value:P}]},{type:a,value:M}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ab}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,B,f]},children:[{type:a,value:aY}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ac}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Q}]},{type:a,value:aZ},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:o}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ad}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ae}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:a_}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:v}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,B,f]},children:[{type:a,value:a$}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ah}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:J}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ai}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:T}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:J}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:Y}]},{type:a,value:ba},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:w}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:bb},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]}]},{type:a,value:bc}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:a,value:am},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:w}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:bd},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]}]},{type:a,value:be}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:a,value:am},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:w}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aD},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:N}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ao}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:U}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:y},{type:b,tag:c,props:{className:[d,C],title:K},children:[{type:a,value:K}]},{type:a,value:y}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]}]},{type:a,value:aE}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"sleep"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aC}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ab}]},{type:a,value:i}]}]}]},{type:a,value:i},{type:b,tag:n,props:{},children:[{type:a,value:"The program uses two function and one while loop to display the time."}]},{type:a,value:i},{type:b,tag:n,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:aw}]},{type:a,value:" is a simple helper function to convert decimal numbers to binary representations."}]},{type:a,value:i},{type:b,tag:n,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:ax}]},{type:a,value:" structures the the string of ones and zeros into 6 rows and five columns of ones and zeros. This function uses "},{type:b,tag:j,props:{},children:[{type:a,value:N}]},{type:a,value:bf},{type:b,tag:j,props:{},children:[{type:a,value:aB}]},{type:a,value:" in combination with a "},{type:b,tag:j,props:{},children:[{type:a,value:_}]},{type:a,value:" loop to iterate over a string. Notice the "},{type:b,tag:j,props:{},children:[{type:a,value:"-c"}]},{type:a,value:" flag on "},{type:b,tag:j,props:{},children:[{type:a,value:aB}]},{type:a,value:bf},{type:b,tag:j,props:{},children:[{type:a,value:N}]},{type:a,value:". The following is from the "},{type:b,tag:j,props:{},children:[{type:a,value:"man head"}]},{type:a,value:T}]},{type:a,value:i},{type:b,tag:D,props:{className:[E]},children:[{type:b,tag:F,props:{className:[G,L]},children:[{type:b,tag:j,props:{},children:[{type:a,value:"       -c, --bytes"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aF}]},{type:a,value:"-"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aG}]},{type:a,value:"NUM\n              print the first NUM bytes of each "},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"file"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:i}]}]}]},{type:a,value:i},{type:b,tag:n,props:{},children:[{type:a,value:"This gets "},{type:b,tag:j,props:{},children:[{type:a,value:"NUM"}]},{type:a,value:" number of ones and zeros (each being one byte) from the string of ones and zeros that results from "},{type:b,tag:j,props:{},children:[{type:a,value:aw}]},{type:a,value:aH}]},{type:a,value:i},{type:b,tag:n,props:{},children:[{type:a,value:"In the "},{type:b,tag:j,props:{},children:[{type:a,value:aP}]},{type:a,value:" loop, I measure the length and width of the terminal window to center the position of the clock in case it has been changed with the following lines of code:"}]},{type:a,value:i},{type:b,tag:D,props:{className:[E]},children:[{type:b,tag:F,props:{className:[G,L]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aF}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:$}]},{type:a,value:aH},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aG}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,B,f]},children:[{type:a,value:aR}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ac}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Q}]},{type:a,value:aS},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:o}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ad}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ae}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aT}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:v}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,B,f]},children:[{type:a,value:aU}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ah}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:J}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ai}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:T}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:J}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:_}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,ay,f]},children:[{type:a,value:az}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aA}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aV}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aC}]},{type:a,value:aW},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aj}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aa}]},{type:a,value:aX},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:S}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:M},{type:b,tag:c,props:{className:[d,C],title:P},children:[{type:a,value:P}]},{type:a,value:M}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ab}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,B,f]},children:[{type:a,value:aY}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ac}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Q}]},{type:a,value:aZ},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:o}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ad}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ae}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:a_}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:v}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,B,f]},children:[{type:a,value:a$}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ah}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:J}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ai}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:T}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:J}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aF}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:$}]},{type:a,value:aH},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aG}]},{type:a,value:i}]}]}]},{type:a,value:i},{type:b,tag:n,props:{},children:[{type:a,value:"Finally, I convert the ones and zeros to the colored unicode circles with the following lines of code:"}]},{type:a,value:i},{type:b,tag:D,props:{className:[E]},children:[{type:b,tag:F,props:{className:[G,L]},children:[{type:b,tag:j,props:{},children:[{type:a,value:t},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,z,A]},children:[{type:a,value:Y}]},{type:a,value:ba},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:w}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:bb},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]}]},{type:a,value:bc}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:a,value:am},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:w}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:bd},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]}]},{type:a,value:be}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:a,value:am},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:w}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aD},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:N}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ao}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:U}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:y},{type:b,tag:c,props:{className:[d,C],title:K},children:[{type:a,value:K}]},{type:a,value:y}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]}]},{type:a,value:aE}]},{type:a,value:i}]}]}]},{type:a,value:i},{type:b,tag:n,props:{},children:[{type:a,value:"Piping the output of "},{type:b,tag:j,props:{},children:[{type:a,value:ax}]},{type:a,value:" to "},{type:b,tag:j,props:{},children:[{type:a,value:w}]},{type:a,value:" lets us do some simple substition using the pattern:"}]},{type:a,value:i},{type:b,tag:D,props:{className:[E]},children:[{type:b,tag:F,props:{className:[G,L]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:w}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"s\u002F\u003Cwhat you want to swap out\u003E\u002F\u003Cwhat you want to swap in\u003E\u002Fg\""}]},{type:a,value:i}]}]}]},{type:a,value:i},{type:b,tag:n,props:{},children:[{type:a,value:bg},{type:b,tag:j,props:{},children:[{type:a,value:"\"..\u002Fg\""}]},{type:a,value:" at the end of the "},{type:b,tag:j,props:{},children:[{type:a,value:w}]},{type:a,value:" argument specifies that we want to make the substition globally."}]},{type:a,value:i},{type:b,tag:n,props:{},children:[{type:a,value:"The last "},{type:b,tag:j,props:{},children:[{type:a,value:w}]},{type:a,value:" command inserts spaces to the right of each row for the horizontal offset (in order to center the clock on our terminal window). This uses another interesting pattern that I came across on StackOverflow:"}]},{type:a,value:i},{type:b,tag:D,props:{className:[E]},children:[{type:b,tag:F,props:{className:[G,L]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:w}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aD},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:N}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ao}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:U}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:y},{type:b,tag:c,props:{className:[d,C],title:K},children:[{type:a,value:K}]},{type:a,value:y}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]}]},{type:a,value:aE}]},{type:a,value:i}]}]}]},{type:a,value:i},{type:b,tag:n,props:{},children:[{type:a,value:bg},{type:b,tag:j,props:{},children:[{type:a,value:"^"}]},{type:a,value:" is a regular expression that represents the beginning of a line. So with this "},{type:b,tag:j,props:{},children:[{type:a,value:w}]},{type:a,value:" substitution we will be adding to the beginning of each line. What we are adding is the following:"}]},{type:a,value:i},{type:b,tag:D,props:{className:[E]},children:[{type:b,tag:F,props:{className:[G,L]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:N}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ao}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:U}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:y},{type:b,tag:c,props:{className:[d,C],title:K},children:[{type:a,value:K}]},{type:a,value:y}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]}]},{type:a,value:"\u002F\n"}]}]}]},{type:a,value:i},{type:b,tag:n,props:{},children:[{type:a,value:"This takes the number of columns that we want to shift our clock as "},{type:b,tag:j,props:{},children:[{type:a,value:aI}]},{type:a,value:" and reads the first "},{type:b,tag:j,props:{},children:[{type:a,value:aI}]},{type:a,value:" bytes from "},{type:b,tag:j,props:{},children:[{type:a,value:bh}]},{type:a,value:". "},{type:b,tag:j,props:{},children:[{type:a,value:bh}]},{type:a,value:" produces a continuous stream of NULL (zero value) bytes, so the first "},{type:b,tag:j,props:{},children:[{type:a,value:aI}]},{type:a,value:" bytes will be something like "},{type:b,tag:j,props:{},children:[{type:a,value:"\\0, \\0, \\0, \\0, \\0"}]},{type:a,value:". We then pipe this output to "},{type:b,tag:j,props:{},children:[{type:a,value:U}]},{type:a,value:" which translates the null bytes into spaces ("},{type:b,tag:j,props:{},children:[{type:a,value:V}]},{type:a,value:") which help us pad our clock."}]},{type:a,value:i},{type:b,tag:n,props:{},children:[{type:a,value:"Here's a screenshot of the clock in action:"}]},{type:a,value:i},{type:b,tag:n,props:{},children:[{type:b,tag:aJ,props:{alt:aK,src:aq},children:[]}]},{type:a,value:i},{type:b,tag:n,props:{},children:[{type:a,value:"Here's the script on my github account:"}]},{type:a,value:i},{type:b,tag:n,props:{},children:[{type:b,tag:ar,props:{href:bi,rel:[as,at,au],target:av},children:[{type:a,value:bi}]}]},{type:a,value:i},{type:b,tag:n,props:{},children:[{type:a,value:"The clock works well on "},{type:b,tag:j,props:{},children:[{type:a,value:"rxvt-unicode"}]},{type:a,value:", but I need to make some small changes to make it work on other terminal emulators."}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002F2017-10-31-a-binary-clock-written-in-bash",extension:".md",slug:"2017-10-31-a-binary-clock-written-in-bash",createdAt:"1970-01-01T00:00:00.000Z",updatedAt:"2020-09-23T04:18:01.153Z",raw:"\n![png](\u002Fstatic\u002Fbinaryclock.png)\n\nConfiguring the i3 window manager on my laptop has got me interested in learning more about bash scripting. As an exercise for getting more familiar with bash, I set out to write a simple [binary clock](https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FBinary_clock) application that runs in the terminal.\n\nTo simplifiy my clock, I decided to display Unix time as a binary number with ones and zeros represented as the unicode symbols ● and ○, respectively. [Unix time](https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FUnix_time) is the number of second that have passed since January 1, 1970. Here's what I had in mind when I started out:\n\n```\n ○ ○ ● ● ○\n ○ ● ● ● ●\n ○ ● ● ○ ●\n ● ● ○ ● ○\n ● ○ ○ ● ●\n ● ● ○ ● ○\n```\n\nIn this representation, the lower right cell represents the one's place, the next cell to the left represents the two's place, the next over the four's place, the next the eight's, and so on.\n\nHere's the code that I ended up using for my clock program:\n\n```bash\n#!\u002Fbin\u002Fbash\nresize -s 8 19\n\nfunction decToBin { echo \"ibase=10; obase=2; $1\" | bc; };\n\ndraw() {\n  binstring=$(decToBin {$(date '+%s')})\n\n  for i in {31..6..-5}\n    do\n      echo $binstring | tail -c $i | head -c 5\n      printf \"\\n\"\n    done\n}\n\nprintf '\\e[?25l'\nclear\n\nwhile true ; do\n  printf '\\033[;H'\n  offset_v=$(( $(( $(tput lines)  \u002F 2  ))  - 3  ))\n  v=$(( $offset_v \u003E 0 ? $offset_v : 0 ));\n  for i in `seq 1 $v`;\n    do\n        printf \"\\n\"\n    done\n  offset_h=$(( $(( $(tput cols)  \u002F 2  ))  - 7  ))\n  h=$(( $offset_h \u003E 0 ? $offset_h : 0 ));\n  $(echo draw) | sed \"s\u002F1\u002F $(tput setaf 6)● \u002Fg\" |\n                 sed \"s\u002F0\u002F $(tput setaf 6)○ \u002Fg\" |\n                 sed \"s\u002F^\u002F$(head -c $h \u003C \u002Fdev\u002Fzero | tr '\\0' '\\ ';)\u002F\"\n  sleep 1\ndone\n```\n\nThe program uses two function and one while loop to display the time.\n\n`decToBin` is a simple helper function to convert decimal numbers to binary representations.\n\n`draw` structures the the string of ones and zeros into 6 rows and five columns of ones and zeros. This function uses `head` and `tail` in combination with a `for` loop to iterate over a string. Notice the `-c` flag on `tail` and `head`. The following is from the `man head`:\n\n```bash\n       -c, --bytes=[-]NUM\n              print the first NUM bytes of each file;\n```\n\nThis gets `NUM` number of ones and zeros (each being one byte) from the string of ones and zeros that results from `decToBin`.\n\nIn the `while` loop, I measure the length and width of the terminal window to center the position of the clock in case it has been changed with the following lines of code:\n\n```bash\n[...]\n  offset_v=$(( $(( $(tput lines)  \u002F 2  ))  - 3  ))\n  v=$(( $offset_v \u003E 0 ? $offset_v : 0 ));\n  for i in `seq 1 $v`;\n    do\n        printf \"\\n\"\n    done\n  offset_h=$(( $(( $(tput cols)  \u002F 2  ))  - 7  ))\n  h=$(( $offset_h \u003E 0 ? $offset_h : 0 ));\n[...]\n```\n\nFinally, I convert the ones and zeros to the colored unicode circles with the following lines of code:\n\n```bash\n  $(echo draw) | sed \"s\u002F1\u002F $(tput setaf 6)● \u002Fg\" |\n                 sed \"s\u002F0\u002F $(tput setaf 6)○ \u002Fg\" |\n                 sed \"s\u002F^\u002F$(head -c $h \u003C \u002Fdev\u002Fzero | tr '\\0' '\\ ';)\u002F\"\n```\n\nPiping the output of `draw` to `sed` lets us do some simple substition using the pattern:\n\n```bash\nsed \"s\u002F\u003Cwhat you want to swap out\u003E\u002F\u003Cwhat you want to swap in\u003E\u002Fg\"\n```\n\nThe `\"..\u002Fg\"` at the end of the `sed` argument specifies that we want to make the substition globally.\n\nThe last `sed` command inserts spaces to the right of each row for the horizontal offset (in order to center the clock on our terminal window). This uses another interesting pattern that I came across on StackOverflow:\n\n```bash\nsed \"s\u002F^\u002F$(head -c $h \u003C \u002Fdev\u002Fzero | tr '\\0' '\\ ';)\u002F\"\n```\n\nThe `^` is a regular expression that represents the beginning of a line. So with this `sed` substitution we will be adding to the beginning of each line. What we are adding is the following:\n\n```bash\n$(head -c $h \u003C \u002Fdev\u002Fzero | tr '\\0' '\\ ';)\u002F\n```\n\nThis takes the number of columns that we want to shift our clock as `$h` and reads the first `$h` bytes from `\u002Fdev\u002Fzero`. `\u002Fdev\u002Fzero` produces a continuous stream of NULL (zero value) bytes, so the first `$h` bytes will be something like `\\0, \\0, \\0, \\0, \\0`. We then pipe this output to `tr` which translates the null bytes into spaces (`'\\ '`) which help us pad our clock.\n\nHere's a screenshot of the clock in action:\n\n![png](\u002Fstatic\u002Fbinaryclock.png)\n\nHere's the script on my github account:\n\n[https:\u002F\u002Fgithub.com\u002Fbriancaffey\u002Fbinaryclock\u002Fblob\u002Fmaster\u002Fbinaryclock](https:\u002F\u002Fgithub.com\u002Fbriancaffey\u002Fbinaryclock\u002Fblob\u002Fmaster\u002Fbinaryclock)\n\nThe clock works well on `rxvt-unicode`, but I need to make some small changes to make it work on other terminal emulators.\n"}}],fetch:[],mutations:void 0}}("text","element","span","token"," ","variable","punctuation","operator","\n","code","number","function","string","p",")","keyword",";","\n  ","|","  ","$(","))","sed","=","'","builtin","class-name","assign-left","entity","div","nuxt-content-highlight","pre","line-numbers","$(("," $","0","\\0","language-bash","\"","head","\n    ","\\n","(","6","printf",":","tr","'\\ '","\n\n","{","echo","}","for","..","do","done","((","\u002F","2","  - "," $offset_v ","\u003E","?","`"," $offset_h ","tput setaf ","\n                 "," -c $h ","\u003C"," \u002Fdev\u002Fzero ","\u002Fstatic\u002Fbinaryclock.png","a","nofollow","noopener","noreferrer","_blank","decToBin","draw","for-or-select","i","in","tail","1","\"s\u002F^\u002F","\u002F\"","[","]",".","$h","img","png","function-name","\n      "," -c ","\\e","while","\\033","offset_v","tput lines","3","v","seq"," $v","\n        ","offset_h","tput cols","7","h"," draw","\"s\u002F1\u002F ","● \u002Fg\"","\"s\u002F0\u002F ","○ \u002Fg\""," and ","The ","\u002Fdev\u002Fzero","https:\u002F\u002Fgithub.com\u002Fbriancaffey\u002Fbinaryclock\u002Fblob\u002Fmaster\u002Fbinaryclock")));