import Line from '../../../src/js/drawing/Line';
import Point from '../../../src/js/drawing/Point';

describe('constructor',
    () => {
        it('should generate a Line-object for valid args',
            () => {
                let point1 = new Point(1, 1);
                let point2 = new Point(3, 4);
                let line = new Line(point1, point2);
                expect(line).toBeInstanceOf(Line)
            }
        )
        it('should throw error when 1st parameter is not a point',
            () => {
                expect(() => {
                    let point2 = new Point(3, 4);
                    new Point("a", 1);
                }).toThrow(Error)
            })
        it('should throw error when 2nd parameter is not a number',
            () => {
                expect(() => {
                    let point1 = new Point(1, 1);
                    new Point(1, "a");
                }).toThrow(Error)
            })
    }
);

test('getPoint1 to return the correct value',
    () => {
        let point1 = new Point(1, 1);
        let point2 = new Point(3, 4);
        let line = new Line(point1, point2);
        expect(line.point1).toEqual(point1);
    });

test('getPoint2 to return the correct value',
    () => {
        let point1 = new Point(1, 1);
        let point2 = new Point(3, 4);
        let line = new Line(point1, point2);
        expect(line.point2).toEqual(point2);
    });

test('toString to return the correct value', () => {
    let point1 = new Point(1, 2);
    let point2 = new Point(3, 4);
    let line = new Line(point1, point2);
    let returnedString = line.toString();
    expect(returnedString).toBe("Line (1,2)-(3,4)");
});