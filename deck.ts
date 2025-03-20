class Deck {
    private cards: Card[] = [];
    
    createDeck() {
        let ranks: string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        let suits: string[] = ["Spades", "Clubs", "Hearts", "Diamonds"];
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(ranks[j], suits[i]));
            }
        }
    }

    toString(): string {
        return this.cards.join("\n");
    }

    shuffleDeck(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    resetDeck(): void {
        this.cards = [];
        this.createDeck();
        this.shuffleDeck();
    }

    drawCard(): Card | null{
        if (this.cards.length > 0) {
            return this.cards.pop()!;
        } else {
            return null;
        }
    }
}
