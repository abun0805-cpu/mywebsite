function toggleCard(button){
  const card = button.closest('.panel-card');
  const wasOpen = card.classList.contains('open');

  document.querySelectorAll('.panel-card.open').forEach(c=>{
    c.classList.remove('open');
    const b=c.querySelector('.details-btn b');
    if(b) b.textContent='⌄';
  });

  if(!wasOpen){
    card.classList.add('open');
    const b=button.querySelector('b');
    if(b) b.textContent='⌃';
  }
}

function selectPanel(name){
  const toast=document.getElementById('toast');
  toast.textContent=name+' selected. Connect your checkout/order system here.';
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),2800);
}

const particles=document.getElementById('particles');
for(let i=0;i<55;i++){
  const p=document.createElement('i');
  p.className='particle';
  p.style.left=(Math.random()*100)+'%';
  p.style.top=(60+Math.random()*40)+'%';
  p.style.animationDelay=(Math.random()*5)+'s';
  p.style.animationDuration=(3+Math.random()*5)+'s';
  particles.appendChild(p);
}
