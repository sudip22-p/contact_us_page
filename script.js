const text_for_name=document.getElementsByClassName("text-for-name")[0];
const nam=document.getElementById("name");
const text_for_email=document.getElementsByClassName("text-for-email")[0];
const email=document.getElementById("email");
const text_for_message=document.getElementsByClassName("text-for-message")[0];
const inputs=document.getElementsByTagName("input");
const message=document.getElementById("message");
text_for_name.addEventListener("click",()=>{
    nam.focus();
});
text_for_email.addEventListener("click",()=>{
    email.focus();
});
text_for_message.addEventListener("click",()=>{
    message.focus();
});
nam.addEventListener("focus",()=>{
    text_for_name.style.color="#417ff3";
    text_for_name.style.transition="1.5s";
    text_for_name.style.transform="translateY(-20px)";
});
email.addEventListener("focus",()=>{
    text_for_email.style.color="#417ff3";
    text_for_email.style.transition="1.5s";
    text_for_email.style.transform="translateY(-20px)";
});
message.addEventListener("focus",()=>{
    text_for_message.style.color="#417ff3";
    text_for_message.style.transition="1.5s";
    text_for_message.style.transform="translateY(-20px)";
});