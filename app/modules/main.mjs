import { config } from './config.mjs';
import { utils } from './utils.mjs';
import { router } from './router.mjs';

if(location.pathname === '/boarding.html'){
  location.href = location.origin;
}

const app = {
    init(){

      utils.uptotop();

      router.rout(location.pathname)

    },
    messenger(){


      for (let i = 0; i < config.menu.length; i++) {
        if(!config.menu[i].active){

          try {
            document.getElementById(config.menu[i].id).remove();
          } catch (err) {

          }


          if(config.menu[i].id === 'menu-item-970'){

            if(location.pathname === '/' || location.pathname === '/index.html'){
              document.getElementsByClassName('fl-node-5df05eb61775c')[0].remove();

            }

            if(location.pathname === '/services.html'){
              try {
                document.getElementById('menu-item-480').remove();
              } catch (err) {

              }


            }


          }
        }
      }


      document.getElementById('yearnow').textContent = utils.getYear();

      window.onload = function(){




        if(config.tawk.enabled){

          if(typeof Tawk_API === 'undefined'){
            window.Tawk_API = {};
          }

          let Tawk_LoadStart = new Date();

          let s1=document.createElement("script");

          s1.async = true;
          s1.src = (config.tawk.basePath + config.tawk.api);
          s1.charset = 'UTF-8';
          s1.setAttribute('crossorigin','*');
          document.body.append(s1);
        }

        if(config.fb.enabled){
          let js = document.createElement("script");
          js.id = 'facebook-jssdk';
          js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&appId=292761771596497&autoLogAppEvents=1';
          document.body.append(js);


        }
      }

      utils.totop(0)

      return this;

    }
}


app.messenger().init();
