$(document).ready(function () {

 
    $(".accordion-item-title").on("click",function(){
        $(this).toggleClass("open");
        $(this).next(".accordion-item-content").stop();
        $(this).next(".accordion-item-content").slideToggle();
    })
  
   
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
          $this.html(event.strftime(''
              + '<div class="countdown"><span class="countdown__number">%D</span><span class="countdown__title">Дней</span></div>'
              + '<div class="countdown"><span class="countdown__number">%H</span><span class="countdown__title">Часов</span></div>'
              + '<div class="countdown"><span class="countdown__number">%M</span><span class="countdown__title">Минут</span></div>'
              + '<div class="countdown"><span class="countdown__number">%S</span><span class="countdown__title">Секунд</span></div>'));
        });
    });

    
    $(".tabs-caption").on("click", ".tab-button:not(.active)", function() {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active")
            .closest(".tabs")
            .find(".tabs-content")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active");
    });

});

