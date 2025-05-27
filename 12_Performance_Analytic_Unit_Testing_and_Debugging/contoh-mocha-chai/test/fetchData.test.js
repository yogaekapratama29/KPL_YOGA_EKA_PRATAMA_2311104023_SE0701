import { expect } from 'chai';
import sinon from 'sinon';
import fetchData from '../src/fetchData.js';

describe('fetchData()', () => {
    it('should return mock data', async () => {
        const mockFetch = sinon.stub(global, 'fetch').resolves({
            json: sinon.stub.resolves({ id: 1, name: 'John Doe' })
        });

        const data = await fetchData('https://api.example.com/user/1');
        expect(data).to.equal({ id: 1, name: 'John Doe' });

        mockFetch.restore();
    });
});