import { Answer } from "./question.model";
import { Quiz } from "./quiz.model";
import { User } from "./user.model";

export interface Jeu {
    id : string;
    quizId: string;
    userId: string;
    answers: string[];
}