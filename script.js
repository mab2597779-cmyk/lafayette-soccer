const kits={
 home:{image:'assets/home-kit.jpg',tag:'HOME KIT / CONCEPT 01',title:'THE WHITE|STANDARD.',desc:'A clean white base with Lafayette violet, pixel-inspired bands, and the school mascot at the chest. A modern take on a classic identity.',color:'WHITE / VIOLET',lang:'PIXEL MOTION',dialog:'The home kit concept uses a white base, Lafayette violet, a pixel-inspired band, and mascot placement. The image is a concept mockup and includes supplier watermarking from the original reference.'},
 away:{image:'assets/away-kit.png',tag:'AWAY KIT / CONCEPT 02',title:'VIOLET|ENERGY.',desc:'A bold violet base with white sleeves and geometric graphics. The front and back presentation puts LAFAYETTE and the player number at the center of the design.',color:'VIOLET / WHITE',lang:'GEOMETRIC MOTION',dialog:'The away kit concept uses a deep violet base, white sleeve panels, angular graphics, and a clear back name-and-number layout. The reference image shows number 3.'}
};
let current='home',rotation=0,dragging=false,startX=0,startRotation=0;
const card=document.getElementById('jerseyCard'),stage=document.getElementById('stage');
const num=document.getElementById('numberSelect'),overlay=document.getElementById('numberOverlay');
for(let i=1;i<=99;i++){const o=document.createElement('option');o.value=String(i).padStart(2,'0');o.textContent=String(i).padStart(2,'0');if(i===7)o.selected=true;num.appendChild(o)}
function renderKit(which){current=which;const k=kits[which];document.getElementById('kitImage').src=k.image;document.getElementById('kitImage').alt=(which==='home'?'Home white':'Away violet')+' Lafayette jersey concept';document.getElementById('kitTag').textContent=k.tag;document.getElementById('kitTitle').innerHTML=k.title.split('|').map((s,i)=>i?'<br><em>'+s+'</em>':s).join('');document.getElementById('kitDesc').textContent=k.desc;document.getElementById('primaryColor').textContent=k.color;document.getElementById('designLang').textContent=k.lang;document.querySelectorAll('[data-kit]').forEach(el=>{el.classList.toggle('active',el.classList.contains('kit-tab')&&el.dataset.kit===which);el.classList.toggle('selected',el.classList.contains('thumb')&&el.dataset.kit===which)});rotation=0;applyRotation()}
function applyRotation(){card.style.transform=`rotateY(${rotation}deg) rotateX(${Math.sin(rotation*Math.PI/180)*2}deg)`;card.style.filter=`drop-shadow(${Math.sin(rotation*Math.PI/180)*16}px 25px 30px #0007)`}
document.querySelectorAll('[data-kit]').forEach(el=>el.addEventListener('click',()=>renderKit(el.dataset.kit)));
num.addEventListener('change',()=>{overlay.textContent=num.value;overlay.style.fontSize='0px';document.getElementById('numberCurrent').textContent='SELECTED: #'+num.value;});
document.getElementById('rotateLeft').addEventListener('click',()=>{rotation-=25;applyRotation()});
document.getElementById('rotateRight').addEventListener('click',()=>{rotation+=25;applyRotation()});
document.getElementById('resetView').addEventListener('click',()=>{rotation=0;applyRotation()});
stage.addEventListener('pointerdown',e=>{dragging=true;startX=e.clientX;startRotation=rotation;stage.setPointerCapture(e.pointerId)});
stage.addEventListener('pointermove',e=>{if(!dragging)return;rotation=startRotation+(e.clientX-startX)*.65;applyRotation()});
stage.addEventListener('pointerup',()=>dragging=false);stage.addEventListener('pointercancel',()=>dragging=false);
const dialog=document.getElementById('detailsDialog');
document.getElementById('viewDetails').addEventListener('click',()=>{document.getElementById('dialogTitle').textContent=current==='home'?'HOME KIT DETAILS':'AWAY KIT DETAILS';document.getElementById('dialogText').textContent=kits[current].dialog;dialog.showModal()});
document.getElementById('closeDialog').addEventListener('click',()=>dialog.close());
const toggle=document.querySelector('.menu-toggle'),nav=document.getElementById('nav');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}));
