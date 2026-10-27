(() => {
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const state = { kit: 'away', view: 'front', name: 'LAFAYETTE', number: 3, dragStartX: null, dragStartY: null, dragAngle: 0 };
  const colors = {
    away: { shirt:'#4b238d', shirt2:'#321260', sleeve:'#f3f0fa', accent:'#b5a0f1', ink:'#fff', collar:'#24103f', home:false },
    home: { shirt:'#f8f7fb', shirt2:'#e6e1ef', sleeve:'#4b238d', accent:'#6f43c4', ink:'#4b238d', collar:'#3a1a72', home:true }
  };
  const escapeXml = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
  const cleanName = () => state.name.trim().toUpperCase().slice(0,14) || 'PLAYER';
  function jerseySvg(kit='away', view='front', number=state.number, name=state.name) {
    const c = colors[kit]; const n = escapeXml(String(number).padStart(2,'0')); const nm = escapeXml(String(name).trim().toUpperCase().slice(0,14) || 'PLAYER');
    const front = view === 'front';
    const shirt = `M94 87 L126 66 Q150 83 174 66 L206 87 L245 113 L222 164 L206 151 L209 315 Q150 338 91 315 L94 151 L78 164 L55 113 Z`;
    const sleeves = `M94 87 L70 98 L42 149 L75 168 L96 132 Z M206 87 L230 98 L258 149 L225 168 L204 132 Z`;
    const pattern = kit==='away'
      ? `<path d="M57 224 L95 185 L111 203 L87 235 L106 251 L91 270 L60 246 Z M243 224 L205 185 L189 203 L213 235 L194 251 L209 270 L240 246 Z" fill="${c.accent}" opacity=".85"/><path d="M92 281 L115 260 L130 274 L113 294 L96 304 Z M208 281 L185 260 L170 274 L187 294 L204 304 Z" fill="#fff" opacity=".18"/>`
      : `<path d="M45 132 L75 151 L89 139 L77 173 L47 156 Z M255 132 L225 151 L211 139 L223 173 L253 156 Z" fill="${c.accent}"/><path d="M94 192 H206 V230 H94 Z" fill="${c.accent}"/><path d="M95 193 L119 193 L95 218 Z M205 193 L181 193 L205 218 Z" fill="#fff" opacity=".9"/>`;
    const collar = `<path d="M126 67 Q150 92 174 67 L165 57 Q150 72 135 57 Z" fill="${c.collar}"/><path d="M134 64 Q150 78 166 64" fill="none" stroke="${c.accent}" stroke-width="3"/>`;
    const chest = front ? `<g><image href="assets/school-logo.gif" x="157" y="112" width="27" height="27" preserveAspectRatio="xMidYMid meet"/><text x="150" y="159" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" font-weight="900" letter-spacing="1.5" fill="${c.ink}">LAFAYETTE</text><text x="150" y="237" text-anchor="middle" font-family="Arial,sans-serif" font-size="65" font-weight="900" fill="${c.ink}" stroke="${c.home?'#fff':'#4b238d'}" stroke-width=".5" paint-order="stroke">${n}</text><path d="M117 245 H183" stroke="${c.accent}" stroke-width="2" opacity=".9"/></g>`
      : `<g><text x="150" y="142" text-anchor="middle" font-family="Arial,sans-serif" font-size="14" font-weight="900" letter-spacing="1.8" fill="${c.ink}">${nm}</text><text x="150" y="236" text-anchor="middle" font-family="Arial,sans-serif" font-size="84" font-weight="900" fill="${c.ink}">${n}</text><text x="150" y="276" text-anchor="middle" font-family="Arial,sans-serif" font-size="9" font-weight="700" letter-spacing="2" fill="${c.ink}" opacity=".75">VARSITY SOCCER</text></g>`;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 360" role="img" aria-label="${kit} jersey ${front?'front':'back'} preview"><defs><linearGradient id="fabric" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c.shirt}"/><stop offset=".52" stop-color="${c.shirt2}"/><stop offset="1" stop-color="${c.shirt}"/></linearGradient><linearGradient id="shade" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#000" stop-opacity=".12"/><stop offset=".22" stop-color="#fff" stop-opacity=".12"/><stop offset=".6" stop-color="#fff" stop-opacity=".02"/><stop offset="1" stop-color="#000" stop-opacity=".16"/></linearGradient><clipPath id="bodyClip"><path d="${shirt}"/></clipPath></defs><ellipse cx="150" cy="331" rx="76" ry="8" fill="#24123e" opacity=".13"/><g stroke-linejoin="round" stroke-linecap="round"><path d="${sleeves}" fill="${c.sleeve}" stroke="${c.shirt2}" stroke-width="2"/><path d="M45 151 L75 168 L83 151" fill="none" stroke="${c.accent}" stroke-width="5"/><path d="M255 151 L225 168 L217 151" fill="none" stroke="${c.accent}" stroke-width="5"/><path d="${shirt}" fill="url(#fabric)" stroke="${c.shirt2}" stroke-width="2"/><g clip-path="url(#bodyClip)"><rect x="42" y="60" width="216" height="270" fill="url(#shade)"/>${pattern}<path d="M95 90 Q104 155 101 310 M205 90 Q196 155 199 310" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="3"/>${front?`<path d="M103 90 Q150 111 197 90" fill="none" stroke="${c.accent}" stroke-width="2" opacity=".7"/>`:''}</g>${collar}${front?`<path d="M94 151 L104 156 M206 151 L196 156" stroke="${c.accent}" stroke-width="3"/>`:''}${chest}<path d="M105 315 Q150 326 195 315" fill="none" stroke="${c.accent}" stroke-width="3"/><path d="M91 317 Q150 332 209 317" fill="none" stroke="#000" stroke-opacity=".08" stroke-width="4"/></g></svg>`;
  }
  function mountJersey(el, kit, view, number, name) { if(el) el.innerHTML = jerseySvg(kit,view,number,name); }
  function update() {
    const nameInput = $('#playerName'), numberInput = $('#playerNumber');
    state.name = (nameInput.value || '').toUpperCase().slice(0,14); nameInput.value = state.name;
    state.number = Math.max(0,Math.min(99,Number.parseInt(numberInput.value || '0',10))); numberInput.value = state.number;
    $('#nameCount').textContent = `${state.name.length} / 14`;
    $('#previewKitLabel').textContent = `${state.kit==='away'?'AWAY':'HOME'} KIT · ${state.kit==='away'?'02':'01'}`;
    $('#stageNumber').textContent = String(state.number).padStart(2,'0');
    $$('.swatch').forEach(b=>b.classList.toggle('selected',b.dataset.kit===state.kit));
    $$('.view-btn').forEach(b=>b.classList.toggle('active',b.dataset.view===state.view));
    mountJersey($('#previewShirt'),state.kit,state.view,state.number,cleanName());
    mountJersey($('#heroJersey'),'away','front',7,'LAFAYETTE');
    mountJersey($('#homeCardJersey'),'home','front',state.number,cleanName());
    mountJersey($('#awayCardJersey'),'away','front',state.number,cleanName());
  }
  function setKit(kit){state.kit=kit;update();$('#customize').scrollIntoView({behavior:'smooth',block:'start'});}
  $('#playerName').addEventListener('input',update);
  $('#playerNumber').addEventListener('input',update);
  $('#playerNumber').addEventListener('change',update);
  $$('.swatch').forEach(b=>b.addEventListener('click',()=>{state.kit=b.dataset.kit;update()}));
  $$('.kit-card').forEach(b=>b.addEventListener('click',()=>setKit(b.dataset.kit)));
  $$('.view-btn').forEach(b=>b.addEventListener('click',()=>{state.view=b.dataset.view;update()}));
  $$('.number-presets button').forEach(b=>b.addEventListener('click',()=>{$('#playerNumber').value=b.dataset.number;update()}));
  $('#minusNumber').addEventListener('click',()=>{$('#playerNumber').value=Math.max(0,state.number-1);update()});
  $('#plusNumber').addEventListener('click',()=>{$('#playerNumber').value=Math.min(99,state.number+1);update()});
  $('#resetCustomizer').addEventListener('click',()=>{state.kit='away';state.view='front';$('#playerName').value='LAFAYETTE';$('#playerNumber').value='3';update()});
  const shirt=$('#previewShirt');
  shirt.addEventListener('pointerdown',e=>{state.dragStartX=e.clientX;state.dragStartY=e.clientY;state.dragAngle=0;shirt.setPointerCapture?.(e.pointerId)});
  shirt.addEventListener('pointermove',e=>{if(state.dragStartX===null)return;const dx=e.clientX-state.dragStartX;state.dragAngle=Math.max(-28,Math.min(28,dx*.45));shirt.style.transform=`perspective(700px) rotateY(${state.dragAngle}deg) rotateZ(${state.dragAngle*.08}deg)`});
  const finishDrag=()=>{if(state.dragStartX===null)return;const dx=state.dragAngle; if(Math.abs(dx)>18){state.view=state.view==='front'?'back':'front';update()} shirt.style.transform='';state.dragStartX=null;state.dragStartY=null};
  shirt.addEventListener('pointerup',finishDrag);shirt.addEventListener('pointercancel',finishDrag);
  shirt.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){state.view=state.view==='front'?'back':'front';update()}});
  $('#savePreview').addEventListener('click',()=>{const svg=jerseySvg(state.kit,state.view,state.number,cleanName());const blob=new Blob([svg],{type:'image/svg+xml;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`lafayette-${state.kit}-${state.view}-${state.number}.svg`;document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url)});
  update();
})();
