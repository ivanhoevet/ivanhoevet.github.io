import { config } from './config.mjs';

const utils = {
  totop(i){
    window.scroll({
      top: i,
      left: 0,
      behavior: 'smooth'
    });
  },
  debounce(func, wait, immediate) {
  	var timeout;
  	return function() {
  		var context = this, args = arguments;
  		var later = function() {
  			timeout = null;
  			if (!immediate) func.apply(context, args);
  		};
  		var callNow = immediate && !timeout;
  		clearTimeout(timeout);
  		timeout = setTimeout(later, wait);
  		if (callNow) func.apply(context, args);
  	};
  },
  scrollFunction(i){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      i.style.display = "block";
    } else {
      i.style.display = "none";
    }
  },
  uptotop(){

    let ele = document.createElement('div');
    ele.id = 'uptotop';
    ele.classList.add('fa','fa-chevron-up');
    ele.onclick = function(){
      utils.totop(0)
    }

    window.addEventListener('scroll', utils.debounce(function(){utils.scrollFunction(ele)}, 500))

    document.body.append(ele)

  },
  toHex(str){
    let arr = [];
    for (var n = 0, l = str.length; n < l; n++) {
      arr.push(Number(str.charCodeAt(n)).toString(16));
    }
    return arr.join('');
  },
  isEmail(mail) {

    if(typeof mail !== 'string' || mail.length < config.email.test.min || mail.length > config.email.test.max){
      return (false);
    }

    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
      return (true);
    }

    return (false);
  },
  getYear(){
    return JSON.stringify(new Date(Date.now()).getFullYear());
  }
}

export { utils }
