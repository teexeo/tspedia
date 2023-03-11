import { camelCase } from '../../src/string';
import { describe, it, expect } from 'vitest';

describe('Camel case', function () {
    it('should return null', () => {
        expect(camelCase(null)).toBe(null)
    });

    it('should camel case work', () => {
        expect(camelCase("layout menu index")).toBe("LayoutMenuIndex");
    });

    it('type check. should return null', () => {
        expect(camelCase(true as any)).toBeNull();
    });
  
  	it('one letter test', () => {
    	expect(camelCase('s . ')).toBe('S.');
    });
})