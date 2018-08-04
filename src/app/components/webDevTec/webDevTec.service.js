export class WebDevTecService {
  constructor ($http) {
    'ngInject';
    this.$http = $http;
    this.localUrlBase = 'http://localhost:3000/';
    // this.urlBase = 'https://marketplace-api-getp.herokuapp.com/v1/';
  }

  getCourses() {
    return this.$http.get(this.localUrlBase + 'courses');
  }

  getCourse(courseId, studentId) {
    return this.$http.get(this.localUrlBase + 'courses/' + courseId + '?student_id=' + studentId);
  }
}
