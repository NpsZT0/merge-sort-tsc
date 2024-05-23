export default class Merge {
    private result: number[] = []
    constructor(private collection_1: number[], private collection_2: number[], private collection_3: number[]) {
        this.do()
    }

    private mergeSort(arr: number[]): number[] {
        const middle = arr.length / 2;

        if (arr.length < 2) {
            return arr;
        }

        const left: number[] = arr.splice(0, middle)
        return this.merge(this.mergeSort(left), this.mergeSort(arr))
    }

    private merge(left: number[], right: number[]): number[] {
        let merged: number[] = []
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                merged.push(left[0])
                left.shift()
            } else {
                merged.push(right[0])
                right.shift()
            }
        }
        while (right.length) {
            merged.push(right[0])
            right.shift()
        }
        while (left.length) {
            merged.push(left[0])
            left.shift()
        }
        return [...merged, ...left, ...right]
    }

    private do() {
        this.collection_1 = this.mergeSort(this.collection_1)
        this.collection_2 = this.mergeSort(this.collection_2)
        this.collection_3 = this.mergeSort(this.collection_3)
        this.result = this.mergeSort(this.collection_1.concat(this.collection_2).concat(this.collection_3))
    }

    val(): number[] {
        return this.result
    }
}
