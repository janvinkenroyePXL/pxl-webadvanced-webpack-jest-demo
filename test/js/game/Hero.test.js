import WereldObject from '../../../src/js/game/WereldObject';

test('getX to return the correct value',
    () => {
        let point = new Point(1, 2);
        let x = point.getX();
        expect(x).toBe(1);
    });

test('toString to return the correct value', () => {
    let point=new Point(1,2);
    let returnedString = point.toString();
    expect(returnedString).toBe("(1,2)");
});