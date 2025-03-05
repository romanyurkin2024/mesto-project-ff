(()=>{"use strict";var e=function(e,t){return function(n,r,o,c){n.likes.some((function(e){return e._id===r}))?t(n._id).then((function(e){o.classList.remove("card__like-button_is-active"),c.textContent=e.likes.length,n.likes=e.likes})).catch((function(e){console.log(e)})):e(n._id).then((function(e){o.classList.add("card__like-button_is-active"),c.textContent=e.likes.length,n.likes=e.likes})).catch((function(e){console.log(e)}))}};function t(e,t,n){var r=n.cardTemplate,o=n.openPopupImageModal,c=n.openPopupConfirmationModal,a=n.handleLikeClick,i=r.querySelector(".card").cloneNode(!0),u=i.querySelector(".card__image"),l=i.querySelector(".card__title"),s=i.querySelector(".card__delete-button"),d=i.querySelector(".card__like-button"),p=i.querySelector(".card__like-counter");return!(e.owner._id===t)&&s.remove(),e.likes.some((function(e){return e._id===t}))&&d.classList.add("card__like-button_is-active"),u.src=e.link,u.alt="Изображение "+e.name,l.textContent=e.name,p.textContent=e.likes.length,u.addEventListener("click",(function(){return o(e.link,e.name)})),s.addEventListener("click",(function(){return c(e._id)})),d.addEventListener("click",(function(){return a(e,t,d,p)})),i}var n=function(e){"Escape"===e.key&&r(document.querySelector(".popup_is-opened"))};function r(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",n)}function o(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",n)}function c(e,t){e.classList.remove(t)}function a(e,t){e.classList.add(t),e.disabled=!0}var i=function(e){return e.some((function(e){return!e.validity.valid}))};function u(e,t){var n=e.querySelectorAll(t.inputSelector);e.reset(),n.forEach((function(n){n.classList.remove(t.inputErrorClass),c(e.querySelector(".".concat(n.id,"__input-error")),t.errorClass)}))}var l={baseUrl:"https://mesto.nomoreparties.co/v1/wff-cohort-33",headers:{authorization:"55d1b029-4425-46a4-9f07-dcff1368dd95","Content-Type":"application/json"}};function s(e){return e.ok?e.json():Promise.reject("Упссс... Произошла ошибка: ".concat(e.status))}function d(){return fetch("".concat(l.baseUrl,"/users/me"),{headers:l.headers}).then((function(e){return s(e)}))}function p(e){return fetch("".concat(l.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:l.headers}).then((function(e){return s(e)}))}function f(e){return fetch("".concat(l.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:l.headers}).then((function(e){return s(e)}))}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var _=document.querySelector("#card-template").content,v=document.querySelectorAll(".popup"),h=document.querySelector(".places__list"),y=document.querySelector(".popup_type_edit"),b=document.querySelector(".popup_type_new-card"),S=document.querySelector(".popup_type_new-avatar"),g=document.querySelector(".popup_type_image"),k=document.querySelector(".popup_type_delete-card"),C=document.querySelector(".profile__edit-button"),L=document.querySelector(".profile__add-button"),q=document.querySelector(".profile__title"),E=document.querySelector(".profile__image"),x=document.querySelector(".profile__description"),A=document.forms["edit-profile"],w=A.name,P=A.description,T=document.forms["new-place"],M=document.forms["new-avatar"],U=document.forms.delete__card,I=T["place-name"],j=T.link,O={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function B(e,t){var n=g.querySelector(".popup__image");g.querySelector(".popup__caption").textContent=t,n.src=e,n.alt="Изображение "+t,o(g)}function D(e){U.elements["card-id"].value=e,o(k)}function N(e,t){t.textContent=e?"Сохранение...":"Сохранить"}function H(){Promise.all([fetch("".concat(l.baseUrl,"/cards"),{headers:l.headers}).then((function(e){return s(e)})),d()]).then((function(n){var r,o,c=(o=2,function(e){if(Array.isArray(e))return e}(r=n)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(r,o)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=c[0],i=c[1];h.innerHTML="",a.forEach((function(n){h.append(t(n,i._id,{cardTemplate:_,openPopupImageModal:B,openPopupConfirmationModal:D,handleLikeClick:e(p,f)}))}))})).catch((function(e){console.log(e)}))}d().then((function(e){q.textContent=e.name,x.textContent=e.about,E.style.backgroundImage="url(".concat(e.avatar,")")})).catch((function(e){console.log(e)})),v.forEach((function(e){var t;(t=e).querySelector(".popup__close").addEventListener("click",(function(){return r(t)})),t.addEventListener("mousedown",(function(e){e.target.classList.contains("popup")&&r(t)}))})),C.addEventListener("click",(function(){u(A,O),P.value=x.textContent,w.value=q.textContent,o(y)})),E.addEventListener("click",(function(){o(S)})),L.addEventListener("click",(function(){u(T,O),o(b)})),A.addEventListener("submit",(function(e){e.preventDefault();var t,n,o=e.target.querySelector(".popup__button");N(!0,o),(t=w.value,n=P.value,fetch("".concat(l.baseUrl,"/users/me"),{method:"PATCH",headers:l.headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return s(e)}))).then((function(t){x.textContent=P.value,q.textContent=w.value,r(e.target.closest(".popup"))})).catch((function(e){console.log(e)})).finally((function(){N(!1,o)}))})),T.addEventListener("submit",(function(n){n.preventDefault();var o,c,a=n.target.querySelector(".popup__button");N(!0,a),(o=I.value,c=j.value,fetch("".concat(l.baseUrl,"/cards"),{method:"POST",headers:l.headers,body:JSON.stringify({name:o,link:c})}).then((function(e){return s(e)}))).then((function(o){h.prepend(t(o,o.owner._id,{cardTemplate:_,openPopupImageModal:B,openPopupConfirmationModal:D,handleLikeClick:e(p,f)})),T.reset(),r(n.target.closest(".popup"))})).catch((function(e){console.log(e)})).finally((function(){N(!1,a)}))})),U.addEventListener("submit",(function(e){var t;e.preventDefault(),(t=U.elements["card-id"].value,fetch("".concat(l.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:l.headers}).then((function(e){return s(e)}))).then((function(t){r(e.target.closest(".popup")),H()})).catch((function(e){console.log(e)}))})),M.addEventListener("submit",(function(e){e.preventDefault();var t,n=e.target.querySelector(".popup__button");N(!0,n),(t=M["avatar-link"].value,fetch("".concat(l.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:l.headers,body:JSON.stringify({avatar:t})}).then((function(e){return s(e)}))).then((function(t){r(e.target.closest(".popup")),E.style.backgroundImage="url(".concat(t.avatar,")"),M.reset()})).catch((function(e){alert(e)})).finally((function(){N(!1,n)}))})),H(),function(e){document.querySelectorAll(e.formSelector).forEach((function(t){var n=t.querySelector(e.submitButtonSelector),r=t.querySelectorAll(e.inputSelector);"delete__card"!==t.id&&a(n,e.inactiveButtonClass),r.forEach((function(o){var u=t.querySelector(".".concat(o.id,"__input-error"));o.addEventListener("input",(function(t){o.validity.patternMismatch?o.setCustomValidity(o.dataset.errorMessage):o.setCustomValidity(""),t.target.validity.valid?(t.target.classList.remove(e.inputErrorClass),c(u,e.errorClass),i(Array.from(r))||function(e,t){e.classList.remove(t),e.disabled=!1}(n,e.inactiveButtonClass)):(t.target.classList.add(e.inputErrorClass),function(e,t,n){e.textContent=t,e.classList.add(n)}(u,t.target.validationMessage,e.errorClass),i(Array.from(r))&&a(n,e.inactiveButtonClass))}))}))}))}(O)})();