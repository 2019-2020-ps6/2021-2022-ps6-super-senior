import { Answer } from "./question.model";
import { Quiz } from "./quiz.model";
import { User } from "./user.model";

export interface Jeu {
    id : string;
    quiz : Quiz;
    quizId: string;
    user: User;
    answers: string[];
}