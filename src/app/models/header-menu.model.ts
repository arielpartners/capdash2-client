import { MenuType } from '../components/menu/menu.type';

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
          link: 'javascript:'
        },
        {
          text: 'Fiscal Procurment',
          link: 'javascript:'
        },
        {
          text: 'Fleet Services',
          link: 'javascript:'
        },
        {
          text: 'Human Resources',
          link: 'javascript:'
        },
        {
          text: 'Legal Affairs',
          link: 'javascript:'
        },
        {
          text: 'OIT',
          link: 'javascript:'
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
          link: null
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero purus, fermentum at libero convallis, auctor dignissim mauris. Nunc laoreet pellentesque turpis sodales ornare. Nunc vestibulum nunc lorem, at sodales velit malesuada congue. Nam est tortor, tincidunt sit amet eros vitae, aliquam finibus mauris.',
          link: null
          /* tslint:enable:max-line-length */
        }
      ]
    },
  ]
};

export const NotificationMenu: MenuType = {
  container: {
    class: 'bell',
  },
  label: {
    class: 'f-s-14',
    icon: 'fa fa-bell-o',
    text: { // Todo: calculate numbers of unread notifications
      value: '4',
      class: 'label'
    },
    type: 'mini'
  },
  button: {
    id: 'media-list-checkbox-test',
    type: 'radio',
    name: 'header',
  },
  items: {
    type: 'notification',
    container: {
      class: 'media-list pull-right animated fadeInDown',
    },
    list: [
      {
        icon: { class: 'fa fa-warning media-object bg-red'},
        link: { href: 'javascript:'},
        body: {
          heading: { value: 'Violations Reports Updated' },
          text: { value: null },
          time: { value: '3 minutes ago' },
        }
      },
      {
        icon: { src: 'assets/img/user-ka.jpg'},
        link: { href: 'javascript:'},
        body: {
          heading: { value: 'Kari Auer' },
          text: { value: 'Quisque pulvinar tellus sit amet sem scelerisque tincidunt.' },
          time: { value: '25 minutes ago' },
        }
      },
      {
        icon: { src: 'assets/img/user-mj.jpg'},
        link: { href: 'javascript:'},
        body: {
          heading: { value: 'Michael Jabbour' },
          text: { value: 'Quisque pulvinar tellus sit amet sem scelerisque tincidunt.' },
          time: { value: '35 minutes ago' },
        }
      },
      {
        icon: { class: 'fa fa-warning media-object bg-green'},
        link: { href: 'javascript:'},
        body: {
          heading: { value: 'Cleared Violations Today' },
          text: { value: null },
          time: { value: '14' },
        }
      },
    ]
  }
};

export const LanguageMenu: MenuType = {
  container: {
    class: 'navbar-language',
  },
  label: {
    class: 'f-s-14',
    icon: 'flag-icon flag-icon-us',
    text: {
      value: 'EN',
      class: 'name text-white'
    },
    type: 'item',
    tag: 'us'
  },
  button: {
    id: 'language-checkbox-test',
    type: 'radio',
    name: 'header',
  },
  items: {
    container: {
      class: 'animated fadeInRight p-b-0',
    },
    type: 'selected-item',
    list: [
      {
        icon: {
          class: 'flag-icon flag-icon-us',
          title: 'us'
        },
        text: { value: 'English' },
        link: { href: 'javascript:' },
      },
      {
        icon: {
          class: 'flag-icon flag-icon-es',
          title: 'es'
        },
        text: { value: 'Spanish' },
        link: { href: 'javascript:' },
      },
      {
        icon: {
          class: 'flag-icon flag-icon-fr',
          title: 'fr'
        },
        text: { value: 'French' },
        link: { href: 'javascript:' },
      },
      {
        icon: {
          class: 'flag-icon flag-icon-ru',
          title: 'ru'
        },
        text: { value: 'Russian' },
        link: { href: 'javascript:' },
      },
      {
        icon: {
          class: 'flag-icon flag-icon-in',
          title: 'in'
        },
        text: { value: 'Hindi' },
        link: { href: 'javascript:' },
      }
    ]
  }
};

export const UserMenu: MenuType = {
  container: {
    class: 'navbar-user',
  },
  label: {
    class: 'f-s-14',
    icon: {
      src: null,
      width: 128,
      height: 128,
    },
    text: {
      value: null,
      class: 'hidden-xs text-white'
    },
    type: 'thumbnail',
    tag: 'user-rbs',
  },
  button: {
    id: 'user-checkbox',
    type: 'radio',
    name: 'header',
  },
  items: {
    type: 'user',
    container: {
      class: 'animated fadeInLeft pull-right',
    },
    list: [
      {
        icon: { class: 'fa fa-pencil-square-o' },
        text: { value: 'Edit Profile' },
        link: { href: '#/app/extra/profile' }
      },
      {
        icon: { class: 'fa fa-folder-open' },
        text: { value: 'New Assigned' },
        link: { href: 'javascript:' },
        badge: {
          class: 'danger',
          value: '3',
          right: true
        }
      },
      {
        icon: { class: 'fa fa-calendar' },
        text: { value: 'Work Orders Schedule' },
        link: { href: '#/app/work_orders/work_orders/calendar' }
      },
      {
        icon: { class: 'fa fa-cogs' },
        text: { value: 'CapApp Setting' },
        link: { href: './#/app/settings/settings/app_settings' }
      }
    ]
  }
};


