import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LancementQuizComponent } from './lancement-quiz/lancement-quiz.component';
import { ConfigQuizComponent } from './config-quiz/config-quiz.component';
import { JeuComponent } from './jeux/jeu/jeu.component';
import { JeuQuestionComponent } from './jeux/jeu-question/jeu-question.component';
import { FinQuizComponent } from './fin-quiz/fin-quiz.component';
import { QuizFormComponent } from './quizzes/quiz-form/quiz-form.component';
import { UserInfoComponent } from './users/user-info/user-info.component';

const routes: Routes = [
    {path: 'user-info', component: UserInfoComponent},
    {path: 'lancement-quiz/:id', component: LancementQuizComponent},
    {path: 'user-list', component: UserListComponent},
    {path: 'quiz-list', component: QuizListComponent},
    {path: 'quiz-form', component: QuizFormComponent},
    {path: 'edit-quiz/:id', component: EditQuizComponent},
    {path: 'config-quiz/:id', component: ConfigQuizComponent},
    {path: 'jeu/:id', component: JeuComponent},
    {path: 'fin-quiz', component: FinQuizComponent},
    {path: 'accueil' , component: AccueilComponent },
    {path: '', redirectTo: '/accueil', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
