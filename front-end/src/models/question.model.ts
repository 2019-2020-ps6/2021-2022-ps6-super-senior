export interface Answer {
    id:string;
    type?: string;
    value: string;
    isCorrect: boolean;
    imageAnswer?: string;
    enSavoirPlus?:string;
}

export interface Question {
    id: string;
    label: string;
    answers: Answer[];
    image?: string;
}
