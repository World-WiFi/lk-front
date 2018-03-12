export default {
  items: [
    {
      nameLang: 'dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
     /* badge: {
        variant: 'info',
        text: 'NEW'
      }*/
    },

      {
          nameLang: 'referralProgram',
          url: '/referals',
          icon: 'icon-user-follow',
      },
     /* {
          name: 'Точки доступа',
          url: '/pages',
          icon: 'icon-star',
          children: [
              {
                  name: 'Роутеры',
                  url: '/routers',
                  icon: 'icon-star'
              }
          ]
      },*/
      /*{
          name: 'Роутеры',
          url: '/routers',
          icon: 'icon-star'
      },*/

      /*{
          name: 'Пользователи',
          url: '/user/management',
          icon: 'icon-user'
      },*/

      /*{
          name: 'Права',
          url: '/right/management',
          icon: 'icon-lock'
      },*/

      {
          nameLang: 'profile',
          url: '/user/profile',
          icon: 'icon-lock'
      },

      {
          nameLang: 'logout',
          url: '/logout',
          icon: 'icon-logout'
      }



  ]
};
