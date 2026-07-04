
const backToTopBtn = document.getElementById("backToTop");


window.onscroll = function () {
    // ถ้าเลื่อนลงมาเกิน 200px ให้แสดงปุ่ม
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// เมื่อคลิกที่ปุ่ม ให้เลื่อนกลับไปบนสุดแบบสมูท
backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});