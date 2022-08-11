
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PaymentsIcon from '@mui/icons-material/Payments';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import BadgeIcon from '@mui/icons-material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import ClassIcon from '@mui/icons-material/Class';

    export  const routes = [
        {
          path: "/",
          name: "Dashboard",
          icon: <DashboardIcon />,
        },
        {
          path: "/calendar",
          name: "Calendar",
          icon: <CalendarMonthIcon />,
        },
        {
          path: "/academic",
          name: "Academic",
          icon: < SchoolIcon />,
          subRoutes: [
            {
              path: "/academic/manage-classes",
              name: "Manage Classes ",
              icon: <ManageAccountsIcon />,
            },
            {
              path: "/academic/manage-curriculum",
              name: "Manage Curriculum",
              icon: <ManageAccountsIcon />,
            },
            {
                path: "/academic/manage-extralessons",
                name: "Manage Extra Lessons",
              icon: <ManageAccountsIcon />,
            },
            {
                path: "/academic/manage-club",
                name: "Manage Club Activities",
              icon: <ManageAccountsIcon />,
            },
            {
                path: "/academic/view-marks-overview",
                name: "View Marks Overview",
              icon: <ClassIcon />,
            },
          ],
        },
        {
          path: "/student",
          name: "Student",
          icon: <PersonIcon />,

          subRoutes: [
            {
              path: "/student/:",
              name: "Manage Student ",
              icon: <ManageAccountsIcon />,
            },
            {
                path: "/student/import-student",
                name: "Import Student",
              icon: <ImportExportIcon />,
            },
            {
                path: "/student/export-student",
                name: "Export Student",
              icon: <ImportExportIcon />,
            },
           
          ],
        },
        {
          path: "/employee",
          name: "Employee",
          icon: <BadgeIcon />,
          subRoutes: [
            {
              path: "/employee/manage-employee",
              name: "Manage Employee ",
              icon: <ManageAccountsIcon />,
            },
            {
                path: "/employee/import-employee",
                name: "Import Employee",
              icon: <ImportExportIcon />,
            },
            {
                path: "/employee/export-employee",
                name: "Export Employee",
              icon: <ImportExportIcon />,
            },
           
          ],
        },
        {
          path: "/report",
          name: "Report",
          icon: <SummarizeIcon />,
        },
        {
          path: "/finance",
          name: "Finance",
          icon: <PaymentsIcon />,
          exact: true,
        },
        {
            path: "/system",
            name: "System",
            icon: <SettingsSuggestIcon />,
            exact: true,
          }
      ];