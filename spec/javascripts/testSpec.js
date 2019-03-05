describe('Тест', function() {
    var elem;

    beforeEach(function() {
        elem = $('<div id="container" class="wrap"><p>Hello World</p></div>');
    })

    it('позволяет искать по CSS селекторам', function() {
        expect(elem).toEqual('#container')
        expect(elem).toContainElement('p')
    })

    it('позволяет узнавать когда элемент имеет класс', function() {
        expect(elem).toHaveClass('wrap')
    })

})