$(function () {
    $(".donation-handle").click(function (e) {
        e.preventDefault();
        $(".donation-handle-container").toggleClass("donation-handle-container-shifted");
        $(".fixed-header").toggleClass("fixed-header-shifted");
        $(".donation-box").toggleClass("donation-box-visible");
        $(".shiftable-content").toggleClass("shifted");
    });
});