function showOrHideModal(){
    $("#modal").fadeToggle("fast");
};

$(".button, .modal-footer-exit, .modal-footer-confirm").click(showOrHideModal);
