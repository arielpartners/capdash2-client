export const MainMenu = {
  container: 'dropdown-lg',
  menu: {
    id: 'dropdown-menu-lg',
    name: 'header',
    icon: 'fa fa-th-large fa-fw',
    label: 'DSS Intranet Main Menu'
  },
  items: [
    {
      container: 'col-md-2 col-sm-2',
      type: 'list',
      header: {
        icon: 'fa fa-desktop',
        text: 'APP'
      },
      items: [
        {
          text: 'Cares',
          href: 'javascript:'
        },
        {
          text: 'VETS Tracking System',
          href: 'javascript:',
          badge: {
            class: 'success',
            value: 'UPDATE'
          }
        },
        {
          text: 'Capacity & Planning (CapApp)',
          href: 'http://localhost:4200',
        },
        {
          text: 'ORCA',
          href: 'javascript:',
        }
      ]
    },
    {
      container: 'col-md-2 col-sm-2',
      type: 'list',
      header: {
        icon: 'fa fa-book',
        text: 'Resources'
      },
      items: [
        {
          text: 'City Share',
          href: 'javascript:',
        },
        {
          text: 'Help Desk',
          href: 'javascript:',
        },
        {
          text: 'FAQs',
          href: 'javascript:',
        },
        {
          text: 'Policy & Procedures',
          href: 'javascript:',
        },
        {
          text: 'DEOA',
          href: 'javascript:',
        },
        {
          text: 'Office of the Ombudsman',
          href: 'javascript:',
        },
        {
          text: 'Staff Directory',
          href: 'javascript:',
        },
      ]
    },
    {
      container: 'col-md-2 col-sm-2',
      type: 'list',
      header: {
        icon: 'fa fa-diamond',
        text: 'Programs',
      },
      items: [
        {
          text: 'Adults',
          href: 'javascript:',
        },
        {
          text: 'Capacity Panning & Development',
          href: 'javascript:',
        },
        {
          text: 'Communications & External Affairs',
          href: 'javascript:',
        },
        {
          text: 'Families',
          href: 'javascript:',
        },
        {
          text: 'Policy & Planning',
          href: 'javascript:',
        },
        {
          text: 'Prevention',
          href: 'javascript:',
        },
        {
          text: 'Security & Emergency Operations',
          href: 'javascript:',
        },
      ]
    },
    {
      container: 'col-md-2 col-sm-2',
      type: 'list',
      header: {
        text: 'Administration',
        icon: 'fa fa-building',
      },
      items: [
        {
          text: 'Administrative Division',
          href: 'javascript:'
        },
        {
          text: 'Fiscal Procurment',
          href: 'javascript:'
        },
        {
          text: 'Fleet Services',
          href: 'javascript:'
        },
        {
          text: 'Human Resources',
          href: 'javascript:'
        },
        {
          text: 'Legal Affairs',
          href: 'javascript:'
        },
        {
          text: 'OIT',
          href: 'javascript:'
        },
      ]
    },
    {
      container: 'col-md-4 col-sm-4',
      type: 'paragraph',
      header: {
        text: 'Latest News',
        icon: 'fa fa-newspaper-o',
      },
      items: [
        {
          /* tslint:disable:max-line-length */
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero purus, fermentum at libero convallis, auctor dignissim mauris. Nunc laoreet pellentesque turpis sodales ornare. Nunc vestibulum nunc lorem, at sodales velit malesuada congue. Nam est tortor, tincidunt sit amet eros vitae, aliquam finibus mauris.',
          href: null
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero purus, fermentum at libero convallis, auctor dignissim mauris. Nunc laoreet pellentesque turpis sodales ornare. Nunc vestibulum nunc lorem, at sodales velit malesuada congue. Nam est tortor, tincidunt sit amet eros vitae, aliquam finibus mauris.',
          href: null
          /* tslint:enable:max-line-length */
        }
      ]
    },
  ]
};

export const NotificationMenu = {
  container: 'bell',
  menu: {
    id: 'media-list',
    name: 'header',
    icon: 'fa fa-bell-o f-s-14',
  },
  // Todo: determine data structure of /notifications API endpoint
  items: [
    {
      icon: {
        background: 'red'
      },
      link: 'javascript:',
      text: 'Violations Reports Updated',
    },
    {
      icon: {
        thumbnail: 'assets/img/user-ka.jpg'
      },
      link: 'javascript:',
      text: 'Violations Reports Updated'
    },
    {
      icon: {
        thumbnail: 'assets/img/user-mj.jpg'
      },
      link: 'javascript:',
      text: 'Violations Reports Updated'
    },
    {
      icon: {
        background: 'green'
      },
      link: 'javascript:',
      text: 'Violations Reports Updated'
    }
  ]
};

export const LanguageMenu = {
  container: 'navbar-language',
  menu: {
    id: 'language',
    name: 'header',
  },
  selected: {
    icon: 'flag-icon flag-icon-us',
    title: 'us',
    text: 'EN'
  },
  // Todo: determine data structure of /settings/language API endpoint
  items: [
    {
      icon: 'flag-icon flag-icon-us',
      title: 'us',
      text: 'English'
    },
    {
      icon: 'flag-icon flag-icon-es',
      title: 'es',
      text: 'Spanish'
    },
    {
      icon: 'flag-icon flag-icon-fr',
      title: 'fr',
      text: 'French'
    },
    {
      icon: 'flag-icon flag-icon-ru',
      title: 'ru',
      text: 'Russian'
    },
    {
      icon: 'flag-icon flag-icon-in',
      title: 'in',
      text: 'Hindi'
    }
  ]
}


export const UserMenu = {
  container: 'navbar-user',
  menu: {
    id: 'user',
    name: 'header',
  },
  items: [
    {
      icon: 'fa fa-pencil-square-o',
      text: 'Edit Profile',
      link: '#/app/extra/profile'
    },
    {
      icon: 'fa fa-folder-open',
      text: 'New Assigned',
      link: 'javascript:',
      badge: {
        class: 'danger',
        value: '3',
        right: true
      }
    },
    {
      icon: 'fa fa-calendar',
      text: 'Work Orders Schedule',
      link: '#/app/work_orders/work_orders/calendar'
    },
    {
      icon: 'fa fa-cogs',
      text: 'CapApp Setting',
      link: './#/app/settings/settings/app_settings'
    }
  ]
};
