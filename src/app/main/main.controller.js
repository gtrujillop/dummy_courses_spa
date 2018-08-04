export class MainController {
  constructor ($timeout, $state, webDevTec, toastr, Popeye, $rootScope) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1501898718476;
    this.toastr = toastr;
    this.$state = $state;
    this.Popeye = Popeye;
    this.$rootScope = $rootScope;
    this.getCourses(webDevTec);
    this.showJumbotron = true;
  }

  getCourses(webDevTec) {
    var self = this;
    webDevTec.getCourses().success(function(data){
      self.courses = data;
    }).error(function(){
      self.toastr.error('Could not retrieve courses');
    });
  }

  
  hideJumbotron() {
    this.showJumbotron = !this.showJumbotron;
  }

  goToCourse(courseId, studentId) {
    this.$state.go('course', { courseId: courseId, studentId: studentId });
  }
}
