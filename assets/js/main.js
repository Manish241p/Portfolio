/* ---- CONFIG ---- */
const CONFIG={email:"",github:"",linkedin:"",whatsapp:"919687260508"}; // inquiries go to this WhatsApp number

/* PHOTO: tamaro photo assets/img/photo.jpg ma muko. */
const PHOTO="assets/img/photo.jpg";

const FALLBACK="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%23cfd8ee'/%3E%3Ctext x='200' y='290' font-family='Arial' font-weight='800' font-size='180' text-anchor='middle' fill='%230c1635'%3EM%3C/text%3E%3C/svg%3E";
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const PROJECTS=[
 ['Impero Poly Films','WordPress website','https://www.imperopolyfilms.com','WordPress'],
 ['JK Pulvelizer','WordPress website','https://jkpulvelizer.com','WordPress'],
 ['HD Polyplast','WordPress website','https://hdpolyplast.co.in','WordPress'],
 ['Unisoft Rajkot','WordPress website','https://unisoftrajkot.com','WordPress'],
 ['PN Ind','WordPress website','https://pnind.infindia.net','WordPress'],
 ['Harihar','WordPress website','https://harihar.infindia.net/','WordPress'],
 ['SIPL India','WordPress website','https://siplindia.net','WordPress'],
 ['DK Food Machinery','Custom PHP website','https://dkfoodmachinery.com','PHP'],
 ['Shiv Ferrocast','Custom PHP website (demo)','https://demo.shivferrocast.com','PHP'],
 ['Shreya Sanitary Product','Custom PHP website','https://shreyasanitaryproduct.com','PHP'],
 ['Pavitra Metal Tech','Custom PHP website','https://pavitrametaltech.com','PHP'],
 ['Bharat Agro','Custom PHP website','https://bharatagro.infindia.net/','PHP'],
 ['Corporate Growth Stories','Corporate news & publishing','https://cg-stories.com/','WordPress'],
 ['Blue Planet Design Studio','Creative agency website','https://blueplanet-design.com/',''],
 ['Harnex Manufacturing','Manufacturing & industrial','https://harnexmfg.com/','WordPress'],
 ['Redox Reaction','Chemical industry & products','https://redoxreaction.co.in/','WordPress'],
 ['Elev8 Lift','Aerial work platforms & scissor lifts','https://elev8lift.in/',''],
 ['Aatman Art Jewels','Jewellery & ecommerce','https://aatmanartjewels.com/',''],
 ['Kirit Traders','Trading & business','https://kirittraders.com/',''],
 ['Arisence Demo','Business website demo','https://demo.arisence.com/',''],
 ['MBK Vacutech','Business website','https://mbkvacutech.in/','WordPress']
];
const PLUGINS=[
 ['Custom Advertisement Manager','3.2.0','▦','Manage banner, HTML, AdSense and popup ads from the WordPress admin.',['Banner ads','AdSense','Popups','Scheduling']],
 ['IPO Manager Pro','1.4.0','◔','Manage IPO listings, GMP, subscriptions and listing gains.',['IPO calendar','GMP','Dashboard','REST API']],
 ['Technical SEO','1.1.2','⌕','Technical SEO controls, monitoring and audit tools.',['Meta tags','Sitemap','Redirects','Site audit']],
 ['CGS Schema Markup','3.0.1','‹›','Structured data output for news, pages, FAQs and ecommerce.',['NewsArticle','FAQPage','Breadcrumb','WooCommerce']]
];
const SKILLS=[
 ['Backend','Server logic and data-driven apps.',['PHP','Laravel','MySQL','REST APIs']],
 ['WordPress','Sites, themes and plugins.',['WordPress','WooCommerce','Elementor','Plugin development','Theme customization']],
 ['Frontend','Responsive interfaces for every screen.',['HTML5','CSS3','JavaScript','Bootstrap']],
 ['Tools','Hosting, design and optimization.',['cPanel','FileZilla','Figma','Technical SEO','Structured data']]
];
const SERVICES=[['Custom PHP Development','Tailor-made PHP functionality'],['Laravel Web Applications','Dynamic apps on Laravel'],['WordPress Websites','Complete responsive business sites'],['Custom Plugin Development','Plugins with exactly your features'],['Theme Development','Themes built for your design'],['Theme Customization','Fit an existing theme to your brand'],['Elementor Customization','Layouts and responsive fixes'],['WooCommerce Customization','Shop, cart and checkout tweaks'],['Maintenance & Bug Fixes','Troubleshooting and updates'],['Technical SEO','Meta, sitemaps, structured data'],['Performance Improvements','Lighter, faster websites'],['Responsive UI','Mobile-first layouts']];
const shot=u=>`https://image.thum.io/get/width/700/crop/440/noanimate/${u}`;
const alt=u=>`https://s0.wp.com/mshots/v1/${encodeURIComponent(u)}?w=700&h=440`;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

$$('.me').forEach(i=>{i.src=PHOTO;i.onerror=()=>{i.onerror=null;i.src=FALLBACK}});
$('#big').innerHTML=['Manish','Parmar'].map((w,r)=>`<span class="${r?'o':''}" aria-hidden="true">${[...w].map((c,i)=>`<b style="--i:${i+r*6}">${c}</b>`).join('')}</span>`).join('');
(function(){const R=['fast websites','SEO-ready sites','Laravel apps','WordPress plugins'],el=$('#role');let i=0,c=0,d=0;
 (function t(){const w=R[i];c+=d?-1:1;el.textContent=w.slice(0,c)||'\u00a0';let s=d?35:75;
  if(!d&&c===w.length){d=1;s=1400}else if(d&&c===0){d=0;i=(i+1)%R.length;s=300}setTimeout(t,s)})()})();
