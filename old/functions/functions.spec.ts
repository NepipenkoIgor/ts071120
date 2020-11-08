import { average } from './functions';

describe('Test for functions', () => {
    it('Test average', () => {
        // expect(average(1, '1')).toEqual('Average is 1');
        // expect(average('1', 1)).toEqual('Average is 1');
        expect(average(1, 1)).toEqual('Average is 1');
    })
})
