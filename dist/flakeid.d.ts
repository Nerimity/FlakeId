export class FlakeId {
    /**
     * Constructor for the class.
     *
     * @param {Object} options - The options object for the constructor.
     * @param {number} options.mid - The mid value for the constructor. Default is 1.
     * @param {number} options.timeOffset - The time offset value for the constructor. Default is 0.
     */
    constructor(options: {
        mid: number;
        timeOffset: number;
    });
    seq: number;
    mid: number;
    timeOffset: number;
    lastTime: number;
    /**
     * Generates a unique identifier based on the current time, sequence number, and machine ID.
     *
     * @return {string} The generated unique identifier.
     */
    gen(): string;
}
