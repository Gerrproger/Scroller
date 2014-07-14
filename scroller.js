(function(){
window.scroller = function(wrap, shift, time){
    if(!shift) shift = 0;
    if(!time) time = 300;
    var $wrap = $('#' + wrap),
    $links = $wrap.find('a'),
    $b = $('html, body'),
    $d = $(document),
    pos = [],
    inc = 0;
    $links.each(function(){
        var $l = $(this),
        thisShift = $l.data('shift'),
        $el = $('#' + $l.attr('data-inc', inc).data('target'));
        if(!thisShift) thisShift = shift;
        pos[inc] = $el.offset().top - parseInt($el.css('margin-top').replace('px', '')) - thisShift;
        inc++;
    }).click(function(e){
        e.preventDefault();
        var $this = $(this);
        if(!$this.hasClass('active')) $b.animate({scrollTop: pos[$this.data('inc')]}, time);
    });
    $d.scroll(function(){
        var scr = $d.scrollTop() + 10,
        act = null;
        for(var i= 0, l=pos.length; i<l; i++) if(scr > pos[i]) act = i;
        $el = $wrap.find('a[data-inc="' + act + '"]');
        if($el.hasClass('active')) return;
        $links.removeClass('active');
        $el.addClass('active');
    });
}
})();