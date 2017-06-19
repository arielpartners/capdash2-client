export const DashboardsMenu = {
  menu: {
    id: 'dashboard',
    name: 'sidebar',
    icon: 'dashboard',
    label: 'Dashboard'
  },
  items: [
    {
      link: 'dashboard',
      text: 'Dashboard'
    }
  ]
}

export const UnitsMenu = {
  menu: {
    id: 'units',
    name: 'sidebar',
    icon: 'building-o',
    label: 'Units',
    badge: {
      value: '817',
      right: true
    }
  },
  items: [
    {
      link: 'units/offline-units',
      text: 'Offline Units',
      badge: {
        value: '817',
        left: true
      }
    },
    {
      link: 'units/hero',
      text: 'HERO',
      badge: {
        value: '200',
        left: true
      }
    },
    {
      link: 'units/ltr',
      text: 'L.T.R',
      badge: {
        value: '105',
        left: true
      }
    },
    {
      link: 'units/demand',
      text: 'Demand & Projections',
      badge: {
        value: '38',
        left: true
      }
    }
  ]
}

export const DemandMenu = {
  link: 'edit-demand/edit',
  icon: 'edit',
  label: 'Edit Demand & Projections'
}

export const IntakeMenu = {
  link: 'ivc',
  icon: 'calendar-check-o',
  label: 'Intake/Vacancy Control'
}

export const ReportsMenu = {
  menu: {
    id: 'reports',
    name: 'sidebar',
    icon: 'bar-chart',
    label: 'Reports'
  },
  items: [
    {
      link: 'reports/general',
      text: 'General Reports'
    },
    {
      menu: {
        id: 'reports/other',
        label: 'Other Reports'
      },
      items: [
        {
          link: 'reports/all',
          text: 'Report All'
        },
        {
          link: 'reports/v1',
          text: 'Report 1'
        },
        {
          link: 'reports/v2',
          text: 'Report 2'
        },
        {
          link: 'reports/v3',
          text: 'Report 3'
        }
      ]
    }
  ]
}

export const SettingsMenu = {
  menu: {
    id: 'settings',
    name: 'sidebar',
    icon: 'cogs',
    label: 'App Settings'
  },
  items: [
    {
      link: 'settings/general',
      text: 'General Settings'
    }
  ]
}
export const HelpMenu = {
  menu: {
    id: 'help',
    name: 'sidebar',
    icon: 'life-buoy',
    label: 'App Help'
  },
  items: [
    {
      link: 'help/general',
      text: 'General Help'
    }
  ]
}