const mw=['PHP','Laravel','WordPress','WooCommerce','Elementor','MySQL','JavaScript','Technical SEO','Custom Plugins'];
$('#mq').innerHTML=[0,1].map(()=>mw.map(x=>`<span>${x}</span>`).join('')).join('');
function drawWork(f){const L=PROJECTS.filter(p=>f==='All'||p[3]===f);
 $('#wg').innerHTML=L.map(p=>`<a class="pc in" href="${p[2]}" target="_blank" rel="noopener"><div class="sc"><img src="${shot(p[2])}" data-a="${alt(p[2])}" alt="${esc(p[0])} preview" loading="lazy"></div><div class="in"><div><h3>${esc(p[0])}</h3><p>${esc(p[1])}</p></div><span class="ar">↗</span></div></a>`).join('');
 $$('#flt button').forEach(b=>b.classList.toggle('on',b.dataset.f===f))}
$('#flt').innerHTML=['All','WordPress','PHP'].map(f=>`<button type="button" data-f="${f}">${f} <small>${f==='All'?PROJECTS.length:PROJECTS.filter(p=>p[3]===f).length}</small></button>`).join('');
$$('#flt button').forEach(b=>b.onclick=()=>drawWork(b.dataset.f));
$('#wTitle').textContent=PROJECTS.length+' live websites.';
drawWork('All');
document.addEventListener('error',e=>{const t=e.target;if(t.tagName==='IMG'&&t.dataset&&t.dataset.a){t.src=t.dataset.a;delete t.dataset.a}},true);
$('#pg').innerHTML=PLUGINS.map(p=>`<div class="pl rv"><span class="v">v${p[1]}</span><div class="ic">${p[2]}</div><h3>${p[0]}</h3><p>${p[3]}</p><div class="tg">${p[4].map(x=>`<span>${x}</span>`).join('')}</div></div>`).join('');
$('#sg').innerHTML=SKILLS.map(s=>`<div class="sk"><h3>${s[0]}</h3><p>${s[1]}</p><div class="tg">${s[2].map(x=>`<span>${x}</span>`).join('')}</div></div>`).join('');
$('#vg').innerHTML=SERVICES.map((s,i)=>`<a class="sv rv" href="#contact" data-sv="${esc(s[0])}"><i>${i+1}</i><div><b>${esc(s[0])}</b><span>${esc(s[1])}</span></div></a>`).join('');
$$('[data-sv]').forEach(a=>a.onclick=()=>{$('[name=subject]').value=a.dataset.sv});

/* contact links + floating WhatsApp button */
const WA='https://wa.me/'+CONFIG.whatsapp;
$('#wab').href=WA+'?text='+encodeURIComponent('Hello Manish, I want to discuss a project.');
$('#links').innerHTML=[['WhatsApp',WA],['GitHub',CONFIG.github],['LinkedIn',CONFIG.linkedin],['Email',CONFIG.email&&'mailto:'+CONFIG.email]].filter(x=>x[1]).map(x=>`<a href="${x[1]}" target="_blank" rel="noopener">${x[0]}</a>`).join('');
$('#yr').textContent=new Date().getFullYear();

const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');io.unobserve(e.target);
 $$('[data-n]',e.target).forEach(n=>{const T=+n.dataset.n;let t0;(function f(t){t0=t0||t;const p=Math.min(1,(t-t0)/1100);n.textContent=Math.round(T*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(performance.now())})}),{threshold:.12});
$$('.rv').forEach(e=>io.observe(e));

const hd=$('#hd'),secs=$$('main section[id]'),na=$$('nav a');
function sc(){hd.classList.toggle('s',scrollY>10);
 const h=document.documentElement.scrollHeight-innerHeight;$('#bar').style.width=(h>0?scrollY/h*100:0)+'%';
 let cur='';secs.forEach(s=>{if(s.getBoundingClientRect().top<innerHeight*.4)cur=s.id});na.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+cur))}
addEventListener('scroll',sc,{passive:true});sc();

/* mobile menu */
function menu(o){$('#nav').classList.toggle('open',o);$('#bur').setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''}
$('#bur').onclick=()=>menu(!$('#nav').classList.contains('open'));
na.forEach(a=>a.addEventListener('click',()=>menu(false)));
addEventListener('resize',()=>{if(innerWidth>1000)menu(false)});

/* share */
const url=location.href.split('#')[0],txt='Manish Parmar | PHP Laravel & WordPress Developer';
$('#sUrl').value=url;
$('#sWa').href='https://wa.me/?text='+encodeURIComponent(txt+' '+url);
$('#sLi').href='https://www.linkedin.com/sharing/share-offsite/?url='+encodeURIComponent(url);
$('#sX').href='https://twitter.com/intent/tweet?text='+encodeURIComponent(txt)+'&url='+encodeURIComponent(url);
$('#shBtn').onclick=()=>$('#sh').classList.add('on');
$('#shX').onclick=()=>$('#sh').classList.remove('on');
$('#sh').addEventListener('mousedown',e=>{if(e.target.id==='sh')$('#sh').classList.remove('on')});
addEventListener('keydown',e=>{if(e.key==='Escape'){$('#sh').classList.remove('on');menu(false)}});
$('#sCp').onclick=async()=>{try{await navigator.clipboard.writeText(url)}catch(e){$('#sUrl').select();document.execCommand('copy')}$('#sCp').textContent='Copied';setTimeout(()=>$('#sCp').textContent='Copy',1800)};

