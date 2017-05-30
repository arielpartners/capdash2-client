import { MenuType } from '../components/menu/menu.type';

// Todo: model belongs to app not menu directory
export const MainMenu: MenuType = {
  container: {
    class: 'dropdown-lg',
  },
  label: {
    class: 'dropdown-toggle text-white',
    color: 'red', // red for testing white is original
    icon: 'fa fa-th-large fa-fw',
    text: {
      value: 'DSS Intranet Main Menu'
    },
    type: 'default'
  },
  button: {
    // need unique value for toggle
    id: 'dropdown-menu-lg-checkbox',
    type: 'radio',
    name: 'header',
  },
  items: {
    type: 'sub-menu',
    container: {
      class: 'dropdown-menu-lg',
    },
    list: [
      {
        name: 'Apps',
        icon: 'fa fa-desktop',
        class: 'col-md-2 col-sm-2',
        items: {
          type: 'list-item',
          list: [
            {
              text: { value: 'Cares' },
              link: { href: 'javascript:' }
            },
            {
              text: { value: 'VETS Tracking System' },
              link: { href: 'javascript:' },
              badge: 'update'
            },
            {
              text: { value: 'Capacity & Planning (CapApp)' },
              link: { href: 'http://localhost:4200' }
            },
            {
              text: { value: 'ORCA' },
              link: { href: 'javascript:' }
            },
          ]
        }
      },
      {
        name: 'Resources',
        icon: 'fa fa-book',
        class: 'col-md-2 col-sm-2',
        items: {
          type: 'list-item',
          list: [
            {
              text: { value: 'City Share' },
              link: { href: 'javascript:' }
            },
            {
              text: { value: 'Help Desk' },
              link: { href: 'javascript:' }
            },
            {
              text: { value: 'FAQs' },
              link: { href: 'javascript:' }
            },
            {
              text: { value: 'Policy & Procedures' },
              link: { href: 'javascript:' }
            },
            {
              text: { value: 'DEOA' },
              link: { href: 'javascript:' }
            },
            {
              text: { value: 'Office of the Ombudsman' },
              link: { href: 'javascript:' }
            },
            {
              text: { value: 'Staff Directory' },
              link: { href: 'javascript:' }
            }
          ]
        }
      },
      {
        name: 'Programs',
        icon: 'fa fa-diamond',
        class: 'col-md-2 col-sm-2',
        items: {
          type: 'list-item',
          list: [
            {
              text: { value: 'Adults' },
              link: { href: 'javascript:' }
            },
            {
              text: { value: 'Capacity Panning & Development' },
              link: { href: 'javascript:' }
            },
            {
              text: { value: 'Communications & External Affairs' },
              link: { href: 'javascript:' }
            },
            {
              text: { value: 'Families' },
              link: { href: 'javascript:' }
            },
            {
              text: { value: 'Policy & Planning' },
              link: { href: 'javascript:' }
            },
            {
              text: { value: 'Prevention' },
              link: { href: 'javascript:' }
            },
            {
              text: { value: 'Security & Emergency Operations' },
              link: { href: 'javascript:' }
            },
          ]
        }
      },
      {
        name: 'Administration',
        icon: 'fa fa-building',
        class: 'col-md-2 col-sm-2',
        items: {
          type: 'list-item',
          list: [
            {
              text: { value: 'Administrative Division' },
              link: { href: 'javascript:' }
            },
            {
              text: { value: 'Fiscal Procurment' },
              link: { href: 'javascript:' }
            },
            {
              text: { value: 'Fleet Services' },
              link: { href: 'javascript:' }
            },
            {
              text: { value: 'Human Resources' },
              link: { href: 'javascript:' }
            },
            {
              text: { value: 'Legal Affairs' },
              link: { href: 'javascript:' }
            },
            {
              text: { value: 'OIT' },
              link: { href: 'javascript:' }
            },
          ]
        }
      },
      {
        name: 'Latest News',
        icon: 'fa fa-newspaper-o',
        class: 'col-md-4 col-sm-4',
        items: {
          type: 'paragraph',
          list: [
            {
              /* tslint:disable:max-line-length */
              text: { value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero purus, fermentum at libero convallis, auctor dignissim mauris. Nunc laoreet pellentesque turpis sodales ornare. Nunc vestibulum nunc lorem, at sodales velit malesuada congue. Nam est tortor, tincidunt sit amet eros vitae, aliquam finibus mauris.' },
              link: { href: null }
            },
            {
              text: { value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero purus, fermentum at libero convallis, auctor dignissim mauris. Nunc laoreet pellentesque turpis sodales ornare. Nunc vestibulum nunc lorem, at sodales velit malesuada congue. Nam est tortor, tincidunt sit amet eros vitae, aliquam finibus mauris.' },
              link: { href: null }
              /* tslint:enable:max-line-length */
            },
          ]
        }
      }
    ]
  }
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
      src: 'assets/img/user-rbs.jpg',
      width: 128,
      height: 128
    },
    text: {
      value: 'Robert Santore',
      class: 'hidden-xs text-white'
    },
    type: 'thumbnail',
    tag: 'user-rbs',
  },
  button: {
    id: 'media-list-checkbox-test',
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
        icon: { class: 'asfdfsd'},
        link: { href: 'asdfsdaf'},
        body: {
          heading: { value: 'asdfsda' },
          text: { value: 'asdfsda' },
          time: { value: 'asdfsda' },
        }
      }
    ]
  }
};
