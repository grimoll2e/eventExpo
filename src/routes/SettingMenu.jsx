import BoothSetting from '../features/booth/BoothSetting'
import HallSetting from '../features/hall/HallSetting'
import UserSetting from '../features/auth/UserSetting'
import Event from '../features/event/Event'
import EventZone from '../features/event/EventZone'
import CreateEventSetting from '../features/event/CreateEventSetting'
import EventPageSetting from '../features/event/EventPageSetting'

import AdminProtectedRouter from '../features/auth/AdminProtectedRouter'

export default function SettingMenu() {

    const settingMenu = [
        {
            name: 'Account Setting',
            element: <UserSetting />,
            forRole: [import.meta.env.VITE_REACT_ROLE_USER, import.meta.env.VITE_REACT_ROLE_ADMIN]
        },
        {
            name: 'Booth',
            element: <BoothSetting />,
            forRole: [import.meta.env.VITE_REACT_ROLE_USER, import.meta.env.VITE_REACT_ROLE_ADMIN]
        },
        {
            name: 'Event',
            element: <Event />,
            forRole: [import.meta.env.VITE_REACT_ROLE_USER, import.meta.env.VITE_REACT_ROLE_ADMIN]
        },
        {
            name: 'SetZone',
            element: (
                <AdminProtectedRouter>
                    <EventZone />
                </AdminProtectedRouter>
            ),
            forRole: [import.meta.env.VITE_REACT_ROLE_ADMIN]
        },
        {
            name: 'CreateEvent',
            element: (
                <AdminProtectedRouter>
                    <CreateEventSetting />
                </AdminProtectedRouter>
            ),
            forRole: [import.meta.env.VITE_REACT_ROLE_ADMIN]
        },
        {
            name: 'Event Page',
            element: (
                <AdminProtectedRouter>
                    <EventPageSetting />
                </AdminProtectedRouter>
            ),
            forRole: [import.meta.env.VITE_REACT_ROLE_ADMIN]
        },
        {
            name: 'Hall Page',
            element: (
                <AdminProtectedRouter>
                    <HallSetting />
                </AdminProtectedRouter>
            ),
            forRole: [import.meta.env.VITE_REACT_ROLE_ADMIN]
        },
    ]
    return settingMenu
}
