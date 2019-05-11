function openNav() {
    var x = window.matchMedia("(max-width:900px)");

    if (x.matches) {
        document.getElementById("mySidepanel").style.width = "85%";
    } else {
        document.getElementById("mySidepanel").style.width = "35%";
    }
};
    
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
};

function openPhone() {
    var x = window.matchMedia("(max-width:900px)");

    if (x.matches) {
        document.getElementById("myOpenphone").style.width = "85%";
    } else {
        document.getElementById("myOpenphone").style.width = "35%";
    }
};
    
function closePhone() {
    document.getElementById("myOpenphone").style.width = "0";
};

$(function() {
    var chk = $('.custom-control-input');
    var btn = $('#send');
  
    chk.on('change', function() {
      btn.prop("disabled", !this.checked);//true: disabled, false: enabled
    }).trigger('change'); //page load trigger event
});

