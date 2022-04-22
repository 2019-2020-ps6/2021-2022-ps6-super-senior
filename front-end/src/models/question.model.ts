export interface Answer {
    type?: string;
    value: string;
    isCorrect: boolean;
    imageAnswer?: string;
}

export interface Question {
    id: string;
    label: string;
    answers: Answer[];
    image?: string;
}
