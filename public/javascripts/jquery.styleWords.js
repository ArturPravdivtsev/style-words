$.fn.styleWords = function(numWords, config) {
    numWords = numWords || 1;

    config = $.extend({}, $.fn.styleWords.defaults, config);

    return this.each(function() {
        var el = $(this);

        el.html(function() {
            var words = el.text().split(' ');
            var wrapper = $(config.tag, config).text(words.splice(0, numWords).join(' ')); // заменяем на config.tag

            wrapper = $('<div>').append(wrapper).html();
            return [wrapper].concat(words).join(' ');
        });

    });
};


$.fn.styleWords.defaults = {
    tag: '<span>',
    'class': 'styleWords'
};