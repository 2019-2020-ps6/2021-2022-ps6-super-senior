import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { QuizComponent } from './quizzes/quiz/quiz.component';
import { HeaderComponent } from './header/header.component';
import { QuizFormComponent } from './quizzes/quiz-form/quiz-form.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { AppRoutingModule } from './app.routing.module';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { QuestionFormComponent } from './questions/question-form/question-form.component';
import { QuestionComponent } from './questions/question/question.component';
import { UserComponent } from './users/user/user.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LancementQuizComponent } from './lancement-quiz/lancement-quiz.component';
import { ConfigQuizComponent } from './config-quiz/config-quiz.component';
import { JeuComponent } from './jeux/jeu/jeu.component';
import { JeuQuestionComponent } from './jeux/jeu-question/jeu-question.component';
import { FinQuizComponent } from './fin-quiz/fin-quiz.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { JeuReponseComponent } from './jeux/jeu-reponse/jeu-reponse.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizComponent,
    HeaderComponent,
    QuizFormComponent,
    EditQuizComponent,
    QuestionListComponent,
    QuestionFormComponent,
    QuestionComponent,
    UserComponent,
    UserFormComponent,
    UserListComponent,
    AccueilComponent,
    LancementQuizComponent,
    ConfigQuizComponent,
    JeuComponent,
    JeuQuestionComponent,
    FinQuizComponent,
    UserInfoComponent,
    JeuReponseComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
