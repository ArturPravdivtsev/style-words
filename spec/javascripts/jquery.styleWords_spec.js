describe('jQuery.styleWords', function() {
    var frag;
    beforeEach(function() {
        frag = $(readFixtures('fragment.html'));
    });

    it('должен быть доступным в объекте jQuery', function() {
        expect($.fn.styleWords).toBeDefined();
    });

    it('должен иметь цепной способ вызова метода', function() {
        expect(frag.styleWords()).toBe(frag);
    });

    it('должен обертывать заданное количество слов в тэг span', function() {
        frag.styleWords();
        expect(frag.find('span').length).toBe(1);
    })

    it('должен по умолчанию обертывать только одно слово', function() {
        frag.styleWords();
        expect(frag.find('span').text()).toBe('Lorem');
    });

    it('должен позволять пользователю задавать количество слов, для обертывания в span', function() {
        frag.styleWords(3);
        expect(frag.find('span').text()).toBe('Lorem ipsum dolor');
    });

    it('должен предлагать объект аргументов по умолчанию в пространстве имен styleWords', function() {
        expect($.fn.styleWords.defaults).toBeDefined();
    })

    it('должен позволять пользователю перезаписывать объект по умолчанию', function() {
        frag.styleWords(2, {
            id: 'some-id',
            'class': 'some-class',
            tag: '<strong>'
        });

        expect(frag.find('strong').length).toBe(1);
        expect(frag.find('strong').text()).toBe('Lorem ipsum');
    });

    it('должен по умолчанию применять класс styleWords к обертке', function() {
        frag.styleWords();
        expect(frag.find('span')).toHaveClass('styleWords');
    });
});