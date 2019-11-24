export class Question {
    public category: string
    public clue: string
    public answer: string
    public jeopardyRound: string
    public column: string
    public row: string

    deserialize(data: any) {
        Object.assign(this, data);
    }
}