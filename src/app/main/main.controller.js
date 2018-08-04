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
    this.webDevTec = webDevTec;
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

  openCourse(course) {
    var self = this;
    this.webDevTec.getCourse(course).success(function (data) {
      this.course = data
      this.$state.go('course', { courseId: this.course.id });
    }).error(function () {
      self.toastr.error('Could not retrieve course data');
    });
  }
}
