export class CourseController {
  constructor (toastr, Popeye, modal, $rootScope) {
    'ngInject';
    this.toastr = toastr;
    this.Popeye = Popeye;
    this.modal = modal;
    this.course = $rootScope.course;
  }
}
