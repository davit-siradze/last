
  
  const  loginBtn = document.querySelectorAll(".login-btn"),
  registerBtn = document.querySelectorAll(".register-btn"),
  lostPassBtn = document.querySelectorAll(".lost-pass-btn"),
  box = document.querySelector(".box"),
  loginForm = document.querySelector(".login-form"),
  registerForm = document.querySelector(".register-form"),
  lostPasswordForm = document.querySelector(".lost-password-form");

registerBtn.forEach((btn) =>{
btn.addEventListener("click",() =>{
box.classList.add("slide-active");
registerForm.classList.remove("form-hidden");
loginForm.classList.add("form-hidden");
lostPasswordForm.classList.add("form-hidden");
});
});

loginBtn.forEach((btn) =>{
btn.addEventListener("click",() =>{
box.classList.remove("slide-active");
registerForm.classList.add("form-hidden");
loginForm.classList.remove("form-hidden");
lostPasswordForm.classList.add("form-hidden");
});
});

lostPassBtn.forEach((btn) =>{
btn.addEventListener("click",() =>{
registerForm.classList.add("form-hidden");
loginForm.classList.add("form-hidden");
lostPasswordForm.classList.remove("form-hidden");
});
});




var t1 = new TimelineMax({paused: true});

t1.to(".one", 0.8, {
   y: 6,
   rotation: 45,
   ease: Expo.easeInOut
});
t1.to(".two", 0.8, {
   y: -6,
   rotation: -45,
   ease: Expo.easeInOut,
   delay: -0.8
});
 
t1.to(".menu", 2, {
   top: "0%",
   ease: Expo.easeInOut,
   delay: -2
});

t1.staggerFrom(".menu ul li", 1.3, {x: -200, opacity: 0, ease:Expo.easeOut}, 0.1);

t1.reverse();
$(document).on("click", ".toggle-btn", function() {
   t1.reversed(!t1.reversed());
});
$(document).on("click", "a1", function() {
   t1.reversed(!t1.reversed());
   
});

