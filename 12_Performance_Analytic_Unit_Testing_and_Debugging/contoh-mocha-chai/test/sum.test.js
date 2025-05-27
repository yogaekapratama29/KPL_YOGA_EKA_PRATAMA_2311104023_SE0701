import { expect } from "chai";
import sum from "../src/sum.js";

describe('sum()', () => {
    it('should return 3 for 1 + 2', () => {
        expect(sum(1, 2)).to.equal(3);
    });
});