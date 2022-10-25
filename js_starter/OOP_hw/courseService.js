import _Course from "./course.js";

class CourseService {
    constructor() {
      this.courses = [];
    }
  
    list(){
      console.log(this.courses);
    }
  
    add(aCourse) {
      this.courses.push(aCourse);
    }
  }

const courseService = new CourseService();

courseService.list();