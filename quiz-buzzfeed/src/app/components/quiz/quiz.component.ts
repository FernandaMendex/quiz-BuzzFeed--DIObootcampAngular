import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import quizz_questions from "../../../assets/data/quizz_questions.json"

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  title:string = ""

  questions:any
  question:any

  answers:string[] = []
  answerSelected:string = ""

  questionIndex:number = 0
  questionMaxIndex:number = 0

  finished:boolean = false

  constructor() {}

  ngOnInit(): void {
    if(quizz_questions){
      this.finished = false
      this.title = quizz_questions.title

      this.questions = quizz_questions.questions
      this.question = this.questions[this.questionIndex]

      this.questionMaxIndex = this.questions.length
    }
  }

  playerChoose(value:string){
    this.answers.push(value)
  }

  async next(){
    this.questionIndex+=1

    if (this.questionMaxIndex > this.questionIndex) {
      this.question = this.questions[this.questionIndex]
    } else {
      this.finished = true
    }
  }

}
