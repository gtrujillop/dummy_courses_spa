export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('course', {
      url: '/courses/:courseId/student/:studentId',
      templateUrl: 'app/course/showCourse.html',
      controller: 'CourseController',
      controllerAs: 'course'
    })
  $urlRouterProvider.otherwise('/');
}
