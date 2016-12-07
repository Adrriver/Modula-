import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { StudentList } from '@angular/core';
import { Student } from './student';
import { ModulaUser } from './modula-user';

export class Teacher extends ModulaUser  {
		
	//studentList: StudentList;
	teacherUserId: String;
	firstName: String;
	lastName: String;
	registrationDate: Date;
	username: String;
	email: String;
	password: String;
	numStudents: number;
	
	
	constructor(profile){
			super(profile);
			studentList = null;		
			registrationDate = null; /* implement soon! */				
			numStudents = profile[0][0][0];

	}
	

}