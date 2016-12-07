import { Injectable } from '@angular/core';
import { Teacher } from './teacher';
import { TEACHERS } from './mock-teachers';

@Injectable()
export class TeacherService {
	getTeachers(): Promise<Teacher[]> {
		return Promise.resolve(TEACHERS);
	}
		getTeacher(id: String): Promise<Teacher> {
			return this.getTeachers()
				.then(teachers => teachers.find(teacher => teacher.teacherUserId === id));
		}

}