/*!
 * Scroller - buty of scrolling for anchors & one-page menus
 * @version  v1.0
 * @author   Evgenii Dulikov
 * http://datatables.net/license_gpl2
 * Copyright 2014 Evgenii Dulikov <gerrproger@gmail.com>
 * https://github.com/Gerrproger/Scroller
 */

 (function($){
    var scroller = function(options){

        var $b = $('html, body'),
            $d = $(document),
            pos = scroller.pos,
            inc = 0,
            active = null,

            set = $.extend({
                shift: 0,
                time: 300,
                addClass: true,
                setHashOnClick: true,
                setHashOnScroll: false,
                scrollOnLoad: true,
                additionalChar: '•'
            }, options),

            $elems = (this === window ? $('a[href^="#"]') : this);

        $elems.each(function(){
            var $this = $(this),
                data = $this.data(),
                href = $this.attr('href'),
                thisInc = null,

                thisTarget = data.target ? data.target : (href ? href.replace('#', '') : $this.attr('id').replace(set.additionalChar, '')),
                $target = $('#' + thisTarget);
                if(!$target.length){
                    $target = $('#' + thisTarget + set.additionalChar);
                } else {
                    $target.attr('id', thisTarget + set.additionalChar);
                }
                targetData = $target.data().scroller_tar;

            if(targetData !== undefined){
                thisInc = targetData;
            } else {
                 thisInc = inc;
                 $target.data({scroller_tar: inc});
                 var thisShift = data.shift ? data.shift : set.shift;
                 pos[inc] = $target.offset().top - thisShift;
                 inc++;
            }

            $(this).attr('data-scroller_inc', thisInc).data({scroller_hash: thisTarget});
            $this.click(function(e){
                e.preventDefault();
                scroller.autoScr = true;
                $b.animate({scrollTop: pos[thisInc]}, set.time, function(){
                    scroller.autoScr = false;
                });
                if(set.setHashOnClick) location.hash = encodeURIComponent(thisTarget);
            });
        });

        if(!scroller.inited){
            if(set.addClass || set.setHash) $d.scroll(function(){
                if(scroller.autoScr) return;

                var scr = $d.scrollTop() + 10,
                    act = null;
                for(var i=0, l=pos.length; i<l; i++){
                    if(scr > pos[i]) act = i;
                }
                if(act === active) return;

                active = act;
                $active = $elems.filter('[data-scroller_inc="' + act + '"]');

                if(set.setHashOnScroll){
                    var activeData = $active.data();
                    location.hash = activeData ? encodeURIComponent(activeData.scroller_hash) : set.additionalChar;
                }

                if(set.addClass){
                    $elems.removeClass('active');
                    $active.addClass('active');
                }
            });

            if(location.hash && set.scrollOnLoad){
                var hash = decodeURIComponent(location.hash).replace('#', ''),
                    data = $('#' + hash + set.additionalChar).data();
                if(data){
                    scroller.autoScr = true;
                    $b.delay(200).animate({scrollTop: pos[data.scroller_tar]}, set.time, function(){
                        scroller.autoScr = false;
                    });
                }
            }
            scroller.inited = true;
        }

        return $elems;
    };

    scroller.pos = [];
    scroller.autoScr = false;
    $.fn.scroller = window.scroller = scroller;
})(jQuery);