/* contact form -> WhatsApp (9687260508) */
$('#cf').addEventListener('submit',e=>{
 e.preventDefault();
 const f=e.target,m=$('#fm'),v=n=>f.elements[n].value.trim();
 if(v('name').length<2||v('subject').length<3||v('message').length<10){
  m.textContent='Please enter your name, a subject and a message of at least 10 characters.';return}
 if(v('phone')&&!/^[0-9+\-\s()]{7,18}$/.test(v('phone'))){m.textContent='Please enter a valid phone number or leave it empty.';return}
 let msg='*New Website Inquiry*\n\n*Name:* '+v('name');
 if(v('phone'))msg+='\n*Phone:* '+v('phone');
 msg+='\n*Subject:* '+v('subject')+'\n\n*Message:*\n'+v('message');
 const link=WA+'?text='+encodeURIComponent(msg);
 m.textContent='Opening WhatsApp... press Send there.';
 const w=window.open(link,'_blank');
 if(w){w.opener=null}else{location.href=link}
 f.reset();
});

/* ===== SIGNATURE INTRO (real pen handwriting: font-accurate ink revealed along the pen path) ===== */
(function(){
  const it=document.getElementById('intro');if(!it)return;
  const body=document.body;let done=false;
  function finish(){
    if(done)return;done=true;
    it.classList.add('out');
    body.classList.remove('intro-on');
    setTimeout(()=>it.remove(),1800);
  }
  document.getElementById('sgSkip').onclick=finish;
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){finish();return}
  // Faqat pehli vaar batavva mate niche ni line chalu karo:
  // if(sessionStorage.getItem('intro')){finish();return}sessionStorage.setItem('intro','1');

  const NS='http://www.w3.org/2000/svg';
  const pen=document.getElementById('sgPen'),line=document.getElementById('sgLine');
  const gT=document.getElementById('sgMg'),gU=document.getElementById('sgMgU');
  /* pen path data: [x0*10, y0*10, [dx*10, dy*10, dt(ms), ...]] ; last item = underline */
  const DATA=[[1012,1787,[20,-25,2,21,-25,3,20,-25,2,20,-24,2,22,-24,3,21,-24,3,16,-27,2,9,-31,3,17,-27,2,19,-26,3,20,-25,2,19,-26,2,19,-26,3,20,-25,2,19,-26,2,19,-25,3,19,-26,2,19,-26,3,18,-26,2,18,-27,2,19,-26,3,17,-27,2,18,-27,2,17,-27,3,17,-27,2,17,-27,2,17,-27,3,16,-28,2,17,-27,3,16,-28,2,16,-28,3,14,-29,2,14,-29,4,11,-30,4,10,-30,4,6,-31,5,-2,-32,4,-20,-24,5,-31,-1,5,-32,3,4,-31,8,5,-30,11,4,-29,15,3,-28,16,2,-27,16,3,-27,18,4,-26,19,5,-29,13,4,-25,-5,5,4,-32,5,10,-30,4,11,-30,4,10,-31,3,7,-31,2,6,-31,3,3,-32,4,3,-32,4,-4,-32,5,-10,-30,4,-19,-26,5,-26,-18,5,-31,-10,4,-31,-3,5,-32,1,4,-32,4,4,-31,8,3,-31,8,3,-30,12,3,-29,13,2,-29,15,3,-28,16,3,-27,16,2,-27,18,3,-26,19,2,-26,19,3,-25,19,2,-25,20,3,-25,21,2,-24,21,3,-23,22,2,-22,23,3,-22,24,2,-21,24,3,-21,24,2,-20,25,3,-20,25,3,-19,26,2,-19,26,3,-17,27,3,-16,28,3,-13,29,3,-12,30,5,-7,31,4,-3,32,5,7,31,4,22,22,5,30,10,5,32,-1,4,32,-3,5,31,-6,4,31,-10,4,28,-15,3,28,-16,3,26,-18,3,26,-19,2,25,-20,3,23,-23,3,24,-21,2,23,-23,3,22,-22,2,21,-25,3,20,-25,3,20,-25,5,18,-26,5,19,-26,4,-16,22,1,-18,26,0,-20,26,1,-20,25,0,-20,24,1,-23,23,0,-22,23,0,-24,21,1,-23,22,0,-25,21,0,-26,19,1,-26,18,0,-27,17,0,-29,14,1,-30,12,0,-31,7,1,-32,3,0,-32,2,1,-31,-8,0,-24,-21,1,-9,-30,1,3,-32,0,6,-32,1,11,-30,0,13,-29,1,15,-28,0,18,-27,0,18,-26,1,19,-26,0,20,-25,0,20,-25,0,21,-25,1,21,-23,0,21,-24,0,23,-23,1,23,-23,0,24,-21,0,24,-21,1,25,-20,0,26,-19,0,25,-19,0,26,-19,1,27,-18,0,27,-17,0,28,-16,1,28,-15,0,29,-13,0,30,-12,1,31,-9,0,31,-8,0,32,-5,1,32,-1,0,32,2,1,30,9,1,27,17,0,21,24,1,11,30,0,5,32,1,-3,32,0,-3,32,1,-5,31,0,-7,32,0,-9,30,1,-11,30,0,-11,31,0,-6,31,1,-13,29,3,-18,26,3,-15,29,3,-19,26,4,-20,24,4,-23,23,4,-7,-12,1,-27,16,3,-24,21,3,-23,23,3,-22,23,3,-24,22,2,-23,22,2,-21,24,3,-23,22,2,-23,23,3,-21,24,2,-22,23,2,-21,24,3,-22,24,2,-21,24,2,-20,25,3,-21,24,2,-20,25,3,-20,25,2,-20,25,2,-20,25,3,-19,26,2,-20,26,3,-18,26,2,-19,26,2,-18,26,3,-17,27,3,-17,28,4,-14,28,4,-11,30,5,-6,32,4,6,29,5,31,0,5,30,-11,4,26,-18,5,24,-22,4,23,-22,3,23,-23,3,21,-24,3,21,-24,2,21,-25,3,20,-25,2,21,-24,2,20,-25,3,20,-25,2,20,-25,3,19,-26,2,19,-25,2,19,-26,3,19,-26,2,19,-26,2,18,-26,3,18,-27,2,19,-26,2,17,-27,3,18,-27,2,17,-27,3,16,-27,2,17,-28,3,17,-27,3,16,-28,5,15,-28,4,11,-30,5,-4,14,1,-14,29,0,-16,28,1,-16,28,0,-16,27,1,-17,27,0,-17,28,0,-18,26,0,-17,28,1,-17,26,0,-19,26,0,-18,27,1,-19,26,0,-19,26,0,-19,26,0,-18,26,1,-20,25,0,-19,26,0,-20,25,1,-21,25,0,-20,25,0,-20,24,0,-21,24,1,-20,25,0,-22,24,0,-22,23,1,-22,23,0,-23,23,1,-25,20,0,-28,16,1,-31,7,0,-24,-15,1,3,-32,0,8,-31,1,13,-29,0,16,-28,1,17,-27,0,17,-27,1,19,-26,0,18,-26,0,19,-26,0,20,-26,1,19,-25,0,20,-25,0,20,-25,1,20,-25,0,21,-25,0,20,-24,0,21,-25,1,21,-24,0,22,-24,0,21,-24,1,22,-23,0,22,-23,0,23,-23,0,22,-23,1,21,-24,0,24,-21,0,23,-23,1,23,-22,0,23,-23,0,25,-20,0,30,-8,1,24,-20,0,20,-25,0,17,-27,1,15,-28,0,21,-24,0,31,-10,1,28,-14,0,27,-19,0,26,-17,1,28,-17,0,28,-16,0,28,-14,1,30,-12,0,31,-7,1,32,-4,0,31,3,1,19,24,0,2,32,1,-6,31,1,-10,31,0,-12,30,1,-14,29,0,-14,28,0,-16,28,0,-16,28,1,-16,27,0,-17,28,0,-16,27,1,-17,27,0,-18,28,0,-17,26,1,-17,27,0,-18,27,0,-19,26,0,-17,27,1,-19,26,0,-19,26,0,-19,26,0,-19,26,1,-19,25,0,-20,26,0,-19,25,1,-19,26,0,-19,26,0,-20,25,1,-17,27,1,-8,31,0,21,10,5,30,-13,4,24,-20,5,25,-20,4,24,-22,3,23,-22,3,24,-21,2,24,-22,3,24,-21,2,24,-22,2,23,-21,3,24,-22,2,24,-21,2,24,-22,3,23,-21,2,24,-22,2,24,-21,3,24,-21,2,24,-21,2,25,-21,3,24,-21,2,25,-20,2,24,-21,3,25,-20,2,25,-20,3,26,-20,2,25,-19,3,27,-18,4,27,-16,5,30,-12,5,32,-5,4,27,14,5,-7,31,5,-9,31,4,-16,28,5,-17,27,3,-18,27,3,-18,26,3,-19,26,2,-19,25,3,-20,26,2,-19,25,2,-20,25,3,-19,26,2,-20,25,2,-19,26,3,-20,25,2,-19,26,2,-19,26,3,-19,26,2,-17,27,3,-18,27,2,-16,27,3,-16,28,3,-14,29,4,-11,30,4,-6,31,4,-5,32,5,8,30,5,22,23,4,31,6,5,32,-3,5,32,-6,4,30,-10,4,30,-12,3,28,-15,3,28,-16,3,27,-17,3,27,-18,2,26,-18,3,25,-20,3,23,-22,3,24,-22,3,10,-12,1]],[2276,1604,[-23,22,2,-22,24,3,-21,24,3,-25,17,3,-31,6,2,-28,16,3,-26,19,4,-27,16,4,-31,9,5,-32,6,4,-27,-12,5,5,-32,5,8,-31,4,12,-29,5,17,-27,4,21,-25,4,20,-25,3,22,-23,2,24,-21,3,24,-22,3,25,-20,3,25,-19,2,27,-18,3,28,-16,4,29,-14,3,30,-10,5,32,-5,5,32,-2,4,31,4,5,16,26,5,-7,31,4,-15,29,4,-19,25,4,-25,21,4,-17,11,3,26,-19,1,23,-22,0,19,-26,1,11,-30,0,2,-31,1,-25,-18,0,-32,-1,1,-32,3,0,-31,8,1,-30,11,0,-29,14,1,-27,17,0,-26,19,1,-25,20,0,-25,20,0,-23,22,1,-24,22,0,-21,23,0,-21,25,1,-19,26,0,-16,27,1,-11,31,0,-7,31,1,6,29,0,31,2,1,31,-7,0,30,-13,1,27,-17,0,26,-19,1,29,-13,0,25,10,3,1,32,4,0,32,3,21,22,5,32,-1,4,31,-7,5,30,-13,4,28,-15,4,27,-17,3,28,-17,2,26,-18,3,27,-17,2,26,-19,3,26,-18,2,26,-19,3,26,-20,2,25,-19,2,26,-20,3,25,-20,2,25,-19,2,25,-20,3,27,-19,3,25,-19,3,28,-16,5,31,-7,4,30,-8,5,24,-21,4,-14,11,1,-23,22,1,-11,30,4,-13,29,4,-18,27,3,-19,26,2,-20,25,3,-18,26,2,-19,26,3,-19,26,3,-17,27,5,-8,31,5,-15,28,4,-19,18,3,23,-23,0,30,-11,5,30,-10,5,27,-18,3,26,-19,3,25,-20,2,25,-19,3,26,-19,2,26,-19,3,26,-19,2,26,-19,2,26,-18,3,26,-18,2,27,-19,3,27,-18,4,27,-16,4,31,-5,5,30,4,5,24,-22,4,-6,6,1,-24,22,0,-12,29,5,-14,29,4,-20,25,2,-20,25,3,-20,25,2,-18,26,4,-19,27,4,-16,27,5,-8,31,4,-2,32,5,28,8,5,32,-6,4,30,-9,5,29,-15,4,27,-17,3,27,-17,3,26,-18,3,26,-19,2,26,-19,3,26,-19,2,26,-19,3,25,-19,2,26,-20,3,27,-15,3,17,3,2,30,-10,3,22,-23,2,22,-23,5,20,-25,5,20,-25,4,-7,9,1,-21,25,0,-20,25,1,-22,23,0,-23,23,1,-11,29,2,-16,28,3,-16,28,4,-14,29,4,-9,31,5,-6,31,5,5,29,4,32,3,5,31,-8,4,29,-13,5,27,-17,4,27,-17,3,27,-18,3,27,-18,2,26,-18,2,26,-19,3,26,-19,2,26,-19,3,26,-19,2,25,-19,2,25,-21,3,26,-19,2,30,-11,4,28,-8,4,16,-27,5,14,-29,5,15,-29,4,-8,16,1,-14,29,0,-16,28,1,-13,29,3,-3,32,3,-3,32,3,-6,31,2,-5,32,3,-5,32,3,-4,31,5,-13,29,4,-22,23,5,-26,19,4,-31,8,5,-32,0,5,-27,-16,4,-3,-3,3,27,18,0,31,2,1,31,-7,0,27,-18,1,22,-23,0,27,-10,1,31,-4,3,28,-15,2,27,-18,3,27,-18,3,26,-18,2,26,-19,2,26,-18,3,26,-19,2,26,-20,3,25,-19,2,30,-6,3,30,-11,3,22,-23,3,21,-24,3,18,-27,3,18,-27,3,17,-27,2,18,-26,3,18,-27,2,18,-27,2,17,-26,3,18,-27,2,17,-27,2,18,-27,3,17,-27,2,18,-27,2,18,-26,3,18,-27,2,17,-27,2,18,-27,3,17,-27,2,18,-26,2,19,-26,3,17,-27,2,18,-27,2,19,-26,3,18,-26,2,18,-27,3,17,-27,5,19,-26,5,19,-26,4,8,-9,3,-20,25,0,-19,27,1,-18,26,1,-17,27,0,-19,26,0,-18,27,1,-18,26,0,-18,27,0,-18,26,0,-18,27,1,-18,26,0,-18,27,0,-17,27,0,-18,27,1,-17,27,0,-18,26,0,-17,27,1,-18,27,0,-18,27,0,-18,27,0,-17,27,1,-18,26,0,-17,27,0,-18,27,1,-18,26,0,-18,27,0,-17,27,0,-20,25,1,-22,24,0,-18,26,1,-10,30,3,-9,31,2,-14,28,3,-21,25,2,-21,25,4,-20,24,4,-21,24,5,-22,24,5,6,-7,0,22,-24,1,21,-24,0,20,-25,1,20,-24,0,24,-22,0,32,-2,3,28,-13,2,24,-22,3,24,-21,2,24,-22,3,24,-20,2,25,-20,3,26,-20,3,25,-19,5,27,-18,5,30,-11,4,29,5,5,2,31,4,-12,29,5,-17,27,5,-17,27,3,-17,27,2,-17,28,3,-16,28,5,-11,30,4,-7,31,5,-2,31,5,27,13,4,31,-5,5,30,-11,4,28,-15,5,27,-18,3,26,-19,3,26,-18,2,27,-18,3,26,-19,2,26,-18,2,26,-19,3,26,-19,2,25,-20,3,26,-20,4,25,-20,5,25,-20,5,24,-20,4,-17,14,1,-25,20,0,-25,20,1,-25,20,0,-25,19,1,-26,20,0,-26,19,0,-26,18,0,-26,19,1,-26,18,0,-27,18,0,-25,19,1,-27,18,0,-28,16,1,-29,13,0,-31,7,1,-31,-4,0,-6,-29,1,6,-32,0,10,-30,1,15,-29,0,17,-27,1,16,-27,0,18,-27,0,17,-27,1,15,-29,0,8,-31,2]],[4361,1469,[0,0,160]],[3536,1324,[32,-37,180]],[5360,1049,[0,-32,4,-2,-32,4,-11,-30,4,-16,-28,4,-22,-23,4,-23,-23,4,-25,-20,3,-27,-17,3,-27,-17,2,-28,-15,3,-28,-16,2,-29,-14,2,-29,-14,3,-28,-16,3,-27,-17,3,-26,-18,3,-25,-20,4,-22,-24,5,-17,-27,5,-9,-30,4,5,-32,5,15,-28,4,23,-22,5,28,-17,5,29,-13,4,30,-11,3,31,-8,3,31,-7,3,32,-6,3,32,-4,2,32,-1,3,32,-3,3,31,3,2,32,0,3,32,3,2,32,3,3,32,5,3,31,7,2,31,8,3,31,9,3,30,10,3,30,13,3,28,16,4,25,19,4,23,22,3,21,25,4,15,28,4,11,30,3,8,31,3,4,32,3,2,32,5,0,32,4,26,10,5,30,-10,5,26,-19,4,25,-20,4,25,-20,3,25,-20,3,26,-20,2,26,-18,2,26,-19,3,26,-18,2,27,-18,3,27,-17,2,28,-16,3,28,-15,2,29,-15,3,28,-14,3,30,-13,2,30,-11,3,31,-9,4,31,-6,4,32,-4,4,32,-3,5,30,7,4,19,26,5,6,31,5,-4,32,4,-7,31,5,-12,30,4,-15,28,3,-16,28,3,-16,28,2,-18,26,3,-18,27,2,-19,26,3,-19,25,3,-21,24,2,-21,25,3,-22,23,2,-22,23,3,-23,23,2,-23,22,3,-24,21,2,-25,20,3,-25,20,3,-26,19,2,-27,17,4,-29,15,3,-30,12,4,-31,7,4,-32,3,5,-32,1,4,-30,-11,5,-26,-17,3,-22,-24,3,-16,-28,5,-9,-31,5,6,23,0,14,29,1,20,25,0,26,19,1,29,13,0,32,3,1,32,-4,0,31,-6,1,30,-11,0,29,-14,1,28,-16,0,26,-19,1,25,-19,0,25,-20,0,25,-21,0,23,-22,1,23,-22,0,22,-24,0,22,-23,1,21,-24,0,21,-24,0,20,-25,1,19,-27,0,18,-26,0,18,-26,0,17,-27,1,16,-28,0,15,-29,1,13,-29,0,8,-31,1,5,-32,0,-2,-31,1,-15,-28,0,-29,-12,1,-32,2,0,-31,3,1,-32,5,0,-31,8,1,-30,11,0,-30,12,0,-29,14,1,-28,15,0,-28,15,0,-28,16,1,-27,17,0,-28,17,0,-26,18,1,-26,19,0,-26,18,0,-26,20,0,-25,19,1,-25,20,0,-25,20,0,-25,20,1,-30,12,0,-31,3,0,-20,22,4,-11,31,4,-10,30,3,-13,29,3,-18,27,2,-17,26,2,-8,32,3,-9,30,2,-15,28,3,-16,28,2,-16,28,3,-15,28,2,-16,28,3,-17,28,2,-17,27,2,-17,27,3,-17,27,2,-18,27,2,-17,27,3,-18,26,2,-18,27,3,-19,26,2,-19,26,2,-19,25,3,-18,27,2,-19,25,2,-20,26,3,-20,25,2,-20,25,3,-20,25,2,-21,25,2,-20,24,3,-22,23,2,-21,25,3,-21,24,2,-22,24,3,-22,22,2,-24,21,3,-24,22,3,-25,20,3,-26,19,5,-28,16,4,-30,10,5,-32,4,5,-12,-27,4,5,-31,5,10,-31,4,13,-29,5,16,-28,3,16,-28,3,18,-26,2,16,-28,3,19,-26,2,19,-26,3,19,-26,2,19,-26,3,19,-25,2,19,-26,2,20,-25,3,20,-25,2,20,-25,2,21,-25,3,20,-24,2,21,-25,2,21,-24,3,20,-25,2,22,-24,3,21,-23,2,21,-24,2,22,-24,3,22,-24,2,21,-23,2,23,-23,3,21,-24,2,23,-23,2,23,-22,3,22,-23,2,23,-23,3,23,-23,3,24,-21,4,25,-19,5,31,-10,4,15,-1,3]],[5881,1604,[-23,22,2,-22,24,3,-21,24,3,-25,17,3,-31,6,2,-28,16,3,-26,19,4,-27,16,4,-31,9,5,-32,6,4,-27,-12,5,5,-32,5,7,-31,4,13,-29,5,17,-27,4,21,-25,4,20,-25,3,22,-23,2,24,-21,3,24,-22,3,25,-20,3,25,-19,2,27,-18,3,28,-16,4,29,-14,3,30,-10,5,32,-5,5,32,-2,4,31,4,5,16,26,5,-7,31,4,-15,29,4,-19,25,4,-25,21,4,-17,11,3,26,-19,1,23,-22,0,19,-26,1,11,-30,0,2,-31,1,-25,-18,0,-32,-1,1,-32,3,0,-31,8,1,-30,11,0,-28,14,1,-28,17,0,-26,18,1,-25,20,0,-25,21,0,-23,22,0,-24,21,1,-21,24,0,-21,25,1,-19,25,0,-16,28,1,-10,30,0,-8,32,1,5,29,0,32,2,1,31,-7,0,30,-12,1,27,-18,0,26,-19,1,29,-12,0,25,9,3,0,32,4,1,32,3,21,22,5,32,-1,4,31,-7,5,29,-13,4,28,-15,4,28,-17,3,27,-17,2,27,-17,3,27,-18,2,26,-19,3,26,-18,2,26,-19,3,26,-19,2,25,-20,2,25,-19,3,25,-20,2,26,-20,3,25,-20,2,24,-21,3,24,-21,3,27,-18,3,11,-28,5,7,-31,4,17,-27,5,20,-25,4,23,-22,3,-23,23,1,-21,24,0,-17,27,1,-6,31,0,7,31,2,16,28,3,10,30,4,-3,31,4,-21,24,5,-23,22,4,-22,23,2,-23,23,3,-21,24,4,-17,27,5,-11,30,5,-4,32,4,23,18,5,32,-4,4,31,-8,5,28,-15,5,28,-16,3,27,-18,3,26,-18,3,26,-19,2,26,-18,2,26,-19,3,26,-19,2,25,-20,3,26,-19,2,27,-16,3,30,0,5,24,-21,4,21,-24,5,10,-30,5,-6,23,0,-20,25,1,-21,24,0,-13,29,4,-15,28,3,-18,27,3,-17,26,3,-10,31,4,-17,27,5,-22,23,4,-22,24,5,1,-1,0,21,-23,1,23,-23,1,29,-8,4,31,-8,3,27,-17,2,25,-20,3,25,-20,2,25,-20,3,25,-20,2,26,-20,2,25,-20,3,25,-20,3,25,-19,3,26,-19,5,29,-13,4,32,-1,5,28,-11,5,-2,2,0,-21,24,3,-10,31,4,-17,27,4,-20,24,3,-20,26,2,-20,25,4,-19,26,4,-13,28,5,-11,31,5,-13,15,2,28,-9,3,32,-6,4,29,-13,5,27,-18,4,26,-18,3,26,-19,2,26,-18,3,26,-19,2,26,-19,3,26,-19,3,27,-16,2,32,-7,3,29,-1,4,23,-23,5,24,-21,5,20,-21,2,-22,24,1,-24,21,0,-23,22,1,-17,27,3,-12,29,2,-18,27,3,-19,26,4,-18,26,4,-9,31,5,-7,31,5,23,17,4,32,-5,5,30,-9,5,28,-16,4,28,-16,3,27,-18,3,26,-18,2,26,-19,3,26,-19,3,29,-12,3,9,6,1,30,-9,3,23,-23,4,22,-23,3,23,-22,3,23,-22,2,24,-21,2,24,-23,3,25,-19,3,26,-19,3,27,-17,3,28,-16,3,30,-12,4,30,-9,5,32,-5,4,32,0,5,29,10,4,9,29,5,-10,31,5,-17,27,3,-21,24,4,-25,20,5,5,-4,0,25,-20,1,20,-25,1,16,-28,0,8,-31,1,-14,-27,0,-31,-6,1,-32,1,0,-32,6,1,-30,9,0,-29,13,1,-28,17,0,-27,17,1,-26,19,0,-25,20,0,-23,22,1,-25,21,0,-23,22,0,-22,23,1,-23,23,0,-20,24,1,-7,31,4,-5,32,5,-6,31,4,21,19,5,32,-3,5,31,-9,4,28,-15,5,26,-19,3,27,-17,2,31,-8,3,27,-12,3,20,-25,4,22,-23,5,22,-24,5,-17,18,0,-22,23,1,-21,25,0,-18,26,3,-2,32,4,-2,32,5,18,25,5,31,1,4,32,-7,5,30,-12,4,28,-14,4,28,-17,3,27,-17,3,27,-17,2,26,-18,3,27,-18,2,26,-19,2,26,-19,3,25,-19,2,26,-19,3,25,-20,2,25,-20,2,26,-20,3,25,-20,2,24,-20,3,24,-22,3,26,-18,3,16,-26,2,5,-32,4,17,-27,5,20,-25,4,22,-23,5,-16,16,1,-21,24,0,-17,27,1,-10,30,0,6,31,1,14,29,3,11,30,4,0,31,4,-19,26,5,-23,22,4,-23,23,2,-22,23,3,-22,23,4,-18,27,5,-10,30,5,-5,32,4,19,21,5,32,-3,4,31,-8,5,29,-14,5,28,-16,3,27,-18,3,26,-18,3,26,-19,2,26,-18,3,26,-19,2,26,-19,2,25,-20,3,26,-19,2,25,-20,2,25,-20,3,25,-20,2,26,-19,3]],[960,2260,[48,6,9,48,7,8,47,5,7,48,6,7,48,5,7,48,5,7,48,5,6,48,5,7,48,4,6,48,4,7,48,4,6,48,4,6,48,3,7,48,3,6,48,3,6,48,3,6,48,2,6,48,3,6,49,2,6,48,2,6,48,2,6,48,1,6,48,1,6,48,2,5,48,1,6,49,0,6,48,1,6,48,1,6,48,0,5,48,0,6,48,0,6,49,0,5,48,0,6,48,-1,6,48,0,5,48,-1,6,48,0,5,49,-1,6,48,-1,6,48,-1,5,48,-2,6,48,-1,5,48,-1,6,48,-2,5,49,-2,6,48,-1,5,48,-2,6,48,-2,5,48,-2,6,48,-2,5,48,-2,5,49,-2,6,48,-3,5,48,-2,6,48,-2,5,48,-3,5,48,-2,6,48,-2,5,48,-3,5,48,-3,6,49,-2,5,48,-3,5,48,-2,6,48,-3,5,48,-3,5,48,-2,5,48,-3,6,48,-3,5,48,-3,5,48,-2,5,49,-3,6,48,-3,5,48,-3,5,48,-2,5,48,-3,5,48,-3,6,48,-2,5,48,-3,5,48,-2,5,48,-3,5,49,-2,6,48,-3,5,48,-2,5,48,-3,5,48,-2,5,48,-2,5,48,-2,5,48,-2,6,48,-2,5,49,-2,5,48,-2,5,48,-2,5,48,-2,5,48,-1,5,48,-2,5,48,-1,5,49,-2,5,48,-1,5,48,-1,5,48,-1,6,48,-1,5,48,-1,5,49,-1,5,48,0,5,48,-1,5,48,0,5,48,0,5,48,0,5,49,0,5,48,0,5,48,0,5,48,1,5,48,1,5,48,1,5,49,1,5,48,1,5,48,1,5,48,2,5,48,2,5,48,2,5,48,2,5,49,2,5,48,3,5,48,2,5,48,3,4,48,3,5,48,4,5,48,3,5,48,4,5,48,4,5,48,4,5,48,5,5,48,5,5,48,5,5,48,4,5,48,5,5,48,5,4,48,4,5,48,5,5,48,4,5,48,4,5,48,4,5,48,4,5,48,3,5,48,3,5,48,3,4,48,2,5,48,2,5,48,1,5,48,1,5,48,-1,5,49,-1,5,48,-2,4,48,-4,5,48,-5,5,47,-6,5,48,-9,5,47,-11,5,23,-6,2]]];
  const strokes=DATA.map((s,n)=>{
    let x=s[0]/10,y=s[1]/10,t=0;const X=[x],Y=[y],T=[0],L=[0],d=s[2];
    for(let i=0;i<d.length;i+=3){
      const nx=x+d[i]/10,ny=y+d[i+1]/10;
      L.push(L[L.length-1]+Math.hypot(nx-x,ny-y));x=nx;y=ny;t+=d[i+2];X.push(x);Y.push(y);T.push(t)}
    const el=document.createElementNS(NS,'path');
    el.setAttribute('d','M'+X.map((v,i)=>v.toFixed(1)+' '+Y[i].toFixed(1)).join('L'));
    (n===DATA.length-1?gU:gT).appendChild(el);
    const len=L[L.length-1],dot=len<14;
    if(dot)el.style.opacity=0;else{el.style.strokeDasharray=len+' '+len;el.style.strokeDashoffset=len}
    return {el,X,Y,T,L,len,dot,dd:Math.max(T[T.length-1],140)}
  });
  /* underline = tapered swoosh (thin-thick-thin) built from its pen path */
  (function(){
    const u=strokes[strokes.length-1],n=u.X.length,a=[],b=[];
    for(let i=0;i<n;i++){
      const p=Math.max(0,i-1),q=Math.min(n-1,i+1);
      let nx=-(u.Y[q]-u.Y[p]),ny=u.X[q]-u.X[p];const l=Math.hypot(nx,ny)||1;nx/=l;ny/=l;
      const w=Math.pow(Math.max(0,Math.sin(Math.PI*Math.pow(i/(n-1),.8))),.9)*3.4+.35;
      a.push((u.X[i]+nx*w).toFixed(1)+' '+(u.Y[i]+ny*w).toFixed(1));
      b.push((u.X[i]-nx*w).toFixed(1)+' '+(u.Y[i]-ny*w).toFixed(1));
    }
    document.getElementById('sgUnder').setAttribute('d','M'+a.join('L')+'L'+b.reverse().join('L')+'Z');
  })();

  const ease=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
  const SC=.85,START=900;                 // SC: writing speed (nano = vadhare dhimu lakhvu)
  let total=START;
  strokes.forEach((s,i)=>{
    s.D=s.dd*SC;s.lift=s.dot?200:260;
    if(i>0)total+=s.lift;
    s.start=total;total+=s.D;
  });
  const WRITE_END=total,TOTAL=total+1100;
  function seek(s,q){
    let lo=0,hi=s.T.length-1;
    while(hi-lo>1){const m=(lo+hi)>>1;if(s.T[m]<=q)lo=m;else hi=m}
    const t0=s.T[lo],t1=s.T[hi],f=t1>t0?Math.min(1,Math.max(0,(q-t0)/(t1-t0))):0;
    return {lo,hi,f,fast:(s.L[hi]-s.L[lo])/(t1-t0+1e-6)>3}
  }
  const t0=performance.now();
  setTimeout(()=>{if(!done)it.classList.add('s1')},80);
  function frame(t){
    if(done)return;const el=t-t0;
    let shown=false;
    strokes.forEach((s,i)=>{
      const q=(el-s.start)/SC;
      if(q>=s.dd){if(s.dot)s.el.style.opacity=1;else s.el.style.strokeDashoffset=0;return}
      if(q>0){
        const r=seek(s,q),pos=s.L[r.lo]+(s.L[r.hi]-s.L[r.lo])*r.f;
        if(s.dot)s.el.style.opacity=1;else s.el.style.strokeDashoffset=s.len-pos;
        pen.setAttribute('cx',s.X[r.lo]+(s.X[r.hi]-s.X[r.lo])*r.f);
        pen.setAttribute('cy',s.Y[r.lo]+(s.Y[r.hi]-s.Y[r.lo])*r.f);
        pen.style.opacity=r.fast?.3:1;shown=true;
      }else if(i>0&&el>s.start-s.lift){          // pen hawa ma aagal ni shuruat par jaay chhe
        const pv=strokes[i-1],ax=pv.X[pv.X.length-1],ay=pv.Y[pv.Y.length-1],bx=s.X[0],by=s.Y[0];
        const m=(el-(s.start-s.lift))/s.lift,e2=ease(m);
        pen.setAttribute('cx',ax+(bx-ax)*e2);
        pen.setAttribute('cy',ay+(by-ay)*e2-Math.sin(m*Math.PI)*22);
        pen.style.opacity=.5;shown=true;
      }
    });
    if(!shown&&el>WRITE_END)pen.style.opacity=0;
    if(el>WRITE_END){pen.style.opacity=0;it.classList.add('s3')}
    line.style.transform='scaleX('+Math.min(1,el/TOTAL)+')';
    if(el>=TOTAL){finish();return}
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();

/* ===== EXTRA ANIMATIONS (aura cursor, tilt, magnetic, stagger) ===== */
(function(){
  const fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
  // stagger reveal, clear delay after reveal so hover stays snappy
  $$('.rv').forEach((e,i)=>{e.style.transitionDelay=(i%4)*.09+'s'});
  const io2=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const t=e.target;setTimeout(()=>{t.style.transitionDelay=''},1400);io2.unobserve(t)}}));
  $$('.rv').forEach(e=>io2.observe(e));
  if(!fine)return;
  const aura=$('#aura');let mx=innerWidth/2,my=innerHeight/2,ax=mx,ay=my;
  addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;aura.style.opacity=1});
  document.addEventListener('mouseleave',()=>aura.style.opacity=0);
  (function loop(){ax+=(mx-ax)*.12;ay+=(my-ay)*.12;aura.style.transform='translate('+ax+'px,'+ay+'px)';requestAnimationFrame(loop)})();
  // 3D tilt on hero photo
  const ph=$('.hero .ph');
  if(ph){ph.addEventListener('mousemove',e=>{const r=ph.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    ph.style.transition='transform .1s';ph.style.transform='perspective(900px) rotateY('+x*14+'deg) rotateX('+(-y*14)+'deg)'});
    ph.addEventListener('mouseleave',()=>{ph.style.transition='transform .6s';ph.style.transform=''})}
  // magnetic buttons
  $$('.cta .btn,#shBtn,.hr .btn.p').forEach(b=>{b.classList.add('mag');
    b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.25)+'px,'+((e.clientY-r.top-r.height/2)*.35-3)+'px)'});
    b.addEventListener('mouseleave',()=>b.style.transform='')});
  // parallax for floating glyphs
  const fx=$$('.fx span');
  addEventListener('mousemove',e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;fx.forEach((s,i)=>{s.style.translate=(x*(20+i*8))+'px '+(y*(20+i*8))+'px'})});
})();
