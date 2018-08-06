export class CourseController {
  constructor(toastr, Popeye, $rootScope, $state, $stateParams, webDevTec) {
    'ngInject';
    this.toastr = toastr;
    this.Popeye = Popeye;
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.webDevTec = webDevTec;
    this.getCourse();
    this.studentId = this.$stateParams.studentId;
  }

  getCourse() {
    var self = this;
    this.webDevTec.getCourse(this.$stateParams.courseId, this.$stateParams.studentId).success(function (data) {
      self.course = data;
      self.currentStudent = data.users.find(function (user) {
        return user.id == self.studentId;
      });
    }).error(function () {
      self.toastr.error('Could not retrieve course data');
    });
  }

  goHome(){
    this.$state.go('home');
  }
}
