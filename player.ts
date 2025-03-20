class Player {
    constructor(
        public name: string,
        private balance: number,
        private cards: Card[] = []
    ) {}

    getCards(): Card[] {
        return this.cards;
    }

    recieveCard(card: Card): void {
        this.cards.push(card);
    }

    clearHand(): void {
        this.cards = [];
    }
    
    addMoney(amount: number): void {
        this.balance += amount;
    }

    betMoney(amount: number): boolean {
        if (amount > this.balance) {
            console.log(`${this.name} doesn't have enough money to bet ${amount}.`);
            return false;
        }
        this.balance -= amount;
        return true;
    }

    getBalance(): number {
        return this.balance;
    }
}
