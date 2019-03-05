describe('Компьютер', function() {

    beforeEach(function() {
        Computer.currentMemoryGBs = 2;
        Computer.currentSpaceGBs = 1000;
    });

    describe('когда увеличивает оперативную память', function() {
        it('должен иметь возможность увеличивать свою оперативную память', function() {
            expect(Computer.addMemory(6)).toEqual(8);
        });


        it('должен показывать текущее количество памяти', function() {
            expect(Computer.currentMemoryGBs).toBeDefined();
            expect(Computer.currentMemoryGBs).toEqual(2);
        });

        it('должен запрещать добавлять больше двух плат памяти', function() {
            expect(Computer.addMemory(6, 8)).toEqual(16);
            expect(Computer.addMemory(6, 8, 4)).toBe(false);
        });
    });

    describe('когда устанавливает программы', function() {
        it('должен уметь инсталлировать любое количество программ', function() {
            expect(Computer.install({ name: 'GTA4', space: 600, installed: false }, { name: 'Photoshop', space: 400, installed: false })).toBe(true);
        });

        it('должен запрещать устанавливать программы, когда место на жестком диске закончилось', function() {
            expect(Computer.install({ name: 'GTA4', space: 600, installed: false }, { name: 'Photoshop', space: 400, installed: false }, { name: 'Sublime Text 2', space: 1, installed: false })).toBe(false);
        });

    });
});