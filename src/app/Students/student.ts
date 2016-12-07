import { Component, OnInit } from '@angular/core';
import { Module } from './module';
import { ModuleUser } from './modula-user';

export class Student extends ModulaUser {
  

  /* parent class members 
  public modulaUserId:String;
	public userFirst:String;
	public userLast:String;
	public userStatus:String;
	public schoolCode:String;
	public eMail:String; */


  public studentUserId: String; 
  public firstName: String;
  public lastName: String;
  public activeModule: Module;
  public completedModules: ModulePerformance[];

  constructor(profile, modulePerformance:ModulePerformance[]){
    super(profile);
    this.studentUserId = profile.username;
    this.firstName = profile.user_first;
    this.lastName = profile.user_last;
    this.activeModule = modulePerformance.then( mods => mods.find( mod => mod.module_id === profile.current_module));
    completedModules = modulePerformance;
  }
  
  constructor(profile, modulePerfService: ModulePerformanceService){
  	super(profile);
  	activeModule = modulePerformanceService.getActiveModule(studentUserId)
  	completeModules = modulePerfService.getModPerformance(studentUserId);


  	}
  }

