class Card {
    constructor(
        public readonly rank: string, 
        public readonly suit: string 
        ) {}

        toString(): string {
            return `${this.rank} of ${this.suit}`
        }

        getValue(): number {
            if (["J", "Q", "K"].includes(this.rank)){
                return 10;
            } if ("A" === this.rank) {
                return 11;
            } else {
                return parseInt(this.rank);
            }
        }
}
