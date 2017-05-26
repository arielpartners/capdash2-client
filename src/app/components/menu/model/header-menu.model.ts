import { MenuType, MenuLabelType, MenuButtonType, SubMenuType } from '../menu.type';

// Todo: model belongs to app not menu directory
export const HeaderMenu: MenuType = {
  label: {
    icon: 'fa fa-th-large fa-fw',
    title: 'DSS Intranet Main Menu'
  },
  button: {
    // need unique value for toggle
    id: 'dropdown-menu-lg-test-checkbox',
    type: 'radio',
    name: 'header',
  },
  submenu: [
    {
      name: 'Apps',
      icon: 'fa fa-desktop',
      class: 'col-md-2 col-sm-2',
      itemsType: 'list-item',
      items: [
        {
          name: 'Cares',
          link: 'javascript:'
        },
        {
          name: 'VETS Tracking System',
          link: 'javascript:'
        },
        {
          name: 'Capacity & Planning (CapApp)',
          link: 'javascript:'
        },
        {
          name: 'ORCA',
          link: 'javascript:'
        }
      ]
    },
    {
      name: 'Resources',
      icon: 'fa fa-book',
      class: 'col-md-2 col-sm-2',
      itemsType: 'list-item',
      items: [
        {
          name: 'City Share',
          link: 'javascript:'
        },
        {
          name: 'Help Desk',
          link: 'javascript:'
        },
        {
          name: 'FAQs',
          link: 'javascript:'
        },
        {
          name: 'Policy & Procedures',
          link: 'javascript:'
        },
        {
          name: 'DEOA',
          link: 'javascript:'
        },
        {
          name: 'Office of the Ombudsman',
          link: 'javascript:'
        },
        {
          name: 'Staff Directory',
          link: 'javascript:'
        }
      ]
    },
    {
      name: 'Programs',
      icon: 'fa fa-diamond',
      class: 'col-md-2 col-sm-2',
      itemsType: 'list-item',
      items: [
        {
          name: 'Adults',
          link: 'javascript:'
        },
        {
          name: 'Capacity Planning & Development',
          link: 'javascript:'
        },
        {
          name: 'Communications & External Affairs',
          link: 'javascript:'
        },
        {
          name: 'Families',
          link: 'javascript:'
        },
        {
          name: 'Policy & Planning',
          link: 'javascript:'
        },
        {
          name: 'Prevention',
          link: 'javascript:'
        },
        {
          name: 'Security & Emergency Operations',
          link: 'javascript:'
        },
      ]
    },
    {
      name: 'Administration',
      icon: 'fa fa-building',
      class: 'col-md-2 col-sm-2',
      itemsType: 'list-item',
      items: [
        {
          name: 'Administrative Division',
          link: 'javascript:'
        },
        {
          name: 'Fiscal Procurment',
          link: 'javascript:'
        },
        {
          name: 'Fleet Services',
          link: 'javascript:'
        },
        {
          name: 'Human Resources',
          link: 'javascript:'
        },
        {
          name: 'Legal Affairs',
          link: 'javascript:'
        },
        {
          name: 'OIT',
          link: 'javascript:'
        }
      ]
    },
    {
      name: 'Latest News',
      icon: 'fa fa-newspaper-o',
      class: 'col-md-4 col-sm-4',
      itemsType: 'paragraph',
      items: [
        {
          /* tslint:disable:max-line-length */
          name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero purus, fermentum at libero convallis, auctor dignissim mauris. Nunc laoreet pellentesque turpis sodales ornare. Nunc vestibulum nunc lorem, at sodales velit malesuada congue. Nam est tortor, tincidunt sit amet eros vitae, aliquam finibus mauris.',
          link: null
        },
        {
          name: 'Fusce ac ligula laoreet ante dapibus mattis. Nam auctor vulputate aliquam. Suspendisse efficitur, felis sed elementum eleifend, ipsum tellus sodales nisi, ut condimentum nisi sem in nibh. Phasellus suscipit vulputate purus at venenatis. Quisque luctus tincidunt tempor.',
          link: null
          /* tslint:enable:max-line-length */
        },
      ]
    }
  ]
}

