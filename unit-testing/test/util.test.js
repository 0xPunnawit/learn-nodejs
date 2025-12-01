import { sum, moveZero } from '../src/util';

test('sum 3, 4, 1 to equal 8', () => {
    expect(sum(3, 4, 1)).toBe(8);
});

test('sum without argument to equal 0', () => {
    expect(sum()).toBe(0);
});

test('move zero with [4, 3, 0, 6, 1, 0] should be [4, 3, 6, 1, 0, 0]', () => {
    expect(moveZero([4, 3, 0, 6, 1, 0]))
        .toStrictEqual([4, 3, 6, 1, 0, 0]);
});

test('move zero with none argument should be throw error', () => {
    expect(() => moveZero()).toThrow();
});