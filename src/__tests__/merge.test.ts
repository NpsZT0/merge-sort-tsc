import { describe, expect, it } from '@jest/globals';
import Merge from "../merge";

describe('Merge class', () => {
  it('Should be merge and sort three collections that given from test question', () => {
    const collection1 = [0,1,2,3,4,5];
    const collection2 = [5,4,3,2,1,0];
    const collection3 = [0,1,2,3,4,5];

    const mergeInstance = new Merge(collection1, collection2, collection3);
    const result = mergeInstance.val();

    expect(result).toEqual([0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5]);
  });

  it('Should handle empty collections correctly', () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const collection3: number[] = [];

    const mergeInstance = new Merge(collection1, collection2, collection3);
    const result = mergeInstance.val();

    expect(result).toEqual([]);
  });

  it('Should handle collections with duplicate numbers correctly', () => {
    const collection1 = [1, 3, 3];
    const collection2 = [3, 5, 5];
    const collection3 = [0, 1, 6];

    const mergeInstance = new Merge(collection1, collection2, collection3);
    const result = mergeInstance.val();

    expect(result).toEqual([0, 1, 1, 3, 3, 3, 5, 5, 6]);
  });
});
