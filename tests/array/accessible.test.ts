import { describe, expect, it } from 'vitest';
import { accessible } from '../../src/array/accessible';

describe('Accessible', () => {
    it('should return false', () => {
        expect(accessible(0 as any)).toBe(false);
        expect(accessible('' as any)).toBe(false);
        expect(accessible((() => {}) as any)).toBe(false);
    });

    it('should return true', () => {
        expect(accessible([])).toBe(true);
    })
})